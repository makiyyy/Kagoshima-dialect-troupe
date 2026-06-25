document.querySelectorAll('.tabs').forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 同じグループ内のタブだけ操作
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 対応するコンテンツ切り替え
      const targetId = tab.dataset.target;
      const contents = tabGroup.parentElement.querySelectorAll('.tab-content');

      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });
});

