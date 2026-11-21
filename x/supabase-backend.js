(() => {
  const settings = window.lidSupabaseConfig;
  const configured = Boolean(settings?.url && /^sb_publishable_[\w-]+$/.test(settings.publishableKey));
  const { hostname, origin, protocol } = location;
  const useVercelProxy = protocol !== 'file:' && hostname !== 'localhost' &&
    hostname !== '127.0.0.1' && !hostname.endsWith('.github.io');
  const endpoint = useVercelProxy ? origin + '/supabase/' : settings?.url;
  // Keep existing Supabase sessions under the original project storage key.
  const db = configured ? window.supabase.createClient(endpoint, settings.publishableKey, {
    auth: { storageKey: 'sb-' + new URL(settings.url).hostname.split('.')[0] + '-auth-token' }
  }) : null;
  const bucket = db?.storage.from('lid-topic-images');
  const avatarBucket = db?.storage.from('lid-player-avatars');
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

  function player(row, avatars) {
    return {
      name: row.name, handle: String(row.handle).padStart(2, '0'),
      authorId: row.user_id, avatarUrl: avatars?.get(row.avatar_path)
    };
  }

  const profileFields = 'user_id,name,handle,avatar_path';

  async function avatarUrls(profiles) {
    const paths = [...new Set(profiles.map(row => row.avatar_path).filter(Boolean))];
    if (!paths.length) return new Map();
    const { data } = await avatarBucket.createSignedUrls(paths, 3600);
    return new Map((data ?? []).map(item => [item.path, item.signedUrl]));
  }

  async function profilePlayer(row) {
    return player(row, await avatarUrls([row]));
  }

  async function profile(method, data) {
    const user = await authenticatedUser();
    const table = () => db.from('lid_profiles');
    const select = () => table().select(profileFields).eq('user_id', user.id).maybeSingle();
    if (method === 'PUT') {
      const updates = { name: data.name.trim() };
      if (data.avatar) {
        const path = user.id + '/avatar.jpg';
        unwrap(await avatarBucket.upload(path, data.avatar, {
          upsert: true, contentType: 'image/jpeg', cacheControl: '0'
        }));
        updates.avatar_path = path;
      }
      return profilePlayer(unwrap(await table().update(updates)
        .eq('user_id', user.id).select(profileFields).single()));
    }
    const existing = unwrap(await select());
    if (existing) return profilePlayer(existing);
    const candidate = data?.name || user.user_metadata?.lid_display_name;
    const name = typeof candidate === 'string' ? candidate.trim() : '';
    if (!name) throw new Error('404');
    unwrap(await table().upsert({ user_id: user.id, name }, { onConflict: 'user_id', ignoreDuplicates: true }));
    return profilePlayer(unwrap(await select()));
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

  async function topicPosts(column, id, before) {
    const { entries, next } = await pagination(db.from('lid_topic_posts')
      .select('id,body,images,created_at,author:lid_profiles(' + profileFields + ')').eq(column, id), before);
    const paths = [...new Set(entries.flatMap(row => row.images))];
    const [signed, avatars] = await Promise.all([
      paths.length ? bucket.createSignedUrls(paths, 3600).then(unwrap) : [],
      avatarUrls(entries.map(row => row.author))
    ]);
    const urls = new Map(signed.map(item => [item.path, item.signedUrl]));
    return { entries: entries.map(row => ({
      id: row.id, text: row.body, createdAt: row.created_at, author: player(row.author, avatars),
      images: row.images.map(path => urls.get(path)).filter(Boolean)
    })), next };
  }

  async function topics(id, method, before, form) {
    if (method === 'GET') return topicPosts('topic', id, before);
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

  async function commentState(ids) {
    if (!ids.length) return new Map();
    const rows = unwrap(await db.rpc('lid_comment_state', { p_ids: ids }));
    return new Map(rows.map(row => [String(row.comment_id), row]));
  }

  async function comments(id, method, before, parent, data) {
    const table = db.from('lid_comments');
    if (method === 'GET') {
      const query = table.select('id,body,created_at,author:lid_profiles(' + profileFields + ')').eq('post_id', id);
      const { entries, next } = await pagination(
        parent === null ? query.is('parent_comment_id', null) : query.eq('parent_comment_id', parent), before);
      const [states, avatars] = await Promise.all([
        commentState(entries.map(row => row.id)), avatarUrls(entries.map(row => row.author))
      ]);
      return { entries: entries.map(row => ({
        id: row.id, body: row.body, createdAt: row.created_at, author: player(row.author, avatars),
        ...states.get(String(row.id))
      })), next };
    }
    const user = await authenticatedUser();
    unwrap(await table.upsert({
      author_id: user.id, post_id: id, body: data.body, submission_id: data.submission,
      parent_comment_id: data.parent ?? null
    }, { onConflict: 'post_id,author_id,submission_id', ignoreDuplicates: true }));
    return { ok: true };
  }

  async function likeComment(id, data) {
    const user = await authenticatedUser();
    const table = db.from('lid_comment_likes');
    if (data.value) {
      unwrap(await table.upsert({ comment_id: id, user_id: user.id }, {
        onConflict: 'comment_id,user_id', ignoreDuplicates: true
      }));
    } else {
      unwrap(await table.delete().eq('comment_id', id).eq('user_id', user.id));
    }
    const state = (await commentState([id])).get(id);
    if (!state) throw new Error('404');
    return state;
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

  async function confirmEmailFromLink() {
    if (!db) return null;
    const tokenHash = new URLSearchParams(location.hash.slice(1)).get('lid_confirm_token');
    if (!tokenHash) return null;
    const pageUrl = new URL(location.href);
    pageUrl.hash = '';
    history.replaceState(history.state, '', pageUrl.href);
    try {
      unwrap(await db.auth.verifyOtp({ token_hash: tokenHash, type: 'email' }));
      return true;
    } catch {
      return false;
    }
  }

  window.lidBackend = {
    emailConfirmation: confirmEmailFromLink(),
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
      const params = new URLSearchParams(query);
      const before = params.get('before');
      if (section === 'player') return profile(method, data);
      if (section === 'topics') return topics(id, method, before, data);
      if (section === 'player-posts' && method === 'GET') return topicPosts('author_id', id, before);
      if (section === 'comments') return comments(id, method, before, params.get('parent'), data);
      if (section === 'comment-likes' && method === 'PUT') return likeComment(id, data);
      if (section === 'reactions') return reactions(method, data);
      throw new Error('404');
    }
  };
})();
