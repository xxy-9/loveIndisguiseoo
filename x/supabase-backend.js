(() => {
  const settings = window.lidSupabaseConfig;
  const configured = Boolean(settings?.url && /^sb_publishable_[\w-]+$/.test(settings.publishableKey));
  const db = configured ? window.supabase.createClient(settings.url, settings.publishableKey) : null;
  const bucket = db?.storage.from('lid-topic-images');
  const pageSize = 30;

  function unwrap({ data, error }) {
    if (error) throw error;
    return data;
  }

  async function authenticatedUser() {
    const { session } = unwrap(await db.auth.getSession());
    if (!session) throw new Error('401');
    return session.user;
  }

  function player(row) {
    return { name: row.name, handle: String(row.handle).padStart(2, '0') };
  }

  async function profile(method, data) {
    const user = await authenticatedUser();
    const table = () => db.from('lid_profiles');
    const select = () => table().select('name,handle').eq('user_id', user.id).maybeSingle();
    if (method === 'PUT') {
      return player(unwrap(await table().update({ name: data.name.trim() })
        .eq('user_id', user.id).select('name,handle').single()));
    }
    const existing = unwrap(await select());
    if (existing) return player(existing);
    const candidate = data?.name || user.user_metadata?.lid_display_name;
    const name = typeof candidate === 'string' ? candidate.trim() : '';
    if (!name) throw new Error('404');
    unwrap(await table().upsert({ user_id: user.id, name }, { onConflict: 'user_id', ignoreDuplicates: true }));
    return player(unwrap(await select()));
  }

  async function pagination(query, before) {
    if (before !== null) {
      if (!/^[1-9]\d*$/.test(before) || !Number.isSafeInteger(Number(before))) throw new Error('400');
      query = query.lt('id', Number(before));
    }
    const rows = unwrap(await query.order('id', { ascending: false }).limit(pageSize + 1));
    const entries = rows.slice(0, pageSize);
    return { entries, next: rows.length > pageSize ? entries.at(-1).id : null };
  }

  async function topics(id, method, before, form) {
    if (method === 'GET') {
      const { entries, next } = await pagination(db.from('lid_topic_posts')
        .select('id,body,images,created_at,author:lid_profiles(name,handle)').eq('topic', id), before);
      const paths = [...new Set(entries.flatMap(row => row.images))];
      const signed = paths.length ? unwrap(await bucket.createSignedUrls(paths, 3600)) : [];
      const urls = new Map(signed.map(item => [item.path, item.signedUrl]));
      return { entries: entries.map(row => ({
        id: row.id, text: row.body, createdAt: row.created_at, author: player(row.author),
        images: row.images.map(path => urls.get(path)).filter(Boolean)
      })), next };
    }
    const user = await authenticatedUser();
    const submission = form.get('submission');
    const files = form.getAll('images');
    const images = [];
    for (const file of files) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (file.type !== 'image/jpeg' || bytes.length < 4 || bytes.length > 1048576 ||
          bytes[0] !== 255 || bytes[1] !== 216 || bytes.at(-2) !== 255 || bytes.at(-1) !== 217) {
        throw Object.assign(new Error('Invalid image'), { detail: '请上传不超过 1 MiB 的 JPEG 图片。' });
      }
      const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
      const name = Array.from(digest, byte => byte.toString(16).padStart(2, '0')).join('');
      const path = user.id + '/' + submission + '/' + name + '.jpg';
      if (images.includes(path)) continue;
      const { error } = await bucket.upload(path, file, { upsert: false, contentType: 'image/jpeg' });
      if (error) {
        const duplicate = ['Duplicate', 'ResourceAlreadyExists', 'KeyAlreadyExists'].includes(error.code) ||
          /^(?:asset already exists|the resource already exists)\.?$/i.test(error.message);
        if (!duplicate) throw Object.assign(error, { detail: '图片上传失败，请重试。' });
      }
      images.push(path);
    }
    try {
      return { id: unwrap(await db.rpc('lid_publish_topic', {
        p_topic: id, p_submission: submission, p_body: form.get('text'), p_images: images
      })) };
    } catch (error) {
      if (error.code === '22023') error.detail = error.message;
      throw error;
    }
  }

  async function comments(id, method, before, data) {
    const table = db.from('lid_comments');
    if (method === 'GET') {
      const { entries, next } = await pagination(table
        .select('id,body,created_at,author:lid_profiles(name,handle)').eq('post_id', id), before);
      return { entries: entries.map(row => ({
        id: row.id, body: row.body, createdAt: row.created_at, name: row.author.name, playerId: row.author.handle
      })), next };
    }
    const user = await authenticatedUser();
    unwrap(await table.upsert({
      author_id: user.id, post_id: id, body: data.body, submission_id: data.submission
    }, { onConflict: 'post_id,author_id,submission_id', ignoreDuplicates: true }));
    return { ok: true };
  }

  async function reactions(method, data) {
    if (method === 'PUT') {
      const user = await authenticatedUser();
      const table = db.from('lid_reactions');
      if (data.value) {
        unwrap(await table.upsert({ user_id: user.id, post_id: data.post, kind: data.kind }, {
          onConflict: 'user_id,post_id,kind', ignoreDuplicates: true
        }));
      } else {
        unwrap(await table.delete().eq('user_id', user.id).eq('post_id', data.post).eq('kind', data.kind));
      }
    }
    return unwrap(await db.rpc('lid_reaction_state'));
  }

  window.lidBackend = {
    configured,
    async authenticate(mode, email, password, name) {
      if (mode === 'signup') {
        const redirect = new URL(location.href);
        redirect.search = redirect.hash = '';
        const result = unwrap(await db.auth.signUp({
          email, password, options: { data: { lid_display_name: name }, emailRedirectTo: redirect.href }
        }));
        return Boolean(result.session);
      }
      unwrap(await db.auth.signInWithPassword({ email, password }));
      return true;
    },
    async signOut() {
      unwrap(await db.auth.signOut({ scope: 'local' }));
    },
    async api(path, method = 'GET', data) {
      if (!db) throw new Error('503');
      const [route, query = ''] = path.split('?');
      const [section, encoded = ''] = route.split('/');
      const id = decodeURIComponent(encoded);
      const before = new URLSearchParams(query).get('before');
      if (section === 'player') return profile(method, data);
      if (section === 'topics') return topics(id, method, before, data);
      if (section === 'comments') return comments(id, method, before, data);
      if (section === 'reactions') return reactions(method, data);
      throw new Error('404');
    }
  };
})();
