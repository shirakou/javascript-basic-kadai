// btnというidを取得し、定数に代入
const btnBtn = document.getElementById('btn');

// textというidを取得し、定数に代入
const textSecond = document.getElementById('text');

// HTML要素がクリックされた時イベント処理を実行
btnBtn.addEventListener('click', () => {
  // textというidの文章を置き換える
  textSecond.textContent = 'ボタンをクリックしました'
});


