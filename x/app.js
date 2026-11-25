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
  accounts.push(
    {"id":"npc-hot-water","name":"多喝热水","handle":"drinkwarmwater","npc":true},
    {"id":"npc-echo","name":"Echo","handle":"speakingtoomuch","npc":true},
    {"id":"npc-yala","name":"亚拉是神","handle":"yala_is_god","npc":true}
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
  const backend = window.lidBackend;
  const api = (path, method = 'GET', data) => backend.api(path, method, data);
  const loginForm = byId('xPlayerLogin');
  const loginStatus = byId('xLoginStatus');
  let emailConfirmation = backend.emailConfirmation;

  async function resumePlayer(name) {
    const player = await (name ? api('player', 'POST', { name }) : api('player'));
    account = { id: 'player', ...player };
    playerAvatar = read(playerAvatarKey + ':' + account.handle);
    if (root.classList.contains('active')) show('home');
    refreshReactions();
    loginStatus.textContent = '';
  }

  function handleLoginError(error) {
    const messages = {
      invalid_credentials: '邮箱或密码不正确。',
      email_not_confirmed: '请先打开邮箱中的验证邮件。',
      user_already_exists: '该邮箱已注册，请直接登录。',
      email_address_not_authorized: '验证邮件未能发送到此邮箱，请联系站点管理员。',
      over_email_send_rate_limit: '验证邮件发送过于频繁，请稍后再试。'
    };
    loginStatus.textContent = messages[error.code] ||
      (error.message === '404' ? '请填写昵称后再次登录。' : '注册或登录请求失败，请稍后再试。');
  }

  async function signIn(event) {
    event.preventDefault();
    if (!backend.configured || connecting) return;
    const mode = event.submitter?.value || 'login';
    const name = byId('xPlayerName').value.trim();
    const password = byId('xPlayerPassword').value;
    if (mode === 'signup' && (!name || password.length < 8)) {
      loginStatus.textContent = '注册需要填写昵称，密码至少 8 位。';
      return;
    }
    connecting = true;
    const buttons = Array.from(loginForm.querySelectorAll('button'));
    buttons.forEach(button => { button.disabled = true; });
    loginStatus.textContent = '正在连接…';
    try {
      const ready = await backend.authenticate(mode, byId('xPlayerEmail').value.trim(), password, name);
      byId('xPlayerPassword').value = '';
      if (ready) await resumePlayer(name);
      else loginStatus.textContent = '请查收邮箱验证邮件。验证后可返回网站登录。';
    } catch (error) {
      handleLoginError(error);
    } finally {
      connecting = false;
      buttons.forEach(button => { button.disabled = false; });
    }
  }
  loginForm.onsubmit = signIn;

  let profile = null;
  let profileTab = 'posts';
  let page = '';
  let profileBack = 'home';
  let editing = null;
  let draft = '';
  let uploadRun = 0;
  let playerAvatar = null;
  function avatar(person) {
    if (person.authorId) return person.avatarUrl || (person === account && playerAvatar) || 'x/player.svg';
    if(person.npc)return person.avatar||'x/player.svg';
    return person.id === 'player' ? playerAvatar || 'x/player.svg' : 'x/' + person.id + '.jpg';
  }
  function avatarImage(account) {
    const image = document.createElement('img');
    image.className = 'x-avatar';
    image.alt = '';
    image.addEventListener('error', () => { image.src = 'x/player.svg'; }, {once:true});
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

  function sharedPlayer(author) {
    return author.authorId === account?.authorId ? account : { ...author, id: 'player:' + author.authorId };
  }

  function playerAvatarButton(author) {
    const button = node('button','','x-avatar-button');
    button.type = 'button';
    button.setAttribute('aria-label',author.name + ' 的个人资料');
    button.append(avatarImage(author));
    button.onclick = () => openProfile(author);
    return button;
  }

  function sharedTopicCard(entry, detailed = false) {
    return postCard({
      ...entry,
      id: 'topic:' + entry.id,
      topicId: entry.id,
      topic: trends.find(topic => topic.id === entry.topic)?.name
    },detailed);
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
      topicList.append(...result.entries.map(entry => sharedTopicCard(entry)));
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
  function renderPlayerPosts(list, selected) {
    const entries = node('div');
    const status = node('p','','x-empty');
    status.setAttribute('role','status');
    const more = node('button','加载更多','x-thread-more');
    more.type = 'button';
    more.hidden = true;
    list.replaceChildren(entries,status,more);
    let cursor = null;
    async function load() {
      const current = () => page === 'profile' && profile === selected && list.contains(entries);
      more.hidden = true;
      status.hidden = false;
      status.textContent = '正在加载贴文…';
      try {
        const params = new URLSearchParams();
        if (cursor !== null) params.set('before',cursor);
        const result = await api('player-posts/' + encodeURIComponent(selected.authorId) + '?' + params);
        if (!current()) return;
        entries.append(...result.entries.map(entry => sharedTopicCard(entry)));
        cursor = result.next;
        status.hidden = Boolean(entries.childElementCount);
        status.textContent = status.hidden ? '' : '暂无贴文';
        more.textContent = '加载更多';
        more.hidden = cursor === null;
      } catch {
        if (!current()) return;
        status.textContent = '暂时无法加载贴文。';
        more.textContent = '重试';
        more.hidden = false;
      }
    }
    more.onclick = load;
    load();
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
      button.hidden = Boolean(profile.authorId && button.dataset.profileTab === 'replies');
      button.setAttribute('aria-selected',String(button.dataset.profileTab===profileTab));
      button.onclick=()=>{profileTab=button.dataset.profileTab;renderProfile();};
    });
    const list=byId('xProfilePosts');
    if (profile.authorId) {
      renderPlayerPosts(list,profile);
      return;
    }
    const authored=posts.filter(post=>post.author===profile.id&&(profileTab==='replies'?Boolean(post.parent):!post.parent));
    const rootTime=post=>{let top=post;while(top.parent)top=posts.find(p=>p.id===top.parent);return postTime(top);};
    authored.sort((a,b)=>rootTime(b)-rootTime(a)||posts.indexOf(b)-posts.indexOf(a));
    list.replaceChildren();
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
    draft = account.avatarUrl ? '' : playerAvatar || '';
    file.value = '';
    byId('xAvatarPreview').src = avatar(account);
    editName.value = account.name;
    byId('xEditHandle').textContent = '@' + account.handle;
    save.disabled = true;
    message.textContent = '';
    show('edit');
    updateProfileSave();
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
      const selected = account;
      const imageFile = image ? await fetch(image).then(response => response.blob()) : null;
      const updated = await api('player','PUT',{name,avatar:imageFile});
      if (account !== selected) return;
      Object.assign(selected,updated);
      if (image && updated.avatarUrl) {
        playerAvatar = null;
        try { localStorage.removeItem(playerAvatarKey + ':' + selected.handle); }
        catch { /* The cloud copy is already saved. */ }
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
    {"id":"yoon-redlink-sandwich","author":"yoon","date":"2026/11/23","time":"12:41","text":"鸡肉味的三明治最难吃了，不如牛肉的。","credit":"转自@Redlink"},
    {"id":"yoon-redlink-sandwich-1","parent":"yoon-redlink-sandwich","author":"seokjin","text":"在熙爱吃鸡肉的。"},
    {"id":"yoon-redlink-sandwich-2","parent":"yoon-redlink-sandwich-1","author":"yoon","text":"哦，爱吃也不吃你的。"},
    {"id":"yoon-redlink-sandwich-3","parent":"yoon-redlink-sandwich","author":"sihyeon","text":"不爱吃的话都给我吃吧要不。"},
    {"id":"yoon-redlink-sandwich-4","parent":"yoon-redlink-sandwich","author":"sia","text":"修罗场好好玩哦要是我在现场就好了..."},
    {"id":"sihyeon-redlink-quiet","author":"sihyeon","date":"2026/11/19","time":"21:07","text":"最近某人终于安静了。","credit":"转自@Redlink"},
    {"id":"sihyeon-redlink-quiet-1","parent":"sihyeon-redlink-quiet","author":"yoon","text":"你满意了？"},
    {"id":"sihyeon-redlink-quiet-2","parent":"sihyeon-redlink-quiet-1","author":"sihyeon","text":"我还行。"},
    {"id":"sihyeon-redlink-quiet-3","parent":"sihyeon-redlink-quiet","author":"secretary","text":"是吗...怎么还老是冲我发火"},
    {"id":"sihyeon-redlink-quiet-4","parent":"sihyeon-redlink-quiet","author":"hyejeong","text":"你也可以安静一下。"},
    {"id":"yoon-redlink-accidental-hug","author":"yoon","date":"2026/11/23","time":"15:26","text":"和前女友不小心拥抱了怎么办","credit":"转自@Redlink"},
    {"id":"yoon-redlink-accidental-hug-1","parent":"yoon-redlink-accidental-hug","author":"jaehee","text":"？你那是不小心吗？"},
    {"id":"yoon-redlink-accidental-hug-2","parent":"yoon-redlink-accidental-hug","author":"sihyeon","text":"故意不小心的"},
    {"id":"yoon-redlink-accidental-hug-3","parent":"yoon-redlink-accidental-hug","author":"seokjin","text":"。。。"},
    {"id":"yoon-redlink-accidental-hug-4","parent":"yoon-redlink-accidental-hug","author":"sia","text":"我想看 不小心和前女友结婚了怎么办"},
    {"id":"jeong-redlink-no-appetite","author":"jeong","date":"2026/11/20","time":"19:53","text":"我们在熙，分手后是茶饭不思，吃个炸酱面都能哭。\n\n有没有她吃了不会哭的食物推荐？","credit":"转自@Redlink"},
    {"id":"jeong-redlink-no-appetite-1","parent":"jeong-redlink-no-appetite","author":"park","text":"你只是馋了。"},
    {"id":"jeong-redlink-no-appetite-2","parent":"jeong-redlink-no-appetite-1","author":"jeong","text":"这谁不馋？"},
    {"id":"jeong-redlink-no-appetite-3","parent":"jeong-redlink-no-appetite","author":"yoon","text":"茶饭不思吗😳因为我吗...😳😳"},
    {"id":"jeong-redlink-no-appetite-4","parent":"jeong-redlink-no-appetite","author":"jaehee","text":"前辈你怎么能发出来！"},
    {"id":"jaehee-hailang-flowers","date":"2026/12/01","time":"12:43","text":"男友突然在看“老夫老妻就不需要浪漫吗”这样的帖子\n\n还经常问我爱不爱他（虽然平时也会这样问）\n\n是哪里让他不安了吗\n\n#家猫","author":"jaehee","locked":true,"credit":"转自@放屁崩海浪"},
    {"id":"jaehee-hailang-flowers-1","parent":"jaehee-hailang-flowers","author":"jaehee","locked":true,"text":"破案了，因为附近花店停业，有两个礼拜没给他送花了\n\n今天特意绕路买了一束，他眼神一下子就亮了，一边说不用专门绕路去买啦，一边仔细插起来，换了几个地方，终于满意了\n\n可爱^_^"},
    {"id":"jaehee-hailang-rain","date":"2026/12/17","time":"17:32","text":"在公园跑步的时候下雨了，在亭子里避雨，手机也没电了\n\n半天雨还不停，就淋雨跑回家，然后就在路上看到了男友举着伞跑回来的样子\n\n可能是他跑得太着急了，明明有伞也淋湿了，头发贴在白白的脸上，气喘吁吁\n\n最后两只落汤鸡回家了\n\n#家猫","author":"jaehee","locked":true,"credit":"转自@放屁崩海浪"},
    {"id":"jaehee-hailang-rain-1","parent":"jaehee-hailang-rain","author":"jaehee","locked":true,"text":"一起裹着毯子喝姜汤，好幸福^_^\n\n不过真的能被称之为姜汤吗，他往里面放了一大堆补品，是粥啊粥"},
    {"id":"jaehee-hailang-cold","date":"2026/12/18","time":"19:08","text":"淋雨第二天，没想到我感冒了，他没感冒\n\n“都说了，我的体质本来就很好。”他语调上扬，一边给我喂药掖被子\n\n有男朋友真好哇\n\n#家猫","author":"jaehee","locked":true,"credit":"转自@放屁崩海浪"},
    {"id":"jaehee-hailang-cold-1","parent":"jaehee-hailang-cold","author":"jaehee","locked":true,"text":"哦不，他也感冒了......\n\n说了不要一起睡了，结果半夜抱着被子跑过来抱我 这下好了"},
    {"id":"yoon-hailang-sick-together","author":"yoon","date":"2026/12/18","time":"19:51","text":"两个人在一起的话，一起生病也是幸福的","credit":"转自@放屁崩海浪"},
    {"id":"yoon-hailang-sick-together-1","parent":"yoon-hailang-sick-together","author":"yoon","text":"(* ^ 3 ^ )"},
    {"id":"yoon-hailang-sick-together-2","parent":"yoon-hailang-sick-together","author":"sihyeon","text":"我们宝贝，要帮您叫精神科医生吗"},
    {"id":"jaehee-locked-handcuffs","date":"2026/11/25","time":"22:14","text":"尹伊俊非要我把手铐带回家是什么毛病？给他铐上了又嫌痛。\n\n真是的，皮肤矜贵得很。\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-handcuffs-1","parent":"jaehee-locked-handcuffs","text":"？","images":["x/posts/jaehee-locked-handcuffs-chat.png"],"imageAspectRatio":"884 / 540","author":"jaehee","locked":true},
    {"id":"jaehee-locked-scarf","date":"2026/11/26","time":"20:51","text":"今天回家，他突然很害羞地拉我回房间，说有东西送我。\n\n然后掏出一条织得歪歪扭扭的围巾，“这可是我昨天熬夜织的，这样你出外勤就不冷了。”\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-scarf-1","parent":"jaehee-locked-scarf","text":"难怪昨天他跑去客房睡...凌晨又跑回来黏我。","author":"jaehee","locked":true},
    {"id":"jaehee-locked-matching-outfits","date":"2026/12/05","time":"08:37","text":"每天都有新花样。\n\n今天让我跟他穿情侣装。我说我要穿警服怎么办？\n\n“那你穿里面不就好了，正好是最贴近皮肤的一层。”\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-matching-outfits-1","parent":"jaehee-locked-matching-outfits","text":"他这莫名其妙的脸红是怎么回事？莫名其妙的抿嘴害羞又是怎么回事？😳😳","author":"jaehee","locked":true},
    {"id":"jaehee-locked-library-date","date":"2026/12/12","time":"17:26","text":"跟我去图书馆看书说是date，结果他居然睡着了，位置还是靠窗边。\n\n唉害得我一直抬手给他挡了一下午的太阳，肌肉都酸了...\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-library-date-1","parent":"jaehee-locked-library-date","text":"他故意的吧。","author":"jaehee","locked":true},
    {"id":"jaehee-locked-bicycle","date":"2026/12/16","time":"19:43","text":"他最近特别沉迷锻炼，反常。\n\n拉着我又是运动又是骑自行车。前两天买了一辆蓝牙音响自行车是什么鬼...\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-bicycle-1","parent":"jaehee-locked-bicycle","text":"非要在公园里跟我一边放情歌一边骑，说是浪漫。丢脸死了真是的...","author":"jaehee","locked":true},
    {"id":"jaehee-locked-back-early","date":"2026/11/27","time":"14:09","text":"一出差就这死出。\n\n#家猫","images":["x/posts/jaehee-locked-trip-chat.png"],"imageAspectRatio":"1084 / 799","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-back-early-1","parent":"jaehee-locked-back-early","text":"好吧我决定悄悄搭今晚的车提前回去🤓","author":"jaehee","locked":true},
    {"id":"jaehee-locked-back-early-2","parent":"jaehee-locked-back-early-1","text":"如果我制造惊喜的话他就会钻我怀里黏来粘去，还爱说话，至于在说什么也听不清楚...","author":"jaehee","locked":true},
    {"id":"jaehee-locked-definition-of-love","date":"2026/12/24","time":"23:08","text":"他突然看了一篇情感文章，有空就向我确认。\n\n会不会烦他？如果要离婚怎么办？如果分开后他一个人晕倒我会来救他吗？\n\n“你会一直爱我的吧？”\n\n#家猫","credit":"转自@Redlink","author":"jaehee","locked":true},
    {"id":"jaehee-locked-definition-of-love-1","parent":"jaehee-locked-definition-of-love","text":"爱的定义是什么呢？\n\n我跟他说，尹伊俊，我们每天这样呆在一起，牵手散步看阳光，已经是世界上最伟大的爱了。","author":"jaehee","locked":true},
    {"id":"yoon-locked-guide-puppy","date":"2026/11/24","time":"16:47","text":"小狗，小导盲犬。\n\n跟她逛街的话很安心，有事直接看手机就行。她会一直牵着你，脑袋在前面探来探去的，可爱的要命。\n\n#关于你","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-guide-puppy-1","parent":"yoon-locked-guide-puppy","text":"难道这是姜在熙的计谋！某天没有她我都不想过马路了。","author":"yoon","locked":true},
    {"id":"yoon-locked-guide-puppy-2","parent":"yoon-locked-guide-puppy-1","text":"好爱她。好像比昨天更爱一点。","author":"yoon","locked":true},
    {"id":"yoon-locked-business-trip","date":"2026/11/25","time":"18:06","text":"每次她出差我都感觉人生无比灰暗。\n\n#关于你","images":["x/posts/yoon-locked-business-trip-chat.png"],"imageAspectRatio":"1084 / 565","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-business-trip-1","parent":"yoon-locked-business-trip","text":"说是几天不见给我带礼物了！？会是什么呢？","author":"yoon","locked":true},
    {"id":"yoon-locked-wants-a-dog","date":"2026/11/30","time":"11:53","text":"她最近吵着要养狗，我不同意。她说如果我嫌麻烦的话，可以全部由她照顾。\n\n不是因为这个原因...\n\n#关于你","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-wants-a-dog-1","parent":"yoon-locked-wants-a-dog","text":"最近洁莉跟她关系好了，很是亲近。要是再养一条狗，她都没空喜欢我了怎么办。","author":"yoon","locked":true},
    {"id":"yoon-locked-miss-you","date":"2026/12/05","time":"22:38","text":"最近工作忙，白天没给她发信息。然后她：\n\n#关于你","images":["x/posts/yoon-locked-miss-you-chat.png"],"imageAspectRatio":"1084 / 449","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-miss-you-1","parent":"yoon-locked-miss-you","text":"理论上来说我明天也忍住不发信息的话还能收到一条想你。","author":"yoon","locked":true},
    {"id":"yoon-locked-miss-you-2","parent":"yoon-locked-miss-you-1","text":"但我忍不住了。","author":"yoon","locked":true},
    {"id":"yoon-locked-broken-figure","date":"2026/12/16","time":"01:17","text":"晚上跟她窝在秘密基地一起看电影，然后她不小心把我的亚拉手办打碎了...没事💔我原谅她😭😭😭\n\n#关于你","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-broken-figure-1","parent":"yoon-locked-broken-figure","text":"她怎么那么可爱？一直在道歉，深夜躺在床上，她以为我睡着了还要趴到我耳边小声说对不起...","author":"yoon","locked":true},
    {"id":"yoon-locked-waiting-for-her","date":"2026/12/19","time":"19:42","text":"给她煎好牛排，热了牛奶，洗完水果，等她回家。\n\n时贤说真羡慕我啊，我说那当然，在熙全世界只有一个。结果他说是羡慕我给她做饭...没情调。\n\n#关于你","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-waiting-for-her-1","parent":"yoon-locked-waiting-for-her","text":"全世界都该来羡慕我吧，我可是姜在熙的男人。 🤓","author":"yoon","locked":true},
    {"id":"yoon-locked-christmas-kisses","date":"2026/12/25","time":"22:09","text":"姜在熙，她今天出门居然忘记亲我。这可是圣诞节，我要生气了。\n\n#关于你","author":"yoon","locked":true,"credit":"转自@Redlink"},
    {"id":"yoon-locked-christmas-kisses-1","parent":"yoon-locked-christmas-kisses","text":"回来后她问我为什么闷闷不乐，问了半天没猜中一个。最后她决定不思考了捧起我的脸亲了十几口。","author":"yoon","locked":true},
    {"id":"yoon-locked-christmas-kisses-2","parent":"yoon-locked-christmas-kisses-1","text":"我要晕了...","author":"yoon","locked":true},
    {"id":"tg3-wedding","author":"taegang","text":"【泰钢喜讯】恭喜尹伊俊常务和姜在熙喜结连理❤️🎉\n\n想知道详情？去公司内网看喜事公告吧！","date":"2026/11/25","time":"20:33","images":["x/posts/tg3-wedding.webp"]},
    {"id":"tg3-number-one-fan","author":"taegang","text":"【快讯】泰钢集团尹伊俊常务，正式获封前随行秘书姜在熙的「官方头号粉丝」！\n\n详情应该很快就能在泰钢集团的内部喜事公告栏看到啦 ^^","date":"2026/11/25","time":"08:39","images":["x/posts/tg3-number-one-fan.jpg"]},
    {"id":"tg3-exclusive-closeup","author":"taegang","text":"【独家到手】就是那张在泰钢内部传疯了的照片！这回，泰钢快讯拿到了超近距离特写。","date":"2026/11/23","time":"21:12","images":["x/posts/tg3-exclusive-closeup.jpg"]},
    {"id":"tg3-off-duty","author":"taegang","text":"【实时投稿】前随行秘书姜在熙的日常被拍到了，打扮得随随便便，颜值还是让人移不开眼。\n\n说真的，光看姜秘书这张脸，我就懂尹常务为什么连婚约都退了……嗯。","date":"2026/11/22","time":"20:48","images":["x/posts/tg3-off-duty.jpg"]},
    {"id":"tg3-walking-together","author":"taegang","text":"【独家】这俩一谈起恋爱，光是并肩走路都能笑开花。","date":"2026/11/22","time":"22:16","video":"tg3-walking-together","poster":"tg3-walking-together"},
    {"id":"jeong-back-from-leave","author":"secretary","text":"我不在的几天发生什么了吗。？姜秘书是怎么在一周之内和常务变得那么熟的🥲","date":"2026/11/08","time":"13:07","images":["x/posts/jeong-back-from-leave.jpg"],"credit":"转自@西瓜椰椰"},
    {"id":"jeong-back-from-leave-1","parent":"jeong-back-from-leave","author":"sihyeon","text":"所以你看到什么了，这俩人为什么这个表情看着你"},
    {"id":"jeong-back-from-leave-2","parent":"jeong-back-from-leave-1","author":"secretary","text":"姜秘书竟然敢每一句都顶撞常务，常务让闭嘴以后还说出让常务报销出租车账单……我一直跪在地上震惊的看着他们，然后突然就被这样看了🥲"},
    {"id":"jeong-back-from-leave-3","parent":"jeong-back-from-leave-2","author":"sihyeon","text":"姜秘书这么猛吗，大发"},
    {"id":"jeong-back-from-leave-4","parent":"jeong-back-from-leave","author":"yoon","text":"我并没有和特战部队的很熟。"},
    {"id":"jeong-back-from-leave-5","parent":"jeong-back-from-leave-4","author":"jaehee","text":"是的，我并没有和常务nim很熟"},
    {"id":"jeong-back-from-leave-6","parent":"jeong-back-from-leave-4","author":"sihyeon","text":"别嘴硬了宝贝😝"},
    {"id":"jeong-back-from-leave-7","parent":"jeong-back-from-leave-6","author":"yoon","text":"滚。"},
    {"id":"jeong-back-from-leave-8","parent":"jeong-back-from-leave","author":"sia","text":"欧巴！好久没有看见这么有荷尔蒙的画面了🥰"},
    {"id":"jeong-back-from-leave-9","parent":"jeong-back-from-leave-8","author":"yoon","text":"你在说什么鬼话"},
    {"id":"sihyeon-last-to-know","author":"sihyeon","text":"？所以我是最后一个知道姜秘书是女人的人吗","date":"2026/11/16","time":"21:18","credit":"转自@西瓜椰椰"},
    {"id":"sihyeon-last-to-know-1","parent":"sihyeon-last-to-know","author":"hyejeong","text":"这个不是一眼就能看出来吗"},
    {"id":"sihyeon-last-to-know-2","parent":"sihyeon-last-to-know-1","author":"sihyeon","text":"？哪里？怎么？何时？"},
    {"id":"sihyeon-last-to-know-3","parent":"sihyeon-last-to-know","author":"sia","text":"我知道的比欧巴还要早哦😉"},
    {"id":"sihyeon-last-to-know-4","parent":"sihyeon-last-to-know-3","author":"sihyeon","text":"常务也不是第一个知道的啊……那我平衡多了😁"},
    {"id":"sihyeon-last-to-know-5","parent":"sihyeon-last-to-know-4","author":"yoon","text":"？"},
    {"id":"sihyeon-last-to-know-6","parent":"sihyeon-last-to-know","author":"yoon","text":"你是怎么知道的，我好像没告诉过你"},
    {"id":"sihyeon-last-to-know-7","parent":"sihyeon-last-to-know-6","author":"sihyeon","text":"？姜秘书本人告诉我的OK？在去向你告白的路上！"},
    {"id":"sihyeon-last-to-know-8","parent":"sihyeon-last-to-know-7","author":"yoon","text":"好吧，那我原谅你了😎"},
    {"id":"sihyeon-last-to-know-9","parent":"sihyeon-last-to-know","author":"secretary","text":"等等……姜秘书是女人？？？！！！"},
    {"id":"sihyeon-last-to-know-10","parent":"sihyeon-last-to-know-9","author":"sihyeon","text":"呀，这里竟然还有一个更晚的"},
    {"id":"sihyeon-last-to-know-11","parent":"sihyeon-last-to-know-10","author":"secretary","text":"那常务终于可以摆脱同性传闻了！"},
    {"id":"sihyeon-last-to-know-12","parent":"sihyeon-last-to-know-11","author":"yoon","text":"啧，都说了只要是姜秘书就行，同不同性有什么关系"},
    {"id":"sihyeon-last-to-know-13","parent":"sihyeon-last-to-know-12","author":"sihyeon","text":"我家宝贝终于通人性了，竟然这么懂爱😍"},
    {"id":"sihyeon-last-to-know-14","parent":"sihyeon-last-to-know-13","author":"yoon","text":"滚"},
    {"id":"ht-58-degree-milk","author":"npc-hot-water","text":"新来的姜秘书也太惨了……一直能听到常务办公室发出的怒吼紧接着姜秘书气冲冲走出来的声音\n\n好不容易来个长得这么帅的可别把他气走啊😱","date":"2026/10/31","time":"22:26","topic":"隐秘的泰钢","images":["x/posts/ht-58-degree-milk-1.png","x/posts/ht-58-degree-milk-2.png","x/posts/ht-58-degree-milk-3.png","x/posts/ht-58-degree-milk-4.png"],"imageZoom":false,"credit":"转自@西瓜椰椰"},
    {"id":"ht-58-degree-milk-1","parent":"ht-58-degree-milk","author":"npc-jpdxo","text":"大厅那个我在现场，常务走着走着突然让姜秘书离远一点，姜秘书后退几步以后常务突然喊着什么跑走了"},
    {"id":"ht-58-degree-milk-2","parent":"ht-58-degree-milk-1","author":"npc-evan","text":"我也在现场，不过姜秘书不就是后退了几步吗，为什么常务突然很惊恐的碎步跑走了🤔"},
    {"id":"ht-58-degree-milk-3","parent":"ht-58-degree-milk-2","author":"npc-heart","text":"不过说实在的，常务以前就是阴晴不定的😇可能现在症状更严重了吧"},
    {"id":"ht-58-degree-milk-4","parent":"ht-58-degree-milk","author":"npc-kk","text":"谁知道P3P4又是为了什么"},
    {"id":"ht-58-degree-milk-5","parent":"ht-58-degree-milk-4","author":"npc-jpdxo","text":"常务让姜秘书重新用58度的牛奶泡奶茶😇"},
    {"id":"ht-58-degree-milk-6","parent":"ht-58-degree-milk-5","author":"npc-sam","text":"西八，好熟悉的话"},
    {"id":"ht-58-degree-milk-7","parent":"ht-58-degree-milk-6","author":"npc-nowork","text":"我以前被借调过去帮忙，常务让我泡一杯清爽一点的奶茶，我就加了冰送过去，然后被超级男高音抖着手尖叫着骂出来了😇"},
    {"id":"ht-58-degree-milk-8","parent":"ht-58-degree-milk-7","author":"npc-oo","text":"omg。"},
    {"id":"ht-58-degree-milk-9","parent":"ht-58-degree-milk-7","author":"npc-nowork","text":"然后让我用58度的牛奶重泡😇"},
    {"id":"ht-58-degree-milk-10","parent":"ht-58-degree-milk","author":"npc-yjji","text":"姜秘书今天一直在整栋楼里奔波呢，真心希望他可以撑久一点，好久没看见这么帅气又善良的帅哥了🤵"},
    {"id":"ht-58-degree-milk-11","parent":"ht-58-degree-milk-10","author":"npc-rice","text":"附议🥲"},
    {"id":"ht-just-a-brother","author":"npc-super","text":"提问：你们的弟弟也会有可以摸脸拉手的关系很好的哥哥吗\n\n我只是很好奇。","date":"2026/11/09","time":"02:38","topic":"隐秘的泰钢","images":["x/posts/ht-just-a-brother.png"],"imageZoom":false,"credit":"转自@西瓜椰椰"},
    {"id":"ht-just-a-brother-1","parent":"ht-just-a-brother","author":"npc-evan","text":"这很正常吧，不过楼主是看到自己弟弟和别的哥哥关系更好吃醋了？"},
    {"id":"ht-just-a-brother-2","parent":"ht-just-a-brother","author":"npc-heart","text":"不过看照片两个人关系确实很好呢"},
    {"id":"ht-just-a-brother-3","parent":"ht-just-a-brother","author":"npc-jia","text":"弟弟很帅哦楼主，不过怎么看起来很眼熟？"},
    {"id":"ht-just-a-brother-4","parent":"ht-just-a-brother","author":"npc-rice","text":"弟弟长大了当然要交朋友啊，而且看起来俩人很配呢"},
    {"id":"ht-just-a-brother-5","parent":"ht-just-a-brother","author":"npc-echo","text":"宝贝，都告诉你了，这就是喜欢啊，别再让你的大脑欺骗你了😝"},
    {"id":"ht-just-a-brother-6","parent":"ht-just-a-brother-5","author":"npc-kk","text":"哎？等等，楼主不是亲哥哥吗"},
    {"id":"ht-just-a-brother-7","parent":"ht-just-a-brother-5","author":"npc-love-master","text":"原来是情弟弟啊😋"},
    {"id":"ht-just-a-brother-8","parent":"ht-just-a-brother-1","author":"npc-super","text":"我只是把他当弟弟，想让他更谨慎的交朋友而已。"},
    {"id":"ht-just-a-brother-9","parent":"ht-just-a-brother-2","author":"npc-super","text":"我认为朋友之间不应该随便拉手摸脸，这不是朋友间的分寸感。"},
    {"id":"ht-just-a-brother-10","parent":"ht-just-a-brother-3","author":"npc-super","text":"谢谢，我的秘……我的弟弟确实长得很漂亮。"},
    {"id":"ht-just-a-brother-11","parent":"ht-just-a-brother-4","author":"npc-super","text":"从哪里能看出来很配？事实上一点也不配"},
    {"id":"ht-just-a-brother-12","parent":"ht-just-a-brother-5","author":"npc-super","text":"滚"},
    {"id":"ht-just-a-brother-13","parent":"ht-just-a-brother-6","author":"npc-super","text":"我把他当做一个很可爱的弟弟。"},
    {"id":"ht-just-a-brother-14","parent":"ht-just-a-brother-7","author":"npc-super","text":"不是！我只是把他当作很可爱的弟弟而已。"},
    {"id":"ht-just-a-brother-15","parent":"ht-just-a-brother-3","author":"npc-jia","text":"呀！我想起来了！这不是新来的姜秘书吗！"},
    {"id":"ht-just-a-brother-16","parent":"ht-just-a-brother-15","author":"npc-yjji","text":"呀……姜秘书真是男女通吃啊……"},
    {"id":"ht-just-a-brother-17","parent":"ht-just-a-brother-16","author":"npc-momo","text":"原来我的竞争对手不止女生还有男的吗……西八……😇"},
    {"id":"ht-just-a-brother-18","parent":"ht-just-a-brother","author":"npc-sam","text":"不过所以楼主是姜秘书什么人？"},
    {"id":"ht-just-a-brother-19","parent":"ht-just-a-brother-18","author":"npc-love-master","text":"问得好，楼主是姜秘书的追求者吗，整个帖子都在吃醋"},
    {"id":"ht-just-a-brother-20","parent":"ht-just-a-brother-19","author":"npc-super","text":"我不是。"},
    {"id":"ht-just-a-brother-21","parent":"ht-just-a-brother-20","author":"npc-echo","text":"呀宝贝，你的嘴硬的可以撬开地球了，这就是喜欢啊，喜欢💕"},
    {"id":"ht-just-a-brother-22","parent":"ht-just-a-brother-21","author":"npc-echo","text":"你的工作做完了吗，滚。"},
    {"id":"ht-just-a-brother-23","parent":"ht-just-a-brother-22","author":"npc-echo","text":"呀宝贝，你现在都不否认了呢😋"},
    {"id":"ht-just-a-brother-24","parent":"ht-just-a-brother","author":"npc-yala","text":"不过姜秘书不是每天都跟在常务身边吗，感觉至少应该跟常务关系更好吧"},
    {"id":"ht-just-a-brother-25","parent":"ht-just-a-brother-24","author":"npc-echo","text":"这是你开的小号吗宝贝，好生硬，好努力🥰"},
    {"id":"ht-just-a-brother-26","parent":"ht-just-a-brother-25","author":"npc-angela","text":"这个叫楼主的宝贝到底是楼主什么人，我要笑死了，没人发现楼主现在已经放弃抵抗了吗😋"},
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
  const topicMutations = new Set();
  let topicRevision = 0;
  let topicSyncing = false;

  function paintTopicAction(button,state) {
    const { topicAction } = button.dataset;
    if (topicAction === 'reply') {
      button.querySelector('span').textContent = state.replies || '';
      return;
    }
    const pressed = topicAction === 'like' ? state.liked : state.saved;
    button.setAttribute('aria-pressed',String(pressed));
    button.setAttribute('aria-label',topicAction === 'like'
      ? (pressed ? '取消点赞' : '点赞') : (pressed ? '取消收藏' : '收藏'));
    if (topicAction === 'like') button.querySelector('span').textContent = state.likes;
  }

  function updateTopicActions(states) {
    const byId = new Map(states.map(state => [String(state.post_id),state]));
    root.querySelectorAll('[data-topic-action]').forEach(button => {
      const state = byId.get(button.dataset.topicPost);
      if (state) paintTopicAction(button,state);
    });
  }

  async function refreshTopicActions() {
    if (!account || topicSyncing || topicMutations.size) return;
    const visibleView = views.find(view => view.dataset.xPage === page);
    if (!visibleView) return;
    const ids = [...new Set(Array.from(visibleView.querySelectorAll('[data-topic-action=like]'),
      button => button.dataset.topicPost))];
    if (!ids.length) return;
    topicSyncing = true;
    const run = topicRevision;
    const player = account;
    try {
      for (let i = 0; i < ids.length; i += 30) {
        const states = await api('topic-states','POST',{ids:ids.slice(i,i+30)});
        if (run !== topicRevision || player !== account) break;
        updateTopicActions(states);
      }
    } catch (error) {
      console.warn('X topic state:', error.code || error.name);
    } finally {
      topicSyncing = false;
    }
  }

  async function reactToTopic(button) {
    const { topicPost,topicAction } = button.dataset;
    if (topicMutations.has(topicPost)) return;
    topicMutations.add(topicPost);
    topicRevision++;
    button.disabled = true;
    const player = account;
    try {
      const state = await api('topic-reactions/' + topicPost,'PUT',{
        kind:topicAction, value:button.getAttribute('aria-pressed') !== 'true'
      });
      if (player !== account) return;
      updateTopicActions([state]);
      if (topicAction === 'bookmark' && page === 'bookmarks') renderBookmarks();
    } catch {
      if (player === account) showToast('操作未保存，请重试');
    } finally {
      topicMutations.delete(topicPost);
      button.disabled = false;
    }
  }

  function openPost(id) {
    if (page !== 'post') postHistory.length = 0;
    postHistory.push({page,id:openPostId});
    openPostId = id;
    show('post');
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
  const storyAssets = {"x/posts/1-1.jpg":"x/posts/1-1.webp","x/posts/1-2.jpg":"x/posts/1-2.webp","x/posts/2-1.jpg":"x/posts/2-1.webp","x/posts/2-2.jpg":"x/posts/2-2.webp","x/posts/2-3.jpg":"x/posts/2-3.webp","x/posts/2-4.jpg":"x/posts/2-4.webp","x/posts/2-5.jpg":"x/posts/2-5.webp","x/posts/ht-bignews-photo.jpg":"x/posts/ht-bignews-photo.webp","x/posts/j5-1.jpg":"x/posts/j5-1.webp","x/posts/j5-2-1.jpg":"x/posts/j5-2-1.webp","x/posts/j5-2-2.jpg":"x/posts/j5-2-2.webp","x/posts/j5-2-3.jpg":"x/posts/j5-2-3.webp","x/posts/j5-3.jpg":"x/posts/j5-3.webp","x/posts/jaehee-introduction.jpg":"x/posts/jaehee-introduction.webp","x/posts/r6-3.jpg":"x/posts/r6-3.webp","x/posts/r6-4.jpg":"x/posts/r6-4.webp","x/posts/r7-bestie.jpg":"x/posts/r7-bestie.webp","x/posts/r7-cat.jpg":"x/posts/r7-cat.webp","x/posts/r7-flowers.jpg":"x/posts/r7-flowers.webp","x/posts/r8-undercover-1.jpg":"x/posts/r8-undercover-1.webp","x/posts/r8-undercover-5.jpg":"x/posts/r8-undercover-5.webp","x/posts/r8-undercover-7.jpg":"x/posts/r8-undercover-7.webp","x/posts/t3-1.jpg":"x/posts/t3-1.webp","x/posts/t3-2.jpg":"x/posts/t3-2.webp","x/posts/t3-3.jpg":"x/posts/t3-3.webp","x/posts/t3-4.jpg":"x/posts/t3-4.webp","x/posts/t3-5.jpg":"x/posts/t3-5.webp","x/posts/t3-6.jpg":"x/posts/t3-6.webp","x/posts/t4-1.jpg":"x/posts/t4-1.webp","x/posts/t4-2.jpg":"x/posts/t4-2.webp","x/posts/t4-4.jpg":"x/posts/t4-4.webp","x/posts/t4-5.jpg":"x/posts/t4-5.webp","x/posts/tg-1.jpg":"x/posts/tg-1.webp","x/posts/tg-2.jpg":"x/posts/tg-2.webp","x/posts/tg-3-1.jpg":"x/posts/tg-3-1.webp","x/posts/tg-3-2.jpg":"x/posts/tg-3-2.webp","x/posts/tg-4.jpg":"x/posts/tg-4.webp","x/posts/tg2-1-1.jpg":"x/posts/tg2-1-1.webp","x/posts/tg2-1-2.jpg":"x/posts/tg2-1-2.webp","x/posts/tg2-2.jpg":"x/posts/tg2-2.webp","x/posts/tg2-3.jpg":"x/posts/tg2-3.webp","x/posts/tg2-5.jpg":"x/posts/tg2-5.webp","x/posts/tg2-6.jpg":"x/posts/tg2-6.webp","x/posts/tg2-7.jpg":"x/posts/tg2-7.webp"};
  const storyAsset = path => storyAssets[path] || path;
  function postGallery(post) {
    const gallery = node('div','','x-post-gallery');
    gallery.dataset.count = String(post.images.length);
    post.images.forEach((asset, index) => {
      const path = asset.replace(/^\//, "");
      const src = /^https?:\/\//i.test(asset) ? asset :
        storyAsset(path.includes('/') ? path : 'x/posts/' + path + '.jpg');
      const image = node('img');
      image.src = src;
      image.alt = '配图 '+(index+1);
      image.loading = 'lazy';
      if (post.imageZoom === false) {
        const tile = node('div','','x-post-photo-static');
        tile.append(image);
        gallery.append(tile);
        return;
      }
      const button = node('button');
      button.type = 'button';
      button.setAttribute('aria-label','查看配图 '+(index+1));
      if (post.imageAspectRatio) button.style.aspectRatio = post.imageAspectRatio;
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
    const playerPost = Boolean(post.topicId);
    const author = playerPost ? sharedPlayer(post.author) : accounts.find(a => a.id === post.author);
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
      const content = node(detailed ? 'p' : 'button',post.text,playerPost ? 'x-post-text x-topic-copy' : 'x-post-text');
      if (!detailed) {
        content.type = 'button';
        content.onclick = () => openPost(post.id);
      }
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
      if (post.poster) video.poster = storyAsset('x/posts/' + post.poster + '.jpg');
      video.setAttribute('aria-label','播放泰钢集团推文视频');
      article.append(video);
    }
    if (post.credit) article.append(node('p',post.credit,'x-post-credit'));
    if (playerPost) {
      const date = new Date(post.createdAt);
      const stamp = node('time',date.toLocaleString('zh-CN',{dateStyle:'medium',timeStyle:'short'}),'x-post-date');
      stamp.dateTime = date.toISOString();
      article.append(stamp);
    } else if (post.date) article.append(node('p',post.time+' · '+post.date,'x-post-date'));
    const actions = node('div','','x-post-actions');
    for (const [kind,label] of [['reply','回复'],['repost','转发'],['like','点赞'],['views','查看次数'],['bookmark','收藏'],['share','分享']]) {
      const button = node('button');
      button.type = 'button';
      button.setAttribute('aria-label',label);
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+glyphs[kind]+'"/></svg>';
      if (playerPost && ['reply','like','bookmark'].includes(kind)) {
        button.dataset.topicPost = post.topicId;
        button.dataset.topicAction = kind;
        if (kind !== 'bookmark') button.append(node('span'));
        paintTopicAction(button,post.state);
      }
      if (playerPost && (kind === 'like' || kind === 'bookmark')) {
        button.onclick = () => reactToTopic(button);
      } else if (kind === 'like' || kind === 'bookmark') {
        button.dataset.xReaction = kind;
        button.dataset.postId = post.id;
        button.setAttribute('aria-pressed',String((kind === 'like' ? reactions.liked : reactions.saved).includes(post.id)));
        if (kind === 'like') button.append(node('span',String(reactions.counts[post.id] || 0)));
        button.onclick = () => react(post.id,kind);
      } else if (kind === 'reply') {
        const count = playerPost ? 0 : posts.filter(p => p.parent === post.id).length;
        if (count) button.append(node('span',String(count)));
        button.disabled = Boolean(post.locked || post.parent);
        button.onclick = () => {
          if (!detailed) {
            openPost(post.id);
            if (playerPost) return;
          }
          const clearTarget = byId('xReplyTargetClear');
          if (!byId('xReplyTarget').hidden && !clearTarget.disabled) clearTarget.click();
          replyField.focus();
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
    const endpoint = post.topicId ? 'topic-comments/' + post.topicId : 'comments/' + encodeURIComponent(post.id);
    const context = byId('xReplyTarget');
    const contextName = byId('xReplyTargetName');
    let selected = null;
    let submission = null;
    let sending = false;
    const active = () => replyBar.onsubmit === submitReply;

    function setTarget(target) {
      selected = target;
      context.hidden = !target;
      contextName.textContent = target ? '回复 @' + target.author.handle : '';
      replyField.setAttribute('aria-label',contextName.textContent || '发布你的回复');
    }

    function action(kind,label) {
      const button = node('button');
      button.type = 'button';
      button.setAttribute('aria-label',label);
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+glyphs[kind]+'"/></svg>';
      return button;
    }

    function replyCard(entry) {
      const group = node('div','','x-player-reply');
      const card = node('article','','x-post x-thread-reply');
      const header = node('div','','x-post-author');
      const author = sharedPlayer(entry.author);
      const byline = node('div','','x-post-byline');
      byline.append(node('strong',author.name),node('span','@'+author.handle,'x-post-muted'));
      header.append(playerAvatarButton(author),byline);
      const date = new Date(entry.createdAt);
      const stamp = node('time',date.toLocaleString('zh-CN',{dateStyle:'medium',timeStyle:'short'}),'x-post-date');
      stamp.dateTime = date.toISOString();

      const actions = node('div','','x-post-actions x-player-reply-actions');
      const reply = action('reply','回复 @'+author.handle);
      reply.onclick = () => {
        if (sending) return;
        setTarget(target);
        replyField.focus();
      };
      const like = action('like','点赞');
      like.dataset.replyLike = '';
      const count = node('span');
      const updateLike = state => {
        like.setAttribute('aria-pressed',String(state.liked));
        like.setAttribute('aria-label',state.liked ? '取消点赞' : '点赞');
        count.textContent = String(state.likes);
      };
      if (entry.comment_id === undefined) like.disabled = true;
      else updateLike(entry);
      like.append(count);
      like.onclick = async () => {
        like.disabled = true;
        try {
          updateLike(await api('comment-likes/' + entry.id,'PUT',{
            value: like.getAttribute('aria-pressed') !== 'true'
          }));
        } catch {
          if (active()) showToast('点赞状态更新失败，请重试。');
        } finally {
          like.disabled = false;
        }
      };
      actions.append(reply,like);
      card.append(header,node('p',entry.body,'x-post-text x-topic-copy'),stamp,actions);
      const children = node('div');
      const expand = node('button','','x-thread-more x-thread-expand');
      expand.type = 'button';
      expand.setAttribute('aria-expanded','false');
      const branch = replyList(children,entry.id);
      let countReplies = Number(entry.replies || 0);
      const updateExpand = () => {
        expand.hidden = !countReplies;
        expand.textContent = children.hidden ? '查看 ' + countReplies + ' 条回复' : '收起回复';
        expand.setAttribute('aria-expanded',String(!children.hidden));
        card.classList.toggle('x-thread-connected',!children.hidden && branch.hasReplies());
      };
      const target = {
        id: entry.id,
        author,
        async reveal(added = false) {
          if (added) countReplies++;
          children.hidden = false;
          updateExpand();
          if (added || !branch.hasReplies()) await branch.load(null);
          updateExpand();
        }
      };
      children.hidden = true;
      expand.onclick = () => {
        if (children.hidden) target.reveal();
        else {
          children.hidden = true;
          updateExpand();
        }
      };
      updateExpand();
      group.append(card,expand,children);
      return group;
    }

    function replyList(container, parent = null) {
      const entries = node('div');
      const more = node('button','加载更多回复','x-thread-more');
      more.type = 'button';
      more.hidden = true;
      container.append(entries,more);
      let request = 0;
      let next = null;
      function load(before) {
        const run = ++request;
        more.disabled = true;
        const params = new URLSearchParams();
        if (parent !== null) params.set('parent',parent);
        if (before !== null) params.set('before',before);
        return api(endpoint + '?' + params).then(result => {
          if (run !== request || !active()) return;
          const cards = result.entries.map(replyCard);
          if (before === null) entries.replaceChildren(...cards);
          else entries.append(...cards);
          next = result.next;
          more.textContent = '加载更多回复';
          more.hidden = next === null;
        }).catch(error => {
          if (run !== request || !active()) return;
          console.warn('X reply load:', error.code || error.name);
          next = before;
          more.textContent = '回复加载失败，重试';
          more.hidden = false;
        }).finally(() => {
          if (run === request) more.disabled = false;
        });
      }
      more.onclick = () => load(next);
      return { load, hasReplies: () => Boolean(entries.childElementCount) };
    }

    const roots = replyList(section);
    async function submitReply(event) {
      event.preventDefault();
      const body = replyField.value.trim();
      if (!body || sending) return;
      const target = selected;
      const parent = target?.id ?? null;
      if (submission?.body !== body || submission.parent !== parent) {
        submission = { body,parent,id:crypto.randomUUID() };
      }
      sending = true;
      replySubmit.disabled = replyField.disabled = true;
      byId('xReplyTargetClear').disabled = true;
      replyStatus.textContent = '正在发布…';
      try {
        await api(endpoint,'POST',{body,parent,submission:submission.id});
        if (!active()) return;
        replyField.value = '';
        replyField.oninput();
        submission = null;
        setTarget(null);
        replyStatus.textContent = '';
        if (target) await target.reveal(true);
        else {
          await roots.load(null);
          if (post.topicId) refreshTopicActions();
        }
      } catch {
        if (active()) replyStatus.textContent = '发布失败，请重试。';
      } finally {
        sending = false;
        if (active()) {
          replySubmit.disabled = replyField.disabled = false;
          byId('xReplyTargetClear').disabled = false;
        }
      }
    }

    replyBar.hidden = false;
    replyBar.reset();
    replyField.disabled = replySubmit.disabled = false;
    replyField.oninput();
    replyStatus.textContent = '';
    setTarget(null);
    const clear = byId('xReplyTargetClear');
    clear.disabled = false;
    clear.onclick = () => {
      setTarget(null);
      replyField.focus();
    };
    replyBar.onsubmit = submitReply;
    roots.load(null);
    return section;
  }

  async function renderSharedThread(topicId) {
    const container = byId('xPostThread');
    const loading = node('p','正在加载贴文…','x-empty');
    container.replaceChildren(loading);
    const current = () => page === 'post' && openPostId === 'topic:' + topicId && container.contains(loading);
    try {
      const entry = await api('topic-post/' + topicId);
      if (!current()) return;
      container.replaceChildren(sharedTopicCard(entry,true),playerComments({topicId}));
    } catch {
      if (!current()) return;
      loading.textContent = '暂时无法加载贴文。';
      const retry = node('button','重试','x-thread-more');
      retry.type = 'button';
      retry.onclick = () => renderSharedThread(topicId);
      container.append(retry);
    }
  }

  function renderThread() {
    if (openPostId.startsWith('topic:')) {
      renderSharedThread(openPostId.slice(6));
      return;
    }
    const post = posts.find(p => p.id === openPostId);
    const descendants = parentId => posts.filter(reply => reply.parent === parentId).flatMap(reply => {
      const children = descendants(reply.id);
      return [postCard(reply,false,children.length > 0), ...children];
    });
    byId('xPostThread').replaceChildren(postCard(post,true), ...(post.locked || post.parent ? [] : [playerComments(post)]), ...descendants(post.id));
  }
  function renderBookmarks() {
    const key = byId('xBookmarkSearch').value.trim().toLowerCase().replace(/^@/,'');
    const list = byId('xBookmarkPosts');
    const matches = (text,author) => [text,author.name,author.handle].join(' ').toLowerCase().includes(key);
    const stories = posts.filter(post => reactions.saved.includes(post.id) &&
      matches(post.text,accounts.find(a => a.id === post.author)));
    const playerPosts = node('div');
    const status = node('p','','x-empty');
    const more = node('button','加载更多','x-thread-more');
    more.type = 'button';
    more.hidden = true;
    list.replaceChildren(...stories.map(post => postCard(post)),playerPosts,status,more);
    let cursor = null;
    async function load() {
      const current = () => page === 'bookmarks' && list.contains(playerPosts);
      more.hidden = true;
      status.textContent = '正在加载收藏…';
      try {
        const result = await api('topic-bookmarks' + (cursor === null ? '' : '?before=' + cursor));
        if (!current()) return;
        playerPosts.append(...result.entries.filter(entry => matches(entry.text,entry.author)).map(entry => sharedTopicCard(entry)));
        cursor = result.next;
        status.textContent = stories.length || playerPosts.childElementCount || cursor !== null ? '' : '暂无贴文';
        more.textContent = '加载更多';
        more.hidden = cursor === null;
      } catch {
        if (!current()) return;
        status.textContent = '暂时无法加载玩家贴文的收藏。';
        more.textContent = '重试';
        more.hidden = false;
      }
    }
    more.onclick = load;
    load();
  }
  byId('xBookmarks').onclick = () => show('bookmarks');
  byId('xBookmarkSearch').oninput = renderBookmarks;
  setInterval(() => {
    if (root.classList.contains('active') && !document.hidden) {
      refreshReactions();
      if (['topic','profile','post','bookmarks'].includes(page)) refreshTopicActions();
    }
  }, 2500);
  byId('openX').onclick = () => {
    showView('xView');
    show(account ? 'home' : 'login');
    if (account) {
      refreshReactions();
      return;
    }
    if (!backend.configured) {
      loginStatus.textContent = '网页版的多人互动将在接入 Supabase 后开放。';
      return;
    }
    loginForm.style.display = '';
    loginStatus.textContent = '';
    if (!connecting) {
      connecting = true;
      const pendingConfirmation = emailConfirmation;
      emailConfirmation = null;
      (async () => {
        const confirmed = await pendingConfirmation;
        if (confirmed === false) {
          loginStatus.textContent = '邮箱验证失败，链接可能已过期。';
          return;
        }
        await resumePlayer();
        if (confirmed) showToast('邮箱已验证');
      })().catch(error => {
        if (error.message !== '401') handleLoginError(error);
      }).finally(() => { connecting = false; });
    }
  };
  byId('xSignOut').onclick = async () => {
    const button = byId('xSignOut');
    button.disabled = true;
    try {
      await backend.signOut();
      account = null;
      playerAvatar = null;
      revision++;
      updateReactions({ counts: {}, liked: [], saved: [] });
      loginForm.reset();
      loginStatus.textContent = '已退出登录。';
      loginForm.style.display = '';
      show('login');
    } catch {
      showToast('退出登录失败，请重试。');
    } finally {
      button.disabled = false;
    }
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
