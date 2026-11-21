(() => {
  const notes = [
    {
      title: '盘点🐱🐶时间线',
      body: '（11.19已更新） https://xhslink.cn/o/4aOXL0waxSu 複製後開啟小紅書查看筆記'
    },
    {
      title: '小罪书原著',
      body: [
        '【超级会员V4】通过百度网盘分享的文件：为什么不知道是女....txt',
        '链接：https://pan.baidu.com/s/18wCdC09TEQuyh-S-S7ZDOg',
        '提取码：6JG8',
        '复制这段内容打开「百度网盘APP 即可获取」'
      ].join('\n')
    }
  ];
  const get = id => document.getElementById(id);
  const list = get('memoList');
  const detail = get('memoDetail');
  const back = get('memoBack');
  const title = get('memoTitle');
  const body = get('memoBody');
  const status = get('memoStatus');
  const copy = get('memoCopy');
  const count = get('memoCount');
  count.textContent = notes.length + ' 条备忘录';
  let selectedButton;
  function showList() {
    detail.hidden = true;
    list.hidden = false;
    copy.hidden = true;
    count.hidden = false;
    back.textContent = '‹ 桌面';
  }
  for (const note of notes) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'memo-entry';
    const heading = document.createElement('strong');
    const preview = document.createElement('small');
    heading.textContent = note.title;
    preview.textContent = note.body.split('\n')[0];
    button.append(heading, preview);
    get('memoEntries').append(button);
    button.onclick = () => {
      selectedButton = button;
      title.textContent = note.title;
      body.textContent = note.body;
      status.textContent = '';
      list.hidden = true;
      copy.hidden = false;
      count.hidden = true;
      detail.hidden = false;
      detail.scrollTop = 0;
      back.textContent = '‹ 备忘录';
      title.focus();
    };
  }
  get('openNotes').onclick = () => {
    showList();
    showView('notesView');
    back.focus();
  };
  back.onclick = () => {
    if (detail.hidden) {
      showView('homeView');
      ensureArrival();
      get('openNotes').focus();
    } else {
      showList();
      selectedButton.focus();
    }
  };
  copy.onclick = async () => {
    const text = body.textContent;
    try {
      await navigator.clipboard.writeText(text);
      if (body.textContent === text) status.textContent = '已复制正文';
    } catch {
      if (detail.hidden || body.textContent !== text) return;
      const range = document.createRange();
      range.selectNodeContents(body);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = '正文已选中，可手动复制';
    }
  };
})();
