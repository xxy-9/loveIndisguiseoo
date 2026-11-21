(() => {
  const accounts = [
    { id: 'jaehee', name: '姜在熙', handle: 'kang_jaehee' },
    { id: 'yoon', name: '尹伊俊', handle: 'yoon_yijun' },
    { id: 'sihyeon', name: '金时贤', handle: 'kim_sihyeon' },
    { id: 'sia', name: '李诗雅', handle: 'lee_sia' },
    { id: 'seokjin', name: '金硕珍', handle: 'kim_seokjin' },
    { id: 'hyejeong', name: '李慧贞', handle: 'lee_hyejeong' },
    { id: 'park', name: '朴奉利', handle: 'park_bongi' },
    { id: 'jeong', name: '郑完求', handle: 'jeong_wangu' },
    { id: 'secretary', name: '郑秘书', handle: 'secretary_jeong' },
    { id: 'taegang', name: '泰钢集团', handle: 'taespatch.kr' }
  ];
  accounts.forEach(a=>a.verified=true);
  accounts.push(
    {id:'npc-oo',name:'oo',handle:'name',npc:true},
    {id:'npc-heart',name:'heart',handle:'name_heart',npc:true},
    {id:'npc-nini',name:'nini',handle:'nishimurariki',npc:true},
    {id:'npc-jia',name:'JIA',handle:'JJJJJia',npc:true,avatar:'x/npc-jia.jpg'},
    {id:'npc-chung',name:'충성',handle:'name_chung',npc:true},
    {id:'npc-sam',name:'ㅇㅅㅇ',handle:'samkilove',npc:true,avatar:'x/npc-sam.jpg'}
  );
  accounts.push(
    {id:'npc-jpdxo',name:'jpdxo',handle:'ssdsser',npc:true},
    {id:'npc-evan',name:'evan',handle:'calangh',npc:true},
    {id:'npc-kk',name:'kk',handle:'isngzhnj',npc:true},
    {id:'npc-rice',name:'🍙🍴',handle:'tuancan9012',npc:true,avatar:'x/npc-rice.jpg'},
    {id:'npc-firstlove',name:'첫사랑',handle:'uabhbvffvb',npc:true,avatar:'x/npc-firstlove.jpg'},
    {id:'npc-yjji',name:'yjji💕💕',handle:'ygnkom',npc:true,avatar:'x/npc-yjji.jpg'}
  );
  accounts.find(a=>a.id==='taegang').bio='接受关于泰钢集团的一切情报。\n※欢迎和泰钢集团有关的各种小道消息\n※欢迎尹伊俊常务的消息及目击之谈';
  accounts.push(...[{"id":"npc-ssssj","name":"SSSSj","handle":"ZCCZJY","npc":true,"avatar":"x/npc-ssssj.jpg"},{"id":"npc-angela","name":"angelamerkel","handle":"Angelamerkel137","npc":true,"avatar":"x/npc-angela.jpg"},{"id":"npc-yu","name":"☔yu","handle":"yushiga","npc":true,"avatar":"x/npc-yu.jpg"},{"id":"npc-super","name":"슈퍼 알라","handle":"superwoman","npc":true,"avatar":"x/npc-super.jpg"},{"id":"npc-nowork","name":"출근하지 마세요","handle":"uabgbsjjznb","npc":true},{"id":"npc-momo","name":"momo","handle":"lovethis6465","npc":true,"avatar":"x/npc-momo.jpg"}]);
  accounts.push({id:'npc-love-master',name:'恋爱大师',handle:'love_master',npc:true,avatar:'x/npc-love-master.jpg'});
  accounts.push(
    {"id":"npc-contact-op","name":"bolt 🧷","handle":"anchorbolt_daily","npc":true},
    {"id":"npc-contact-stairs","name":"afterhours","handle":"stairs_break","npc":true},
    {"id":"npc-contact-skeptic","name":"orbit","handle":"just_scrolling","npc":true},
    {"id":"npc-contact-pantry","name":"🍵","handle":"pantry_witness","npc":true},
    {"id":"npc-contact-elevator","name":"sunday.exe","handle":"lift_queue","npc":true},
    {"id":"npc-contact-lobby","name":"moth","handle":"lobby_passerby","npc":true},
    {"id":"npc-contact-park","name":"floaty 🎡","handle":"everland_guest","npc":true},
    {"id":"npc-contact-oldtimer","name":"paperclip","handle":"office_oldhand","npc":true},
    {"id":"npc-contact-share","name":"mint 🌿","handle":"desk_by_window","npc":true},
    {"id":"npc-contact-caution","name":"🤫","handle":"keep_it_quiet","npc":true}
  );
  accounts.push(
    {"id":"npc-everland-thread-op","name":"unnamed.exe","handle":"no_name_needed","npc":true},
    {"id":"npc-everland-clock","name":"clockedout ⏰","handle":"overtime_tab","npc":true},
    {"id":"npc-everland-staff","name":"turnstile 🎟️","handle":"late_shift_gate","npc":true},
    {"id":"npc-everland-guest","name":"ferris","handle":"ferris_loop","npc":true}
  );
  accounts.push({"id":"npc-everland-insider","name":"hush 🫧","handle":"hush_afterhours","npc":true});
  const followedAccounts=accounts.filter(a=>!a.npc);
  function verifiedBadge(author){
    const badge=document.createElement('span');badge.className='x-verified';
    badge.setAttribute('aria-label','已认证');badge.title='已认证';
    badge.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1d9bf0" d="m12 1 3 2 3.6.4 1 3.5 2.4 2.7-1 3.4.5 3.6-3.2 1.7-2 3-3.5-.6-3.4 1-2.7-2.4-3.5-1L2.8 15 .8 12l2-3 .4-3.6 3.5-1L9.4 2Z"/><path fill="none" stroke="white" stroke-width="2" d="m7 12 3 3 7-7"/></svg>';
    return badge;
  }
  const playerAvatarKey = 'iphone-x-player-avatar-v2';
  const byId = id => document.getElementById(id);
  const root = byId('xView');
  const views = [...root.querySelectorAll('[data-x-page]')];
  const nav = byId('xNav');
  const title = byId('xHeaderTitle');
  const back = byId('xBack');
  const userButton = byId('xUser');
  const file = byId('xAvatarFile');
  const save = byId('xSaveAvatar');
  const editName = byId('xEditName');
  const replyBar = byId('xReplyBar');
  const replyField = byId('xCommentText');
  const replySubmit = byId('xCommentSubmit');
  const replyStatus = byId('xCommentStatus');
  replyField.oninput = () => { replySubmit.hidden = !replyField.value.trim(); };
  let savingProfile = false;
  const message = byId('xEditStatus');
  const query = byId('xSearch');
  const appLogo = byId('openX').querySelector('svg');
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  let account = null;
  let connecting = false;
  async function api(path, method = 'GET', data) {
    const form = data instanceof FormData;
    const response = await fetch('/api/x/' + path, {
      method, cache:'no-store',
      headers:data && !form ? {'Content-Type':'application/json'} : {},
      ...(data ? {body:form ? data : JSON.stringify(data)} : {})
    });
    if (!response.ok) {
      const error = new Error(String(response.status));
      if (path.startsWith('topics/')) error.detail = (await response.json().catch(() => ({}))).error;
      throw error;
    }
    return response.json();
  }
  async function signIn(name) {
    if (connecting) return;
    connecting = true;
    const status = byId('xLoginStatus');
    const submit = byId('xPlayerLogin').querySelector('button');
    submit.disabled = true;
    status.textContent = '正在连接…';
    try {
      const player = await (name ? api('player','POST',{name}) : api('player'));
      account = {id:'player',...player};
      playerAvatar = read(playerAvatarKey + ':' + account.handle);
      if (root.classList.contains('active')) show('home');
      refreshReactions();
      status.textContent = '';
    } catch (error) {
      status.textContent = error.message === '404' && !name ? '' : '连接失败，请重试。';
    } finally {
      connecting = false;
      submit.disabled = false;
    }
  }
  let profile = null;
  let profileTab = 'posts';
  let page = '';
  let profileBack = 'home';
  let editing = null;
  let draft = '';
  let uploadRun = 0;
  let playerAvatar = null;
  function avatar(account) {
    if(account.npc)return account.avatar||'x/player.svg';
    return account.id === 'player' ? playerAvatar || 'x/player.svg' : 'x/' + account.id + '.jpg';
  }
  function avatarImage(account) {
    const image = document.createElement('img');
    image.className = 'x-avatar';
    image.alt = '';
    image.src = avatar(account);
    return image;
  }
  function buttonFor(account, activate) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'x-account';
    const label = document.createElement('span');
    const name = document.createElement('strong');
    const handle = document.createElement('small');
    const chevron = document.createElement('span');
    name.textContent = account.name;
    if(account.verified)name.append(verifiedBadge(account));
    handle.textContent = '@' + account.handle;
    handle.lang = 'ko';
    chevron.className = 'x-chevron';
    chevron.textContent = '›';
    chevron.setAttribute('aria-hidden', 'true');
    label.append(name, handle);
    button.append(avatarImage(account), label, chevron);
    button.onclick = () => activate(account);
    return button;
  }
  byId('xPlayerLogin').onsubmit = event => {
    event.preventDefault();
    const input = byId('xPlayerName');
    const name = input.value.trim();
    input.setCustomValidity(name ? '' : '请输入名字');
    if (!input.reportValidity()) return;
    signIn(name);
  };
  byId('xPlayerName').oninput = event => event.target.setCustomValidity('');
  function openProfile(selected) {
    profileBack = ['search','topic','post','settings','bookmarks','following'].includes(page) ? page : 'home';
    profile = selected;
    profileTab = 'posts';
    show('profile');
  }
  const hiddenTaegang = {id:'hidden-taegang', name:'隐秘的泰钢', writable:false};
  const trends = [
    hiddenTaegang,
    {id:'taegang-talent', name:'泰钢人才聚集地', writable:true},
    {id:'leopard-cat-birth', name:'豹豹猫猫我出生了', writable:true}
  ];
  let activeTopic = hiddenTaegang;
  const topicCompose = byId('xTopicCompose');
  const topicDialog = byId('xTopicDialog');
  const topicForm = byId('xTopicForm');
  const topicText = byId('xTopicText');
  const topicImages = byId('xTopicImages');
  const topicSubmit = byId('xTopicSubmit');
  const topicStatus = byId('xTopicStatus');
  const topicFeedStatus = byId('xTopicFeedStatus');
  const topicList = byId('xTopicPosts');
  const topicMore = byId('xTopicMore');
  let topicRequest = 0;
  let cursor = null;
  let submission = null;

  topicCompose.onclick = () => {
    if (page !== 'topic' || !activeTopic.writable || topicDialog.open) return;
    byId('xTopicDialogTag').textContent = '#' + activeTopic.name;
    topicDialog.showModal();
  };
  byId('xTopicClose').onclick = () => topicDialog.close();
  new MutationObserver(() => {
    if (!root.classList.contains('active') && topicDialog.open) topicDialog.close();
  }).observe(root, {attributes:true, attributeFilter:['class']});

  function openTopic(topic) {
    if (topic !== activeTopic) {
      topicForm.reset();
      submission = null;
      topicStatus.textContent = '';
    }
    activeTopic = topic;
    show('topic');
  }

  function sharedTopicCard(entry) {
    const article = node('article','','x-post');
    const header = node('div','','x-post-author');
    const author = node('div','','x-post-byline');
    author.append(node('strong',entry.author.name),node('span','@'+entry.author.handle,'x-post-muted'));
    const image = avatarImage({npc:true});
    header.append(image,author);
    article.append(header);
    if (entry.text) article.append(node('p',entry.text,'x-post-text x-topic-copy'));
    if (entry.images.length) article.append(postGallery({images:entry.images}));
    const date = new Date(entry.createdAt);
    const stamp = node('time',date.toLocaleString('zh-CN',{dateStyle:'medium',timeStyle:'short'}),'x-post-date');
    stamp.dateTime = date.toISOString();
    article.append(stamp);
    return article;
  }

  async function loadTopic(before = null) {
    const topic = activeTopic;
    const run = ++topicRequest;
    const current = () => page === 'topic' && activeTopic === topic && run === topicRequest;
    topicMore.hidden = true;
    topicFeedStatus.textContent = '正在加载贴文…';
    if (before === null) {
      topicList.replaceChildren();
      cursor = null;
    }
    try {
      const result = await api('topics/' + topic.id + (before === null ? '' : '?before=' + before));
      if (!current()) return;
      topicFeedStatus.textContent = '';
      if (before === null && !result.entries.length) topicList.append(node('p','暂无贴文','x-empty'));
      topicList.append(...result.entries.map(sharedTopicCard));
      cursor = result.next;
      topicMore.textContent = '加载更多';
      topicMore.hidden = cursor === null;
    } catch {
      if (!current()) return;
      topicFeedStatus.textContent = '暂时无法加载贴文。';
      cursor = before;
      topicMore.textContent = '重试';
      topicMore.hidden = false;
    }
  }
  topicMore.onclick = () => loadTopic(cursor);

  function renderTopic() {
    byId('xTopicHeading').textContent = '#' + activeTopic.name;
    byId('xBody').classList.toggle('x-topic-feed-compose',activeTopic.writable);
    topicCompose.hidden = !activeTopic.writable;
    topicFeedStatus.textContent = '';
    topicMore.hidden = true;
    if (activeTopic.writable) {
      loadTopic();
    } else {
      topicRequest++;
      renderPosts(topicList,posts.filter(post => !post.parent && post.topic === activeTopic.name).sort((a,b) => postTime(b)-postTime(a)));
    }
  }

  async function prepareTopicImage(file) {
    if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 15 * 1024 * 1024) {
      throw new Error('请选择 15 MB 以内的 JPG、PNG 或 WebP 图片。');
    }
    let bitmap;
    try { bitmap = await createImageBitmap(file); }
    catch { throw new Error('无法读取这张图片，请换一张。'); }
    const canvas = document.createElement('canvas');
    try {
      const scale = Math.min(1, 1280 / Math.max(bitmap.width,bitmap.height));
      canvas.width = Math.max(1,Math.round(bitmap.width * scale));
      canvas.height = Math.max(1,Math.round(bitmap.height * scale));
      const context = canvas.getContext('2d',{alpha:false});
      context.fillStyle = '#fff';
      context.fillRect(0,0,canvas.width,canvas.height);
      context.drawImage(bitmap,0,0,canvas.width,canvas.height);
      const image = await new Promise(resolve => canvas.toBlob(resolve,'image/jpeg',0.82));
      if (!image || image.size > 1024 * 1024) throw new Error('图片过大，请换一张。');
      return image;
    } finally {
      bitmap.close();
      canvas.width = canvas.height = 1;
    }
  }

  topicText.oninput = topicImages.onchange = () => {
    submission = null;
    topicStatus.textContent = '';
  };
  topicForm.onsubmit = async event => {
    event.preventDefault();
    if (topicSubmit.disabled || !activeTopic.writable) return;
    const topic = activeTopic;
    const text = topicText.value.trim();
    const images = Array.from(topicImages.files);
    if ((!text && !images.length) || images.length > 4) {
      topicStatus.textContent = images.length > 4 ? '每次最多添加 4 张图片。' : '请输入文字或选择图片。';
      return;
    }
    const id = submission ||= crypto.randomUUID();
    topicSubmit.disabled = topicText.disabled = topicImages.disabled = true;
    topicStatus.textContent = '正在发布…';
    try {
      const form = new FormData();
      form.set('submission',id);
      form.set('text',text);
      for (const [index,image] of images.entries()) form.append('images',await prepareTopicImage(image),'image-' + (index+1) + '.jpg');
      try { await api('topics/' + topic.id,'POST',form); }
      catch (error) { throw new Error(error.detail || '发布失败，请重试。'); }
      if (activeTopic === topic && submission === id) {
        submission = null;
        topicForm.reset();
        topicStatus.textContent = '';
        if (topicDialog.open) topicDialog.close();
        if (page === 'topic') loadTopic();
      } else if (page === 'topic' && activeTopic === topic) {
        loadTopic();
      }
    } catch (error) {
      if (activeTopic === topic && submission === id) topicStatus.textContent = error.message;
    } finally {
      topicSubmit.disabled = topicText.disabled = topicImages.disabled = false;
    }
  };
  function renderSearch() {
    const value = query.value.trim().replace(/^[@#]/,'').toLowerCase();
    const results = byId('xResults');
    results.replaceChildren();
    const matchingTopics = trends.filter(topic => !value || topic.name.toLowerCase().includes(value));
    if (matchingTopics.length) results.append(node('h2','流行趋势','x-trends-heading'));
    for (const topic of matchingTopics) {
      const trend = node('button','','x-trend');
      trend.type = 'button';
      trend.append(node('small','娱乐 · 流行趋势'),node('strong','#' + topic.name),node('small','查看话题贴文'));
      trend.onclick = () => openTopic(topic);
      results.append(trend);
    }
    const matches = value ? accounts.filter(a => (a.name + ' ' + a.handle).toLowerCase().includes(value)) : [];
    results.append(...matches.map(a => buttonFor(a,openProfile)));
    byId('xNoResults').hidden = matchingTopics.length > 0 || matches.length > 0;
  }
  function renderHome() {
    renderPosts(byId('xTimeline'), posts.filter(post => !post.parent && followedAccounts.some(author => author.id === post.author)).sort((left,right) => postTime(right)-postTime(left)));
    const strip = byId('xSuggestions');
    strip.replaceChildren(...followedAccounts.map(selected => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', selected.name + ' @' + selected.handle);
      button.append(avatarImage(selected));
      button.onclick = () => openProfile(selected);
      return button;
    }));
  }
  function renderProfile() {
    byId('xProfileAvatar').replaceChildren(avatarImage(profile));
    byId('xProfileName').textContent = profile.name;
    if(profile.verified)byId('xProfileName').append(verifiedBadge(profile));
    byId('xProfileHandle').textContent = '@' + profile.handle;
    byId('xProfileBio').textContent=profile.bio||'';
    byId('xProfileBio').hidden=!profile.bio;
    byId('xEditProfile').hidden = profile !== account;
    byId('xFollowingProfile').hidden = profile !== account;
    byId('xFollowingProfile').textContent = followedAccounts.length + ' 正在关注';
    byId('xProfileTabs').querySelectorAll('[data-profile-tab]').forEach(button=>{
      button.setAttribute('aria-selected',String(button.dataset.profileTab===profileTab));
      button.onclick=()=>{profileTab=button.dataset.profileTab;renderProfile();};
    });
    const authored=posts.filter(post=>post.author===profile.id&&(profileTab==='replies'?Boolean(post.parent):!post.parent));
    const rootTime=post=>{let top=post;while(top.parent)top=posts.find(p=>p.id===top.parent);return postTime(top);};
    authored.sort((a,b)=>rootTime(b)-rootTime(a)||posts.indexOf(b)-posts.indexOf(a));
    const list=byId('xProfilePosts');list.replaceChildren();
    if(!authored.length)list.append(node('p',profileTab==='replies'?'暂无回复':'暂无贴文','x-empty'));
    for(const post of authored){
      if(profileTab==='replies'){
        const parent=posts.find(p=>p.id===post.parent);const context=node('button','回复 '+accounts.find(a=>a.id===parent.author).name,'x-profile-reply-context');context.type='button';
        context.onclick=()=>{postHistory.length=0;postHistory.push({page:'profile',id:openPostId});openPostId=parent.id;show('post');};list.append(context);
      }
      list.append(postCard(post));
    }
  }
  function show(next) {
    if (topicDialog.open) topicDialog.close();
    topicCompose.hidden = true;
    byId('xBody').classList.remove('x-topic-feed-compose');
    page = next;
    root.classList.toggle('x-post-mode', next === 'post');
    replyBar.hidden = true;
    replyBar.onsubmit = null;
    if (root.classList.contains('active')) {
      byId('status').classList.remove('light');
      byId('homeIndicator').classList.remove('light');
    }
    views.forEach(view => { view.hidden = view.dataset.xPage !== next; });
    nav.hidden = !account || next === 'login' || next === 'edit';
    back.hidden = next === 'home';
    userButton.hidden = !account || next === 'login' || next === 'edit';
    if (account) userButton.replaceChildren(avatarImage(account));
    const labels = {login:'', home:'', search:'搜索', profile:profile?.name, edit:'编辑个人资料', settings:'设置', post:'贴文', bookmarks:'书签', following:'正在关注', topic:'#' + activeTopic.name};
    title.textContent = labels[next] || '';
    if (!title.textContent) {
      const logo = appLogo.cloneNode(true);
      logo.classList.add('x-logo');
      title.append(logo);
    }
    nav.querySelectorAll('[data-x-nav]').forEach(button => {
      if (button.dataset.xNav === next) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    if (next === 'home') renderHome();
    if (next === 'search') renderSearch();
    if (next === 'topic') renderTopic();
    if (next === 'profile') renderProfile();
    if (next === 'post') renderThread();
    if (next === 'bookmarks') renderBookmarks();
    if (next === 'following') byId('xFollowingList').replaceChildren(...followedAccounts.map(author => buttonFor(author, openProfile)));
    byId('xBody').scrollTop = 0;
  }
  function goBack() {
    if (page === 'post') {
      const previous = postHistory.pop();
      if (previous) { openPostId = previous.id; show(previous.page); }
      else show('home');
      return;
    }
    if (page === 'topic') {show('search');return;}
    if (page === 'following') { show('settings'); return; }
    if (page === 'bookmarks') { show('settings'); return; }
    if (page === 'edit') { uploadRun++; show('profile'); return; }
    if (page === 'profile') { show(profileBack); return; }
    if (page === 'search' || page === 'settings') { show('home'); return; }
    showView('homeView');
    ensureArrival();
  }
  function editAvatar() {
    if (profile !== account) return;
    editing = account;
    draft = '';
    file.value = '';
    byId('xAvatarPreview').src = avatar(account);
    editName.value = account.name;
    byId('xEditHandle').textContent = '@' + account.handle;
    save.disabled = true;
    message.textContent = '';
    show('edit');
  }
  async function squareImage(imageFile) {
    const url = URL.createObjectURL(imageFile);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      const side = Math.min(image.naturalWidth, image.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 360;
      const context = canvas.getContext('2d');
      context.fillStyle = '#fff';
      context.fillRect(0,0,360,360);
      context.drawImage(image,(image.naturalWidth-side)/2,(image.naturalHeight-side)/2,side,side,0,0,360,360);
      return canvas.toDataURL('image/jpeg', .88);
    } finally { URL.revokeObjectURL(url); }
  }
  const updateProfileSave = () => {
    const name = editName.value.trim();
    save.disabled = savingProfile || !name || (!draft && name === account?.name);
  };
  editName.oninput = updateProfileSave;
  file.onchange = async () => {
    const selected = file.files[0];
    if (!selected || page !== 'edit') return;
    const run = ++uploadRun;
    save.disabled = true;
    draft = '';
    message.textContent = '';
    try {
      const data = await squareImage(selected);
      if (run !== uploadRun || page !== 'edit') return;
      draft = data;
      byId('xAvatarPreview').src = draft;
    } catch {
      if (run === uploadRun) message.textContent = '无法打开这张图片。请选择另一张。';
    } finally {
      if (run === uploadRun && page === 'edit') updateProfileSave();
    }
  };
  save.onclick = async () => {
    const name = editName.value.trim();
    if (savingProfile || !name || editing !== account || page !== 'edit') return;
    const image = draft;
    savingProfile = true;
    editName.disabled = file.disabled = save.disabled = true;
    message.textContent = '';
    try {
      if (name !== account.name) Object.assign(account,await api('player','PUT',{name}));
      if (image) {
        playerAvatar = image;
        try { localStorage.setItem(playerAvatarKey + ':' + account.handle,image); }
        catch { showToast('头像只在本次打开期间有效'); }
      }
      if (page === 'edit') show('profile');
    } catch {
      message.textContent = '保存失败，请重试。';
    } finally {
      savingProfile = editName.disabled = file.disabled = false;
      updateProfileSave();
    }
  };

  const posts = [
    {"id":"ht-everland-promo","author":"npc-everland-thread-op","text":"看我在爱宝乐园宣传片里发现了什么\n\n谁还记得上周那个热度很高但是神秘消失的帖子，慕名去搜了一下常务拉着秘书笑的图片，然后就搜出来这个……","date":"2026/11/10","time":"23:45","topic":"隐秘的泰钢","images":["post-attachments/everland-promo-1.webp","post-attachments/everland-promo-2.webp","post-attachments/everland-promo-3.webp"],"credit":"转自@西瓜椰椰"},
    {"id":"ht-everland-promo-1","parent":"ht-everland-promo","author":"npc-evan","text":"等等……？这是常务？"},
    {"id":"ht-everland-promo-2","parent":"ht-everland-promo","author":"npc-contact-skeptic","text":"常务竟然会搂着秘书笑吗……看来是我起太早了还没睡醒"},
    {"id":"ht-everland-promo-3","parent":"ht-everland-promo-2","author":"npc-sam","text":"可是现在是中午十一点"},
    {"id":"ht-everland-promo-4","parent":"ht-everland-promo","author":"npc-contact-pantry","text":"姜秘书也太帅了……"},
    {"id":"ht-everland-promo-5","parent":"ht-everland-promo-4","author":"npc-oo","text":"哎？关注点应该是这个吗？"},
    {"id":"ht-everland-promo-6","parent":"ht-everland-promo","author":"npc-contact-stairs","text":"常务头上那一块红色印子是什么鬼？他不是一直致力于以完美精致形象示人吗"},
    {"id":"ht-everland-promo-7","parent":"ht-everland-promo-6","author":"npc-everland-insider","text":"知情人告诉你，是他旁边这位打的"},
    {"id":"ht-everland-promo-8","parent":"ht-everland-promo-7","author":"npc-kk","text":"你睡醒了吗？姜秘书有这胆子的话明天就可以去竞选总统了"},
    {"id":"ht-everland-promo-9","parent":"ht-everland-promo-7","author":"npc-contact-lobby","text":"如果真是姜秘书打的，我今早怎么会看见他来上班呢，应该已经长眠于地下了吧……"},
    {"id":"ht-everland-promo-10","parent":"ht-everland-promo","author":"npc-contact-park","text":"不过从照片来看姜秘书是真的把常务拿下了呢"},
    {"id":"ht-everland-promo-11","parent":"ht-everland-promo-10","author":"npc-contact-op","text":"又帅又有人格魅力，连常务都能搞定，呀，姜秘书真是完美男人来的"},
    {"id":"ht-everland-promo-12","parent":"ht-everland-promo","author":"npc-everland-thread-op","text":"所以只有我关心为什么常务会在晚上和姜秘书一起去爱宝乐园吗？"},
    {"id":"ht-everland-promo-13","parent":"ht-everland-promo-12","author":"npc-evan","text":"你发现了华点。"},
    {"id":"ht-everland-promo-14","parent":"ht-everland-promo-12","author":"npc-contact-oldtimer","text":"对啊，难道姜秘书是晚上突然被常务一时兴起喊来加班吗，可怜的姜秘书"},
    {"id":"ht-everland-promo-15","parent":"ht-everland-promo-14","author":"npc-everland-clock","text":"姜秘书加班费多少啊"},
    {"id":"ht-everland-promo-16","parent":"ht-everland-promo-15","author":"npc-oo","text":"这又是什么关注点？"},
    {"id":"ht-everland-promo-17","parent":"ht-everland-promo","author":"npc-contact-op","text":"所以上个帖子没人说姜秘书的联系方式，谁能发一下，我真的很想要🥰"},
    {"id":"ht-everland-promo-18","parent":"ht-everland-promo","author":"npc-everland-staff","text":"叠甲，我是乐园当晚的某个工作人员，常务当时急匆匆地跑过来，然后拿着一个很帅的男人的照片让我们立刻找到他"},
    {"id":"ht-everland-promo-19","parent":"ht-everland-promo-18","author":"npc-everland-guest","text":"照片上的人应该就是你们说的姜秘书？"},
    {"id":"ht-everland-promo-20","parent":"ht-everland-promo-19","author":"npc-yu","text":"？莫？是常务晚上跑去找姜秘书吗？！"},
    {"id":"ht-everland-promo-21","parent":"ht-everland-promo","author":"npc-jpdxo","text":"呀，大料来了"},
    {"id":"ht-everland-promo-22","parent":"ht-everland-promo","author":"npc-nowork","text":"我就知道上班时间刷手机能刷出来真东西"},
    {"id":"ht-everland-promo-23","parent":"ht-everland-promo-18","author":"npc-yjji","text":"不过常务晚上跑去乐园找姜秘书干嘛"},
    {"id":"ht-everland-promo-24","parent":"ht-everland-promo-23","author":"npc-everland-insider","text":"知情人告诉你，他是着急了去挽回的"},
    {"id":"ht-everland-promo-25","parent":"ht-everland-promo-24","author":"npc-kk","text":"怎么又是你这个知情人"},
    {"id":"ht-everland-promo-26","parent":"ht-everland-promo-24","author":"npc-contact-skeptic","text":"难道他真知情吗"},
    {"id":"ht-everland-promo-27","parent":"ht-everland-promo","author":"npc-evan","text":"不过常务为什么要挽回"},
    {"id":"ht-everland-promo-28","parent":"ht-everland-promo-24","author":"npc-heart","text":"西八，不会姜秘书终于受不了常务的脾气要离职吧"},
    {"id":"ht-everland-promo-29","parent":"ht-everland-promo-28","author":"npc-contact-oldtimer","text":"那常务也没必要自己跑去挽回一个秘书吧，（他都赶走多少个了。）"},
    {"id":"ht-everland-promo-30","parent":"ht-everland-promo-17","author":"npc-contact-op","text":"所以到底有没有人在意我"},
    {"id":"ht-everland-promo-31","parent":"ht-everland-promo-30","author":"npc-contact-share","text":"我给你发过了……但是又被神秘力量删除了，而且竟然又有人私信问我工号。"},
    {"id":"ht-everland-promo-32","parent":"ht-everland-promo-31","author":"npc-contact-caution","text":"上次就被警告了竟然还敢再发吗"},
    {"id":"ht-everland-promo-33","parent":"ht-everland-promo","author":"npc-contact-pantry","text":"呀西八……？这个帖子怎么也开始一闪一闪的了……"},
    {"id":"ht-secretary-contact","author":"npc-contact-op","text":"求姜秘书联系方式\n\n新来的姜秘书长得也太帅了，好俊美……而且特别善良有礼貌🥰有人知道他有对象了吗，没有的话谁能给我他的联系方式……","date":"2026/11/03","time":"03:15","topic":"隐秘的泰钢","credit":"转自@西瓜椰椰"},
    {"id":"ht-secretary-contact-1","parent":"ht-secretary-contact","author":"npc-super","text":"原来你们女人喜欢这一款"},
    {"id":"ht-secretary-contact-2","parent":"ht-secretary-contact","author":"npc-contact-pantry","text":"上次在茶水间差点滑倒，姜秘书一个滑铲过来扶住了我，好心动💗"},
    {"id":"ht-secretary-contact-3","parent":"ht-secretary-contact-2","author":"npc-jia","text":"姜秘书还主动帮我搬箱子……呀世界上怎么会有长得这么好看又如此善良的男人"},
    {"id":"ht-secretary-contact-4","parent":"ht-secretary-contact","author":"npc-contact-skeptic","text":"这照片看起来也就一般吧，小白脸一个"},
    {"id":"ht-secretary-contact-5","parent":"ht-secretary-contact-4","author":"npc-heart","text":"西八呀，你们男人的嫉妒心真可怕😱"},
    {"id":"ht-secretary-contact-6","parent":"ht-secretary-contact-4","author":"npc-kk","text":"自己长得跟被猪拱过一样还好意思说人家一般吗🙃"},
    {"id":"ht-secretary-contact-7","parent":"ht-secretary-contact","author":"npc-contact-stairs","text":"所以姜秘书有对象吗"},
    {"id":"ht-secretary-contact-8","parent":"ht-secretary-contact-7","author":"npc-contact-elevator","text":"上次在电梯里问了，他说没有哦！😊"},
    {"id":"ht-secretary-contact-9","parent":"ht-secretary-contact","author":"secretary","text":"难道常务nim是因为姜秘书长得比我好看所以变成灰姑娘的继母的吗"},
    {"id":"ht-secretary-contact-10","parent":"ht-secretary-contact-9","author":"npc-yjji","text":"哦？姜秘书的同事出现了！"},
    {"id":"ht-secretary-contact-11","parent":"ht-secretary-contact-9","author":"secretary","text":"常务nim不是据说对姜秘书很坏吗，一直在折腾他"},
    {"id":"ht-secretary-contact-12","parent":"ht-secretary-contact-11","author":"secretary","text":"阿尼哟，常务对姜秘书其实是很好的，给他定制新西装，还不让我给他安排工作。最重要的，常务nim到现在还没叫对过我的名字呢🥲"},
    {"id":"ht-secretary-contact-13","parent":"ht-secretary-contact-12","author":"secretary","text":"是你吗，权秘书，久仰久仰，曾经常务手下唯一幸存的秘书"},
    {"id":"ht-secretary-contact-14","parent":"ht-secretary-contact","author":"npc-contact-op","text":"怎么歪话题了？所以谁有姜秘书联系方式？"},
    {"id":"ht-secretary-contact-15","parent":"ht-secretary-contact-11","author":"npc-contact-lobby","text":"对啊，我上次还在大厅里看见常务突然脸色大变说着什么不对不对然后就开始疾走，姜秘书在后面努力跟着呢"},
    {"id":"ht-secretary-contact-16","parent":"ht-secretary-contact-11","author":"npc-super","text":"这都是表象，我劝你们不要再肖想姜秘书了"},
    {"id":"ht-secretary-contact-17","parent":"ht-secretary-contact-16","author":"npc-evan","text":"知情人来了？"},
    {"id":"ht-secretary-contact-18","parent":"ht-secretary-contact-11","author":"npc-contact-park","text":"但你们没看到爱宝乐园的宣传稿吗，里面有一张照片是常务拉着姜秘书在笑，看起来关系很好哎"},
    {"id":"ht-secretary-contact-19","parent":"ht-secretary-contact-18","author":"npc-yu","text":"莫？还有这个？有没有链接或传送门"},
    {"id":"ht-secretary-contact-20","parent":"ht-secretary-contact-18","author":"npc-contact-skeptic","text":"确定是常务吗，常务拉着秘书笑听起来简直像明天就要世界毁灭一样荒谬"},
    {"id":"ht-secretary-contact-21","parent":"ht-secretary-contact-18","author":"npc-contact-oldtimer","text":"谁还记得常务至今还保持着着一天内赶走最多秘书的记录……"},
    {"id":"ht-secretary-contact-22","parent":"ht-secretary-contact-18","author":"npc-oo","text":"姜秘书竟恐怖如斯吗，把常务都搞定了"},
    {"id":"ht-secretary-contact-23","parent":"ht-secretary-contact-22","author":"npc-contact-op","text":"更有魅力了，简直是完美男人，所以问到现在怎么还没有人给出姜秘书的联系方式"},
    {"id":"ht-secretary-contact-24","parent":"ht-secretary-contact-23","author":"npc-contact-share","text":"我在楼上发过，但是很快被不知名力量删除了。？一分钟后还有人私信我问我工号……"},
    {"id":"ht-secretary-contact-25","parent":"ht-secretary-contact-24","author":"npc-yu","text":"莫？"},
    {"id":"ht-secretary-contact-26","parent":"ht-secretary-contact-24","author":"npc-evan","text":"啊？"},
    {"id":"ht-secretary-contact-27","parent":"ht-secretary-contact","author":"npc-super","text":"都提醒了不要再肖想姜秘书了……"},
    {"id":"ht-secretary-contact-28","parent":"ht-secretary-contact","author":"npc-contact-caution","text":"再说下去这帖子都要炸了"},
    {"id":"sihyeon-game-night","author":"sihyeon","date":"2026/11/18","time":"23:00","text":"好无聊啊没人陪我打游戏...谁有空上号？","credit":"转自@Redlink"},
    {"id":"sihyeon-game-sia","author":"sia","parent":"sihyeon-game-night","text":"我可以！不过我要带着我男朋友一起玩～"},
    {"id":"sihyeon-game-hyejeong","author":"hyejeong","parent":"sihyeon-game-night","text":"什么游戏？"},
    {"id":"sihyeon-game-secretary","author":"secretary","parent":"sihyeon-game-night","text":"额，还缺人吗？"},
    {"id":"sihyeon-game-yoon","author":"yoon","parent":"sihyeon-game-night","text":"没空，我和我家在熙看电影呢。（一只手打的字哦）"},
    {"id":"yoon-late-breakup","author":"yoon","date":"2026/11/19","time":"04:35","text":"额分手了。\n谁有敌敌畏？","credit":"转自@Redlink"},
    {"id":"yoon-breakup-sihyeon","author":"sihyeon","parent":"yoon-late-breakup","text":"？你别冲动啊..."},
    {"id":"yoon-breakup-sia","author":"sia","parent":"yoon-late-breakup","text":"欧巴！怎么回事！！😱 快回我不然我去问在熙了！"},
    {"id":"yoon-breakup-hyejeong","author":"hyejeong","parent":"yoon-late-breakup","text":"总会和好的，别伤心。"},
    {"id":"yoon-breakup-seokjin","author":"seokjin","parent":"yoon-late-breakup","text":"有得有失..."},
    {"id":"yoon-breakup-yoon","author":"yoon","parent":"yoon-breakup-seokjin","text":"？？？"},
    {"id":"sihyeon-suit-photo","author":"sihyeon","date":"2026/11/03","time":"20:46","text":"他们都说我好帅","images":["post-attachments/sihyeon-suit-photo.webp"],"credit":"转自@Redlink"},
    {"id":"sihyeon-suit-yoon","author":"yoon","parent":"sihyeon-suit-photo","text":"10分钟内来我家，有大事商议。"},
    {"id":"sihyeon-suit-sihyeon-yoon","author":"sihyeon","parent":"sihyeon-suit-yoon","text":"我又要聆听谁的少男心事。"},
    {"id":"sihyeon-suit-hyejeong","author":"hyejeong","parent":"sihyeon-suit-photo","text":"好看。"},
    {"id":"sihyeon-suit-sihyeon-hyejeong","author":"sihyeon","parent":"sihyeon-suit-hyejeong","text":"一起吃晚饭吗？"},
    {"id":"jaehee-candid-yoon","author":"jaehee","date":"2026/11/13","time":"21:15","text":"偷拍的常务","images":["post-attachments/jaehee-candid-yoon.webp"],"credit":"转自@Redlink"},
    {"id":"jaehee-candid-yoon-reply","author":"yoon","parent":"jaehee-candid-yoon","text":"好帅啊，照片发我"},
    {"id":"jaehee-candid-sia","author":"sia","parent":"jaehee-candid-yoon-reply","text":"Wow！你们正式同居了？好刺激😍"},
    {"id":"jaehee-candid-yoon-sia","author":"yoon","parent":"jaehee-candid-sia","text":"还没"},
    {"id":"r8-undercover-1","author":"jaehee","text":"出发卧底！所有人保持冷静。\n#小狗卧底日记","date":"2026/10/26","time":"20:18","locked":true,"images":["r8-undercover-1"],"credit":"转自@Redlink"},
    {"id":"r8-undercover-2","author":"jaehee","text":"冷静不了新老板完全是个彻头彻尾的神经病！！\nPsycho！！他家的猫总是凶我😭\n#小狗卧底日记","date":"2026/10/29","time":"20:23","locked":true,"credit":"转自@Redlink"},
    {"id":"r8-undercover-3","author":"jaehee","text":"今天上班又闯祸了。不小心把常务推进猫砂盆里...但是他后面勒我脖子也算是扯平了吧🙏\n\n我的工作我的事业我的人生...\n#小狗卧底日记","date":"2026/11/02","time":"20:28","locked":true,"credit":"转自@Redlink"},
    {"id":"r8-undercover-4","author":"jaehee","text":"今天加班到凌晨，陪吃陪玩陪冥想。世界上还有比我更敬业的警察吗？\n\n他还帮我系领带了，啊...总觉得不像坏人？\n#小狗卧底日记","date":"2026/11/03","time":"20:31","locked":true,"credit":"转自@Redlink"},
    {"id":"r8-undercover-5","author":"jaehee","text":"团结！一切为了任务！\n#小狗卧底日记","date":"2026/11/05","time":"20:37","locked":true,"images":["r8-undercover-5"],"credit":"转自@Redlink"},
    {"id":"r8-undercover-6","author":"jaehee","text":"他今天亲我了。\n\n不是，万一发现我是女生怎么办？发现我是警察怎么办？发现我是卧底怎么办？我还没破案呢😱\n\n话说回来，他嘴唇好软啊。\n#小狗卧底日记","date":"2026/11/09","time":"20:38","locked":true,"credit":"转自@Redlink"},
    {"id":"r8-undercover-7","author":"jaehee","text":"老板最近性情大变...对我格外关心，又格外重视。语气也很温柔。\n\n只有一个结论！我要被解雇了吧？？😭\n#小狗卧底日记","date":"2026/11/13","time":"20:43","locked":true,"images":["r8-undercover-7"],"credit":"转自@Redlink"},
    {"id":"r7-hawaii","author":"yoon","text":"第一次约会，坐直升飞机去夏威夷怎么样？","date":"2026/11/16","time":"22:00","credit":"转自@Redlink"},
    {"id":"r7-hawaii-show","author":"sihyeon","parent":"r7-hawaii","text":"这期神了。"},
    {"id":"r7-hawaii-which","author":"sia","parent":"r7-hawaii-show","text":"哪期不神？"},
    {"id":"r7-hawaii-assistant","author":"secretary","parent":"r7-hawaii","text":"需要秘书吗？需要助理吗？需要保镖吗？其实我也练过跆拳道。"},
    {"id":"r7-hawaii-away","author":"yoon","parent":"r7-hawaii-assistant","text":"离我远点"},
    {"id":"r7-flowers","author":"yoon","text":"赏花。","date":"2026/11/05","time":"20:27","credit":"转自@Redlink","images":["r7-flowers"]},
    {"id":"r7-flowers-photo","author":"secretary","parent":"r7-flowers","text":"告诉你们，是姜秘书拍的哦！"},
    {"id":"r7-flowers-secret","author":"sia","parent":"r7-flowers-photo","text":"说出一个人尽皆知的秘密"},
    {"id":"r7-flowers-planb","author":"sihyeon","parent":"r7-flowers","text":"我是planB是选项E是被人踩在脚底的路人乙"},
    {"id":"r7-flowers-noise","author":"yoon","parent":"r7-flowers-planb","text":"吵死了，你又被李秘书甩了？"},
    {"id":"r7-cat","author":"jaehee","text":"和猫猫玩～","date":"2026/11/09","time":"15:32","credit":"转自@Redlink","images":["r7-cat"]},
    {"id":"r7-cat-hand","author":"seokjin","parent":"r7-cat","text":"在熙啊，旁边是谁的手"},
    {"id":"r7-cat-mine","author":"yoon","parent":"r7-cat-hand","text":"我的。怎么了？"},
    {"id":"r7-cat-sparks","author":"sihyeon","parent":"r7-cat","text":"哦呦一股火药味"},
    {"id":"r7-cat-sweet","author":"sia","parent":"r7-cat","text":"So sweet! 🥰"},
    {"id":"r7-phone","author":"jaehee","text":"求助：我老板说晚上睡不着，必须要我整晚跟他挂着电话怎么办？可是我也好困😵‍💫","date":"2026/11/01","time":"00:48","credit":"转自@Redlink"},
    {"id":"r7-phone-sia","author":"sia","parent":"r7-phone","text":"你住过去他就睡得着了。"},
    {"id":"r7-phone-sihyeon","author":"sihyeon","parent":"r7-phone","text":"你住过去他就睡得着了。"},
    {"id":"r7-phone-secretary","author":"secretary","parent":"r7-phone","text":"你住过去他就睡得着了。"},
    {"id":"r7-phone-yoon","author":"yoon","parent":"r7-phone","text":"你们三个完蛋了。"},
    {"id":"r7-bestie","author":"sia","text":"和bestie约会中💕","date":"2026/11/03","time":"15:41","credit":"转自@Redlink","images":["r7-bestie"]},
    {"id":"r7-bestie-friend","author":"yoon","parent":"r7-bestie","text":"不要再强迫我们在熙当你朋友了。"},
    {"id":"r7-bestie-likes","author":"sia","parent":"r7-bestie-friend","text":"她说很喜欢我呢☺️"},
    {"id":"r7-bestie-she","author":"yoon","parent":"r7-bestie-likes","text":"她？？"},
    {"id":"r6-outfits","author":"yoon","text":"买了150件衣服准备约会的时候穿，一天换一套。","date":"2026/11/17","time":"08:00","credit":"转自@Redlink"},
    {"id":"r6-keepgoing","author":"seokjin","text":"人生有得有失，有错过有遗憾，还是要加油。","date":"2026/11/16","time":"03:28","credit":"转自@Redlink"},
    {"id":"r6-perfect","author":"yoon","text":"哇，简直是全世界最般配的情侣。","date":"2026/11/17","time":"22:14","images":["r6-3"],"credit":"转自@Redlink"},
    {"id":"r6-date","author":"jaehee","text":"date中～","date":"2026/11/17","time":"22:19","images":["r6-4"],"credit":"转自@Redlink"},
    {"id":"r6-outfits-sihyeon","author":"sihyeon","parent":"r6-outfits","text":"不如去精神科看看吧。"},
    {"id":"r6-outfits-yoon","author":"yoon","parent":"r6-outfits-sihyeon","text":"你，来帮我选衣服。😊"},
    {"id":"r6-outfits-sia","author":"sia","parent":"r6-outfits","text":"欧巴我们来个double date怎么样😉"},
    {"id":"r6-keepgoing-yoon","author":"yoon","parent":"r6-keepgoing","text":"加油！"},
    {"id":"r6-keepgoing-seokjin","author":"seokjin","parent":"r6-keepgoing-yoon","text":"…拉黑了。"},
    {"id":"r6-keepgoing-park","author":"park","parent":"r6-keepgoing","text":"硕珍呐我陪你喝酒。"},
    {"id":"r6-perfect-sihyeon","author":"sihyeon","parent":"r6-perfect","text":"你到底咋了？"},
    {"id":"r6-perfect-yoon","author":"yoon","parent":"r6-perfect-sihyeon","text":"李甩会的元老人物就别给我留言了。"},
    {"id":"r6-perfect-secretary","author":"secretary","parent":"r6-perfect","text":"常务nim，其实我早就看出来你们特别般配了哈哈！"},
    {"id":"r6-perfect-flattery","author":"yoon","parent":"r6-perfect-secretary","text":"🙄谄媚。"},
    {"id":"r6-date-yoon","author":"yoon","parent":"r6-date","text":"我女朋友实在太可爱了怎么办😭"},
    {"id":"r6-date-hyejeong","author":"hyejeong","parent":"r6-date","text":"很般配呢。"},
    {"id":"r6-date-park","author":"park","parent":"r6-date","text":"你就是为了这小子，要死要活的？长得倒是还可以。"},
    {"id":"hyejeong-mask","author":"hyejeong","text":"面具之下的我，你还愿意了解吗？","date":"2026/11/03","time":"23:14","images":["hyejeong-mask"],"credit":"转自@麦当当🥕"},
    {"id":"mask-sihyeon","author":"sihyeon","parent":"hyejeong-mask","text":"今天在公司为什么又装作不认识我？"},
    {"id":"mask-hyejeong","author":"hyejeong","parent":"mask-sihyeon","text":"我们好像并不熟。"},
    {"id":"mask-now","author":"sihyeon","parent":"mask-hyejeong","text":"哦？那现在呢？"},
    {"id":"mask-door","author":"sihyeon","parent":"mask-hyejeong","text":"开门，我在门外。"},
    {"id":"mask-jaehee","author":"jaehee","parent":"hyejeong-mask","text":"您是有心事吗？如果不介意的话可以找我聊聊。"},
    {"id":"mask-yoon","author":"yoon","parent":"mask-jaehee","text":"你还没睡？"},
    {"id":"mask-work","author":"jaehee","parent":"mask-yoon","text":"貌似是因为常务您今天给我布置了一堆工作呢🤗"},
    {"id":"mask-outside","author":"sihyeon","parent":"mask-yoon","text":"你俩要聊出去聊。"},
    {"id":"mask-thanks","author":"hyejeong","parent":"mask-jaehee","text":"谢谢姜秘书。"},
    {"id":"jaehee-snow","author":"jaehee","text":"这里景色很好～","date":"2026/11/06","time":"20:16","images":["j5-1"],"credit":"转自@无限的樱桃炸"},
    {"id":"jaehee-tulips","author":"jaehee","text":"欢迎大家来泰刚郁金香公园玩～","date":"2026/11/07","time":"13:26","images":["j5-2-1","j5-2-2","j5-2-3"],"credit":"转自@无限的樱桃炸"},
    {"id":"jaehee-sleeping-cat","author":"jaehee","text":"睡着了的🐱依旧可爱..","date":"2026/11/14","time":"21:38","images":["j5-3"]},
    {"id":"snow-love","author":"npc-love-master","parent":"jaehee-snow","text":"我女儿果然随我👍"},
    {"id":"snow-seokjin","author":"seokjin","parent":"jaehee-snow","text":"☺️"},
    {"id":"snow-sihyeon","author":"sihyeon","parent":"jaehee-snow","text":"哦哟～"},
    {"id":"snow-jaehee","author":"jaehee","parent":"jaehee-snow","text":"感谢前辈给我拍照！"},
    {"id":"snow-yoon","author":"yoon","parent":"jaehee-snow","text":"？"},
    {"id":"tulips-yoon","author":"yoon","parent":"jaehee-tulips","text":"果然，还是我拍的好"},
    {"id":"tulips-secretary","author":"secretary","parent":"jaehee-tulips","text":"好羡慕姜秘书啊，尹常务竟然还带你去公园拍照😭"},
    {"id":"tulips-sihyeon","author":"sihyeon","parent":"jaehee-tulips","text":"哦莫，竟然是尹伊俊那小子给你拍的？"},
    {"id":"tulips-jaehee","author":"jaehee","parent":"jaehee-tulips","text":"感谢常务nim给我拍照🫡，拍照技术赞！！！"},
    {"id":"cat-yoon","author":"yoon","parent":"jaehee-sleeping-cat","text":"🫣🫣🫣"},
    {"id":"ht-return","author":"npc-jpdxo","text":"我今天路过保洁室听到32楼郑秘书回来了？","date":"2026/11/09","time":"13:16","topic":"隐秘的泰钢","credit":"转自@krimia_o"},
    {"id":"ht-return-ssssj","author":"npc-ssssj","parent":"ht-return","text":"真的？保洁部怎么什么都知道？啊早知道去应聘那里了"},
    {"id":"ht-return-evan","author":"npc-evan","parent":"ht-return","text":"郑秘书不是有孩子了吗？肯定会回来吧，毕竟没有比泰刚工资更高的了1500万韩元呢！"},
    {"id":"ht-return-salary","author":"npc-jpdxo","parent":"ht-return-evan","text":"郑秘书工资这么高？！好像叫错名字也没什么"},
    {"id":"ht-return-heart","author":"npc-heart","parent":"ht-return","text":"好想和保洁部的人畅聊啊…还招人吗？"},
    {"id":"ht-return-ball","author":"npc-jpdxo","parent":"ht-return-heart","text":"你来晚了，据说最后一个岗位被一个长得有点吓人的“球”给占了"},
    {"id":"ht-return-jeong","author":"jeong","parent":"ht-return-ball","text":"有点吓人的“球”？我感觉他长得很帅啊"},
    {"id":"ht-return-eyes","author":"npc-jpdxo","parent":"ht-return-jeong","text":"？尽早去看眼科吧"},
    {"id":"ht-child","author":"npc-jpdxo","text":"呀我从保洁室听到姜秘书有孩子了！？","date":"2026/11/10","time":"21:30","topic":"隐秘的泰钢","credit":"转自@krimia_o"},
    {"id":"ht-child-first","author":"npc-firstlove","parent":"ht-child","text":"ㅅㅂ怎么你每次都能从保洁部听到东西"},
    {"id":"ht-child-angela","author":"npc-angela","parent":"ht-child","text":"姜秘书和常务的吗？他俩也能…？"},
    {"id":"ht-child-step","author":"npc-jpdxo","parent":"ht-child-angela","text":"当然不是啊，没想到可怜的常务要做继母/父了"},
    {"id":"ht-child-kk","author":"npc-kk","parent":"ht-child","text":"保洁部的人是间谍吗？怎么什么都知道？"},
    {"id":"ht-child-jeong","author":"jeong","parent":"ht-child-kk","text":"不是，都是很好的人"},
    {"id":"ht-child-ball","author":"npc-kk","parent":"ht-child-jeong","text":"？怎么又是你？那个说球帅的人"},
    {"id":"ht-blinddate","author":"npc-jpdxo","text":"郑秘书给姜秘书介绍相亲对象了🤭","date":"2026/11/12","time":"22:43","topic":"隐秘的泰钢","credit":"转自@krimia_o"},
    {"id":"ht-blinddate-secretary","author":"secretary","parent":"ht-blinddate","text":"你是谁？"},
    {"id":"ht-blinddate-jia","author":"npc-jia","parent":"ht-blinddate","text":"保洁部？"},
    {"id":"ht-blinddate-heard","author":"npc-jpdxo","parent":"ht-blinddate-jia","text":"这次是我自己听到的✌️"},
    {"id":"ht-blinddate-yu","author":"npc-yu","parent":"ht-blinddate","text":"jpdxo您到底是什么人","images":["ht-profile-capture"]},
    {"id":"ht-blinddate-gossip","author":"npc-jpdxo","parent":"ht-blinddate-yu","text":"班上事这么多吃瓜当然要吃回本呀！"},
    {"id":"ht-blinddate-heart","author":"npc-heart","parent":"ht-blinddate","text":"哈，那常务今天心情这么差不会是因为这个吧？"},
    {"id":"ht-blinddate-away","author":"npc-jpdxo","parent":"ht-blinddate-heart","text":"我下午没去公司怎么了？"},
    {"id":"ht-blinddate-blame","author":"npc-heart","parent":"ht-blinddate-away","text":"你个不要脸的…你听完响跑了留我们遭罪"},
    {"id":"ht-kiss","author":"npc-super","text":"想问一下大家，表白被拒绝的时候那人会亲你们一口吗？","date":"2026/11/09","time":"03:47","topic":"隐秘的泰钢","credit":"转自@krimia_o"},
    {"id":"ht-kiss-sam","author":"npc-sam","parent":"ht-kiss","text":"纳尼"},
    {"id":"ht-kiss-india","author":"npc-sam","parent":"ht-kiss-sam","text":"现在在印度还是？点头no，摇头yes？"},
    {"id":"ht-kiss-evan","author":"npc-evan","parent":"ht-kiss","text":"他的手亲你的脸吗？"},
    {"id":"ht-kiss-mouth","author":"npc-super","parent":"ht-kiss-evan","text":"不是，他的嘴亲我的嘴"},
    {"id":"ht-kiss-fist","author":"npc-evan","parent":"ht-kiss-mouth","text":"我的拳头现在倒是想饮你们俩的血了"},
    {"id":"ht-kiss-kk","author":"npc-kk","parent":"ht-kiss","text":"你在泰刚吗？男的女的啊泰刚还有此般人才？"},
    {"id":"ht-kiss-proof","author":"npc-super","parent":"ht-kiss-kk","text":"他说为了证明他对我没感觉"},
    {"id":"ht-kiss-zero","author":"npc-kk","parent":"ht-kiss-proof","text":"攻击力为0，反而呢会让被亲的人更心动"},
    {"id":"ht-kiss-experience","author":"npc-super","parent":"ht-kiss-zero","text":"对！你也经历过吗？！"},
    {"id":"ht-kiss-yourself","author":"npc-kk","parent":"ht-kiss-experience","text":"你自己经历去吧"},
    {"id":"ht-kiss-angela","author":"npc-angela","parent":"ht-kiss","text":"但是我感觉很爽啊…"},
    {"id":"ht-kiss-soon","author":"npc-rice","parent":"ht-kiss-angela","text":"你也快了"},
    {"id":"ht-bignews","author":"npc-yjji","text":"呀呀姐妹们惊天大料！！！我朋友发kkt告诉我…","date":"2026/11/09","time":"13:26","topic":"隐秘的泰钢","credit":"转自@krimia_o","images":["ht-bignews-photo"]},
    {"id":"ht-bignews-rice","author":"npc-rice","parent":"ht-bignews","text":"？？？常务和…姜秘书？！可是常务不是喜欢女人吗？"},
    {"id":"ht-bignews-nowork","author":"npc-nowork","parent":"ht-bignews-rice","text":"我也记得有前女友啊！"},
    {"id":"ht-bignews-secretary","author":"secretary","parent":"ht-bignews-nowork","text":"常务还有未婚妻…"},
    {"id":"ht-bignews-sleep","author":"npc-yjji","parent":"ht-bignews-secretary","text":"我真感觉我该睡了"},
    {"id":"ht-bignews-yu","author":"npc-yu","parent":"ht-bignews","text":"ㅅㅂ我刚从那条街回来啊！就差一步"},
    {"id":"ht-bignews-momo","author":"npc-momo","parent":"ht-bignews","text":"不…姜秘书居然喜欢男人？！"},
    {"id":"ht-bignews-evan","author":"npc-evan","parent":"ht-bignews","text":"其实还挺配的…好养眼"},
    {"id":"ht-bignews-oo","author":"npc-oo","parent":"ht-bignews-evan","text":"附议"},
    {"id":"ht-bignews-first","author":"npc-firstlove","parent":"ht-bignews","text":"阿西，泰刚boys看来只剩金施贤了吗？"},
    {"id":"jaehee-introduction","author":"jaehee","text":"尹伊俊常务现任随行秘书，姜在熙","date":"2026/10/28","time":"12:46","images":["jaehee-introduction"],"credit":"转自@krimia_o"},
    {"id":"secretary-goodbye","author":"secretary","text":"是这样的，我感觉我马上就要说再见了","date":"2026/11/10","time":"23:56","credit":"转自@krimia_o"},
    {"id":"intro-sam","author":"npc-sam","parent":"jaehee-introduction","text":"ㅅㅂ这是谁想的公开词？“现任…”我还以为是对象呢"},
    {"id":"intro-jpdxo","author":"npc-jpdxo","parent":"intro-sam","text":"我真的笑死了，看来宣传部有人要被约谈了"},
    {"id":"intro-evan","author":"npc-evan","parent":"jaehee-introduction","text":"真的好帅哇真人更帅，不知道有没有对象"},
    {"id":"intro-kk","author":"npc-kk","parent":"jaehee-introduction","text":"好了好了，现在公司既有女神也有男神了"},
    {"id":"intro-rice","author":"npc-rice","parent":"jaehee-introduction","text":"呀，不要叫三巨头了好吗？听说中国之前有个很火三人男团叫tfboys我们这是泰刚boys"},
    {"id":"intro-firstlove","author":"npc-firstlove","parent":"intro-rice","text":"tfboys？这个还好，但泰刚boys听起来像和昨天刚退休的李部长一个年纪"},
    {"id":"bye-yjji","author":"npc-yjji","parent":"secretary-goodbye","text":"？郑秘书你才回来几天又辞职？"},
    {"id":"bye-secretary","author":"secretary","parent":"bye-yjji","text":"欸，换一种说法，辞退"},
    {"id":"bye-yjji-question","author":"npc-yjji","parent":"bye-secretary","text":"？"},
    {"id":"bye-chung","author":"npc-chung","parent":"secretary-goodbye","text":"这么有种，浪子二次调头啊又不干了？"},
    {"id":"bye-jeong","author":"jeong","parent":"bye-chung","text":"老婆终于看得起普通幼儿园了"},
    {"id":"bye-secretary-home","author":"secretary","parent":"bye-jeong","text":"希望我回家之后平安无事…"},
    {"id":"bye-rice","author":"npc-rice","parent":"secretary-goodbye","text":"郑秘书啊，常务这次难道喊你喊的姜秘书？"},
    {"id":"bye-jeong-worse","author":"jeong","parent":"bye-rice","text":"恐怕更糟糕"},
    {"id":"bye-rice-shock","author":"npc-rice","parent":"bye-jeong-worse","text":"😱"},
    {"id":"secret-taegang","author":"npc-oo","text":"哇，新的随行秘书把泰刚的女神给救了好帅，不过比起来好帅…感觉更多是漂亮？","topic":"隐秘的泰钢","date":"2026/10/29","time":"12:52","credit":"转自@krimia_o"},
    {"id":"st-heart","author":"npc-heart","parent":"secret-taegang","text":"我懂你！花美男的感觉，有点像…女人？就是很清秀的人，和常务 金律师都不是一个感觉"},
    {"id":"st-oo-heart","author":"npc-oo","parent":"st-heart","text":"对就是这样我超喜欢！不知道姜秘书有没有女朋友想去要ig"},
    {"id":"st-heart-ig","author":"npc-heart","parent":"st-oo-heart","text":"你要到了记得发给我呀！"},
    {"id":"st-nini","author":"npc-nini","parent":"secret-taegang","text":"李秘书不会喜欢这种毛头小子的！"},
    {"id":"st-oo-nini","author":"npc-oo","parent":"st-nini","text":"我没有说她喜欢啊，啊你是女神分手会会员吧？活该呢^^"},
    {"id":"st-jia","author":"npc-jia","parent":"secret-taegang","text":"我今天在餐厅看到他了好帅！当时金律师那个傻X在说李秘书的坏话，结果被发现了，我还录了视频"},
    {"id":"st-video","author":"npc-oo","parent":"st-jia","text":"求视频…"},
    {"id":"st-chung","author":"npc-chung","parent":"secret-taegang","text":"姐，你为什么没有回我KKT？常务要你去办公室"},
    {"id":"st-oo-chung","author":"npc-oo","parent":"st-chung","text":"弟弟姐上学的时候就不信这个了"},
    {"id":"st-yoon","author":"yoon","parent":"secret-taegang","text":"李组长？我以为项目部的工作够多了呢"},
    {"id":"st-sam","author":"npc-sam","parent":"secret-taegang","text":"我怎么感觉这个帖子要没了"},
    {id:'tg2-interview',author:'taegang',text:'【爆料】尹常务的随行秘书面试进行中……\n听说秘书团队明天要去釜山。不知道最后会录用哪位呢……',date:'2026/10/14',time:'20:36',images:['tg2-1-1','tg2-1-2']},
    {id:'tg2-applicant',author:'taegang',text:'【爆料】听说这次应聘随行秘书的人里，有一位超级帅哥……\n拜托了，一定要来入职啊，嘿嘿。',date:'2026/10/13',time:'21:18',images:['tg2-2']},
    {id:'tg2-friendly',author:'taegang',text:'今天的尹常务和姜秘书，关系也是一如既往地“好”呢.jpg',date:'2026/10/22',time:'20:47',images:['tg2-3']},
    {id:'tg2-man-year',author:'taegang',text:'【快讯】我们常务的《THE MAN》杂志封面公开了！\n\n“THE MAN OF THE YEAR”\n年度男士，尹伊俊。',date:'2026/10/12',time:'21:06',video:'tg2-4',poster:'tg2-4'},
    {id:'tg2-dinner',author:'taegang',text:'泰钢高管聚餐时，现场拍到的尹伊俊常务；\n看来尹常务连喝酒都很有分寸？\n\n公司内部群从一大早就炸锅的原因找到了……确实帅得有点过分了；；\n身为泰钢人，突然就骄傲起来了……',date:'2026/10/06',time:'20:28',images:['tg2-5']},
    {id:'tg2-closeup',author:'taegang',text:'【爆料】法务团队金时贤律师的稀有近距离特写。\n\n难怪公司里都说他长得帅，真的不是没有道理……这颜值，震惊。',date:'2026/10/22',time:'22:19',images:['tg2-6']},
    {id:'tg2-strategy',author:'taegang',text:'尹伊俊的心腹——金时贤律师，正在等候汇报经营战略。\n穿西装的样子实在太帅了……看着太养眼……忍不住来投稿。',date:'2026/10/10',time:'21:42',images:['tg2-7']},
    {"id":"taegang-boyfriend-look","author":"taegang","date":"2026/10/09","time":"21:00","text":"【爆料】尹常务，西装先放一放吧！针织衫、休闲装这种男友风穿搭，求您多穿几套，拜托了（超认真）。","images":["post-attachments/taegang-boyfriend-look.webp"]},
    {"id":"taegang-penguin-headband","author":"taegang","date":"2026/11/03","time":"21:00","text":"【爆料】在游乐园抓拍到戴着企鹅发箍的姜在熙📸\n\n据说可爱到让人分不清谁是小企鹅、谁是姜秘书了。","images":["post-attachments/taegang-penguin-headband.webp"]},
    {"id":"taegang-old-photo","author":"taegang","date":"2026/11/21","time":"21:00","text":"【爆料】翻到尹伊俊常务和姜在熙秘书的旧照。\n\n以前还这么甜……现在这俩之间怎么冷风嗖嗖的啊ㅠㅠ","images":["post-attachments/taegang-old-photo.webp"]},
    {id:'taegang-healing',author:'taegang',text:'周二下午，累了吧？各位泰钢人，快来看看我们“泰钢王子”尹伊俊常务的盛世美颜，给自己充充电吧。',date:'2026/11/17',time:'20:16',images:['tg-1']},
    {id:'taegang-date-look',author:'taegang',text:'【爆料】听说尹伊俊常务最近简直像换了个人，震惊……\n\n……\n\n这约会穿搭是什么情况……鲜花又是什么情况……居然还自拍？？！',date:'2026/11/17',time:'21:38',images:['tg-2']},
    {id:'taegang-visuals',author:'taegang',text:'【泰钢快讯】等着今晚20:50开工的同时，先来晒晒⭐️最近热议⭐️的泰钢四大门面员工照。\n\n有这四位在，泰钢的未来真是一片光明啊 ^^',date:'2026/11/16',time:'20:12',images:['tg-3-1','tg-3-2']},
    {id:'taegang-exclusive',author:'taegang',text:'【独家】尹伊俊常务，竟与同性随行秘书接吻！？？\n\n……\n\n随行秘书……？是那位帅得惊人的姜在熙秘书，没错吧？\n有没有人知道，他们俩到底是什么关系……？',date:'2026/11/15',time:'22:07',images:['tg-4']},
    {id:'bbq',author:'seokjin',text:'辛苦工作的一天结束了😊 以烤肉收尾。',date:'2026/10/18',time:'18:08',credit:'转自@Redlink'},
    {id:'bbq-jaehee',author:'jaehee',parent:'bbq',text:'我也想吃！'},
    {id:'bbq-yoon-jaehee',author:'yoon',parent:'bbq-jaehee',text:'特战部队的我前两天不是带你吃过了吗'},
    {id:'bbq-yoon-seokjin',author:'yoon',parent:'bbq',text:'还有你，把我拉黑。'},
    {"id":"jelly-yoon","author":"yoon","text":"优雅，端庄。","date":"2026/5/14","time":"20:31","images":["1-1","1-2"]},
    {"id":"jelly-yoon-sihyeon","author":"sihyeon","parent":"jelly-yoon","text":"哎哟，欢迎大家来我这里看洁莉的真正小猫样~"},
    {"id":"jelly-yoon-yoon","author":"yoon","parent":"jelly-yoon-sihyeon","text":"啧。"},
    {"id":"jelly-yoon-sia","author":"sia","parent":"jelly-yoon","text":"像雪一样白呢我们洁莉💕"},
    {"id":"jelly-sihyeon","author":"sihyeon","text":"爱你的人无论你是什么样子都会爱你哦~\n洁莉你无需时刻端庄，任何时刻都闪闪发光✨","date":"2026/5/14","time":"20:33","images":["2-1","2-2","2-3","2-4","2-5"]},
    {"id":"jelly-sihyeon-yoon","author":"yoon","parent":"jelly-sihyeon","text":".."},
    {"id":"jelly-sihyeon-sia","author":"sia","parent":"jelly-sihyeon-yoon","text":"我们欧巴跟猫猫一样cute呢"},
    {"id":"park-team","author":"park","text":"这群兔崽子...没一个让我省心的！","date":"2026/11/02","time":"21:17","images":["t3-1"]},
    {"id":"jaehee-team","author":"jaehee","text":"最强四人组集合！","date":"2026/10/25","time":"20:46","images":["t3-2"]},
    {"id":"hyejeong-date","author":"sia","text":"约会日🤎🤍","date":"2026/11/16","time":"16:38","images":["t3-3","t3-4","t3-5","t3-6"]},
    {"id":"date-jaehee","author":"jaehee","parent":"hyejeong-date","text":"好开心！期待下周继续😽"},
    {"id":"date-yoon-jaehee","author":"yoon","parent":"date-jaehee","text":"够了！现在以及下周你的时间都属于我！"},
    {"id":"date-yoon","author":"yoon","parent":"hyejeong-date","text":"别发会这种令人误会的文字。"},
    {"id":"date-hyejeong","author":"sia","parent":"date-yoon","text":"没有误会哦~"},
    {"id":"jeong-fighting-night","author":"jeong","text":"Fighting!","date":"2026/10/24","time":"22:41","images":["t4-1"]},
    {"id":"jeong-late-toast","author":"jeong","text":"","date":"2026/10/24","time":"23:38","images":["post-attachments/jeong-late-toast.webp"]},
    {"id":"jeong-toast-jaehee","author":"jaehee","parent":"jeong-late-toast","text":"真好喝呐酒"},
    {"id":"jeong-toast-seokjin","author":"seokjin","parent":"jeong-toast-jaehee","text":"注意身体，下次别喝这么多。"},
    {"id":"jeong-toast-jeong","author":"jeong","parent":"jeong-toast-seokjin","text":"孩子们呐"},
    {"id":"yoon-jelly-mood","author":"yoon","text":"今天洁莉心情不太好。","date":"2026/11/06","time":"22:30","images":["post-attachments/yoon-jelly-mood.webp"],"credit":"转自@麦当当🥕"},
    {"id":"jelly-mood-sihyeon","author":"sihyeon","parent":"yoon-jelly-mood","text":"宝贝，是洁莉心情不好还是你心情不好🤗"},
    {"id":"jelly-mood-yoon-sihyeon","author":"yoon","parent":"jelly-mood-sihyeon","text":"😭😭😭"},
    {"id":"jelly-mood-jaehee","author":"jaehee","parent":"yoon-jelly-mood","text":"您又怎么了？需要我现在过来吗？"},
    {"id":"jelly-mood-yoon-jaehee","author":"yoon","parent":"jelly-mood-jaehee","text":"需要🥺"},
    {"id":"jelly-mood-sia","author":"sia","parent":"yoon-jelly-mood","text":"想姜秘书了就直说好吗？🤓"},
    {"id":"jelly-mood-yoon-sia","author":"yoon","parent":"jelly-mood-sia","text":"你不说话没人把你当哑巴。"},
    {"id":"jelly-mood-secretary","author":"secretary","parent":"yoon-jelly-mood","text":"您还没休息吗？"},
    {"id":"jelly-mood-yoon-secretary","author":"yoon","parent":"jelly-mood-secretary","text":"没有，具秘书。"},
    {"id":"jelly-mood-secretary-yoon","author":"secretary","parent":"jelly-mood-yoon-secretary","text":"我好像姓郑来着。"},
    {"id":"fighting-jaehee","author":"jaehee","parent":"jeong-fighting-night","text":"爱你们。","images":["t4-2"]},
    {"id":"fighting-park","author":"park","parent":"fighting-jaehee","text":"别再给我惹祸了啊！"},
    {"id":"fighting-jeong","author":"jeong","parent":"fighting-jaehee","text":"加油呐 小姜^^"},
    {"id":"fighting-seokjin","author":"seokjin","parent":"fighting-jaehee","text":"一切小心，保护好自己。"},
    {"id":"jaehee-taegang","author":"jaehee","text":"泰刚你给我等着","date":"2026/11/04","time":"07:14","images":["t4-4"]},
    {"id":"taegang-jeong","author":"jeong","parent":"jaehee-taegang","text":"姜呐，前辈先去洗厕所呐。"},
    {"id":"jeong-fighting-private","author":"seokjin","text":"","date":"2026/10/07","time":"01:26","images":["t4-5"],"locked":true},
    {"id":"yoon-new-secretary","author":"yoon","text":"啊受不了，我想换个随行秘书了。\n\n有没有推荐？","date":"2026/10/29","time":"15:23","credit":"转自@Redlink"},
    {"id":"secretary-reply","author":"secretary","parent":"yoon-new-secretary","text":"真换你又不乐意。"},
    {"id":"secretary-yoon","author":"yoon","parent":"secretary-reply","text":"滚"},
    {"id":"secretary-sihyeon","author":"sihyeon","parent":"yoon-new-secretary","text":"真换你又不乐意。"},
    {"id":"sia-guess-where","author":"sia","text":"猜猜我在哪^^","date":"2026/11/06","time":"16:17","images":["t4-wedding"],"credit":"转自@Redlink"},
    {"id":"wedding-jaehee","author":"jaehee","parent":"sia-guess-where","text":"真漂亮。"},
    {"id":"wedding-yoon","author":"yoon","parent":"wedding-jaehee","text":"姜在熙你去哪了？回来！"},
    {"id":"wedding-hyejeong","author":"hyejeong","parent":"sia-guess-where","text":"好漂亮。"},
    {"id":"wedding-sihyeon","author":"sihyeon","parent":"wedding-hyejeong","text":"你也漂亮"}
  ];
  const glyphs = {
    reply:'M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l2.5-3A8.5 8.5 0 1 1 21 11.5Z',
    repost:'m2 8 4-4 4 4M6 4v12a3 3 0 0 0 3 3h4m9-3-4 4-4-4m4 4V8a3 3 0 0 0-3-3h-4',
    like:'M12 21S3 15.4 3 9a4.8 4.8 0 0 1 9-2.3A4.8 4.8 0 0 1 21 9c0 6.4-9 12-9 12Z',
    bookmark:'M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-4-7 4Z',
    share:'M12 16V3m-4 4 4-4 4 4M4 14v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6',
    views:'M4 20v-5m5 5V8m6 12V4m5 16v-9'
  };
  const postHistory = [];
  let openPostId = 'bbq';
  let reactions = {counts:{},liked:[],saved:[]};
  let mutation = false;
  let revision = 0;
  let syncing = false;
  function updateReactions(snapshot) {
    const before = reactions.saved.join('|');
    reactions = snapshot;
    if (page === 'bookmarks' && before !== reactions.saved.join('|')) renderBookmarks();
    root.querySelectorAll('[data-x-reaction]').forEach(button => {
      const {xReaction: kind, postId: id} = button.dataset;
      const active = (kind === 'like' ? reactions.liked : reactions.saved).includes(id);
      button.setAttribute('aria-pressed', String(active));
      if (kind === 'like') button.querySelector('span').textContent = reactions.counts[id] || 0;
    });
  }
  async function refreshReactions() {
    if (!account || syncing || mutation) return;
    syncing = true;
    const run = revision;
    try {
      const state = await api('reactions');
      if (run === revision) updateReactions(state);
    } catch {} finally { syncing = false; }
  }
  async function react(post, kind) {
    if (!account || mutation) return;
    mutation = true;
    revision++;
    try {
      const current = kind === 'like' ? reactions.liked : reactions.saved;
      updateReactions(await api('reactions','PUT',{post,kind,value:!current.includes(post)}));
    } catch { showToast('操作未保存，请重试'); }
    finally { mutation = false; }
  }
  function node(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  }
  function postTime(post) {
    const [year, month, day] = post.date.split('/').map(Number);
    const [hour, minute] = post.time.split(':').map(Number);
    return Date.UTC(year,month-1,day,hour,minute);
  }
  function postGallery(post) {
    const gallery = node('div','','x-post-gallery');
    gallery.dataset.count = String(post.images.length);
    post.images.forEach((asset, index) => {
      const postImage = asset.startsWith('/') ? asset.slice(1) : 'x/posts/' + asset + '.jpg';
      const src = ({"x/posts/1-1.jpg":"x/posts/1-1.webp","x/posts/1-2.jpg":"x/posts/1-2.webp","x/posts/2-1.jpg":"x/posts/2-1.webp","x/posts/2-2.jpg":"x/posts/2-2.webp","x/posts/2-3.jpg":"x/posts/2-3.webp","x/posts/2-4.jpg":"x/posts/2-4.webp","x/posts/2-5.jpg":"x/posts/2-5.webp","x/posts/ht-bignews-photo.jpg":"x/posts/ht-bignews-photo.webp","x/posts/j5-1.jpg":"x/posts/j5-1.webp","x/posts/j5-2-1.jpg":"x/posts/j5-2-1.webp","x/posts/j5-2-2.jpg":"x/posts/j5-2-2.webp","x/posts/j5-2-3.jpg":"x/posts/j5-2-3.webp","x/posts/j5-3.jpg":"x/posts/j5-3.webp","x/posts/jaehee-introduction.jpg":"x/posts/jaehee-introduction.webp","x/posts/r6-3.jpg":"x/posts/r6-3.webp","x/posts/r6-4.jpg":"x/posts/r6-4.webp","x/posts/r7-bestie.jpg":"x/posts/r7-bestie.webp","x/posts/r7-cat.jpg":"x/posts/r7-cat.webp","x/posts/r7-flowers.jpg":"x/posts/r7-flowers.webp","x/posts/r8-undercover-1.jpg":"x/posts/r8-undercover-1.webp","x/posts/r8-undercover-5.jpg":"x/posts/r8-undercover-5.webp","x/posts/r8-undercover-7.jpg":"x/posts/r8-undercover-7.webp","x/posts/t3-1.jpg":"x/posts/t3-1.webp","x/posts/t3-2.jpg":"x/posts/t3-2.webp","x/posts/t3-3.jpg":"x/posts/t3-3.webp","x/posts/t3-4.jpg":"x/posts/t3-4.webp","x/posts/t3-5.jpg":"x/posts/t3-5.webp","x/posts/t3-6.jpg":"x/posts/t3-6.webp","x/posts/t4-1.jpg":"x/posts/t4-1.webp","x/posts/t4-2.jpg":"x/posts/t4-2.webp","x/posts/t4-4.jpg":"x/posts/t4-4.webp","x/posts/t4-5.jpg":"x/posts/t4-5.webp","x/posts/tg-1.jpg":"x/posts/tg-1.webp","x/posts/tg-2.jpg":"x/posts/tg-2.webp","x/posts/tg-3-1.jpg":"x/posts/tg-3-1.webp","x/posts/tg-3-2.jpg":"x/posts/tg-3-2.webp","x/posts/tg-4.jpg":"x/posts/tg-4.webp","x/posts/tg2-1-1.jpg":"x/posts/tg2-1-1.webp","x/posts/tg2-1-2.jpg":"x/posts/tg2-1-2.webp","x/posts/tg2-2.jpg":"x/posts/tg2-2.webp","x/posts/tg2-3.jpg":"x/posts/tg2-3.webp","x/posts/tg2-5.jpg":"x/posts/tg2-5.webp","x/posts/tg2-6.jpg":"x/posts/tg2-6.webp","x/posts/tg2-7.jpg":"x/posts/tg2-7.webp"})[postImage] || postImage;
      const button = node('button');
      button.type = 'button';
      button.setAttribute('aria-label','查看配图 '+(index+1));
      const image = node('img');
      image.src = src;
      image.alt = '配图 '+(index+1);
      image.loading = 'lazy';
      button.append(image);
      button.onclick = () => {
        byId('xPostPhoto').src = src;
        byId('xPostPhoto').alt = image.alt;
        byId('xPostPhotoDialog').showModal();
      };
      gallery.append(button);
    });
    return gallery;
  }
  function postCard(post, detailed = false, connected = false) {
    const author = accounts.find(a => a.id === post.author);
    const parent = Boolean(post.parent);
    const article = node('article','',detailed ? 'x-post x-post-detail' : 'x-post');
    if (parent && !detailed) article.classList.add('x-thread-reply');
    if (connected) article.classList.add('x-thread-connected');
    const header = node('div','','x-post-author');
    const avatarButton = node('button','','x-avatar-button');
    avatarButton.setAttribute('aria-label',author.name+' 的个人资料');
    avatarButton.append(avatarImage(author));
    avatarButton.onclick = () => openProfile(author);
    const byline = node('div','','x-post-byline');
    byline.append(node('strong',author.name),node('span','@'+author.handle,'x-post-muted'));
    if(author.verified)byline.querySelector('strong').append(verifiedBadge(author));
    if (post.locked) {
      const lock = node('span','','x-post-lock');
      lock.setAttribute('aria-label','受保护的贴文');
      lock.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5z"/></svg>';
      byline.querySelector('strong').append(lock);
    }
    const menu = node('button','⋯','x-post-inactive');
    menu.disabled = true;menu.setAttribute('aria-label','更多操作');
    header.append(avatarButton,byline,menu);
    article.append(header);
    if (post.text) {
    const content = node(detailed ? 'p' : 'button',post.text,'x-post-text');
    if (!detailed) content.onclick = () => {
      if (page !== 'post') postHistory.length = 0;
      postHistory.push({page,id:openPostId}); openPostId = post.id; show('post');
    };
    article.append(content);
    }
    if(post.topic){const tag=node('button','#'+post.topic,'x-topic-tag');tag.type='button';tag.onclick=()=>openTopic(trends.find(topic => topic.name === post.topic) || hiddenTaegang);article.append(tag);}
    if (post.images?.length) article.append(postGallery(post));
    if (post.video) {
      const video = node('video','','x-post-video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.src = 'x/posts/' + post.video + '.mp4';
      if (post.poster) video.poster = 'x/posts/' + post.poster + '.jpg';
      video.setAttribute('aria-label','播放泰钢集团推文视频');
      article.append(video);
    }
    if (post.credit) article.append(node('p',post.credit,'x-post-credit'));
    if (post.date) article.append(node('p',post.time+' · '+post.date,'x-post-date'));
    const actions = node('div','','x-post-actions');
    for (const [kind,label] of [['reply','回复'],['repost','转发'],['like','点赞'],['views','查看次数'],['bookmark','收藏'],['share','分享']]) {
      const button = node('button');
      button.type = 'button';
      button.setAttribute('aria-label',label);
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+glyphs[kind]+'"/></svg>';
      if (kind === 'like' || kind === 'bookmark') {
        button.dataset.xReaction = kind;
        button.dataset.postId = post.id;
        button.setAttribute('aria-pressed',String((kind === 'like' ? reactions.liked : reactions.saved).includes(post.id)));
        if (kind === 'like') button.append(node('span',String(reactions.counts[post.id] || 0)));
        button.onclick = () => react(post.id,kind);
      } else if (kind === 'reply') {
        const count = posts.filter(p => p.parent === post.id).length;
        if (count) button.append(node('span',String(count)));
        button.disabled = Boolean(post.locked || post.parent);
        button.onclick = () => {
          if (!detailed) {
            if (page !== 'post') postHistory.length = 0;
            postHistory.push({page,id:openPostId});
            openPostId = post.id;
            show('post');
          }
          byId('xCommentText')?.focus();
        };
      } else {
        button.disabled = true;
      }
      actions.append(button);
    }
    article.append(actions);
    return article;
  }
  function renderPosts(container, entries) {
    container.replaceChildren(...(entries.length ? entries.map(post => postCard(post)) : [node('p','暂无贴文','x-empty')]));
  }

  function playerComments(post) {
    const section = node('section','','x-player-comments');
    replyBar.hidden = false;
    replyBar.reset();
    replyField.disabled = replySubmit.disabled = false;
    replyField.oninput();
    replyStatus.textContent = '';
    const list = node('div');
    const more = node('button','加载更多','x-outline');
    more.type = 'button';
    more.hidden = true;
    section.append(list,more);
    let next = null;
    let loading = false;
    let previousBody = '';
    let submission;
    const endpoint = 'comments/' + encodeURIComponent(post.id);
    async function load(before = null) {
      loading = true;
      more.disabled = true;
      try {
        const result = await api(endpoint + (before === null ? '' : '?before=' + before));
        if (before === null) list.replaceChildren();
        for (const entry of result.entries) {
          const card = node('article','','x-post');
          const byline = node('div','','x-post-byline');
          byline.append(node('strong',entry.name),node('span','@'+String(entry.playerId).padStart(2,'0'),'x-post-muted'));
          card.append(byline,node('p',entry.body,'x-post-text x-topic-copy'),
            node('p',new Date(entry.createdAt).toLocaleString('zh-CN'),'x-post-date'));
          list.append(card);
        }
        next = result.next;
        more.textContent = '加载更多';
        more.hidden = next === null;
      } catch {
        next = before;
        more.textContent = '加载失败，重试';
        more.hidden = false;
      } finally {
        loading = false;
        more.disabled = false;
      }
    }
    more.onclick = () => { if (!loading) load(next); };
    const submitReply = async event => {
      event.preventDefault();
      const body = replyField.value.trim();
      if (!body || replySubmit.disabled || loading) return;
      if (body !== previousBody || !submission) submission = crypto.randomUUID();
      previousBody = body;
      replySubmit.disabled = replyField.disabled = true;
      replyStatus.textContent = '正在发布…';
      try {
        await api(endpoint,'POST',{body,submission});
        if (replyBar.onsubmit !== submitReply) return;
        replyField.value = '';
        replyField.oninput();
        submission = undefined;
        replyStatus.textContent = '';
        await load();
      } catch {
        if (replyBar.onsubmit === submitReply) replyStatus.textContent = '发布失败，请重试。';
      } finally {
        if (replyBar.onsubmit === submitReply) replySubmit.disabled = replyField.disabled = false;
      }
    };
    replyBar.onsubmit = submitReply;
    load();
    return section;
  }

  function renderThread() {
    const post = posts.find(p => p.id === openPostId);
    const descendants = parentId => posts.filter(reply => reply.parent === parentId).flatMap(reply => {
      const children = descendants(reply.id);
      return [postCard(reply,false,children.length > 0), ...children];
    });
    byId('xPostThread').replaceChildren(postCard(post,true), ...(post.locked || post.parent ? [] : [playerComments(post)]), ...descendants(post.id));
  }
  function renderBookmarks() {
    const key = byId('xBookmarkSearch').value.trim().toLowerCase().replace(/^@/,'');
    renderPosts(byId('xBookmarkPosts'), posts.filter(post => {
      const author = accounts.find(a => a.id === post.author);
      return reactions.saved.includes(post.id) && (post.text+' '+author.name+' '+author.handle).toLowerCase().includes(key);
    }));
  }
  byId('xBookmarks').onclick = () => show('bookmarks');
  byId('xBookmarkSearch').oninput = renderBookmarks;
  setInterval(() => {
    if (root.classList.contains('active') && !document.hidden) refreshReactions();
  }, 2500);
  byId('openX').onclick = () => {
    showView('xView');
    show(account ? 'home' : 'login');
    byId('xLoginStatus').textContent = '网页版的多人互动将在接入 Supabase 后开放。';
  };
  back.onclick = goBack;
  userButton.onclick = () => show('settings');
  byId('xFollowingProfile').onclick = () => show('following');
  byId('xFollowingSettings').onclick = () => show('following');
  byId('xOwnProfile').onclick = () => openProfile(account);
  byId('xEditProfile').onclick = editAvatar;
  byId('xChooseAvatar').onclick = () => file.click();
  query.oninput = renderSearch;
  nav.onclick = event => {
    const button = event.target.closest('[data-x-nav]');
    if (!button) return;
    if (button.dataset.xNav === 'profile') openProfile(account);
    else show(button.dataset.xNav);
  };
})();
