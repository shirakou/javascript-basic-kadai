// button id="btn"を定数に代入し、実行
const btnFirst = document.getElementById('btn');

// h2 id="text"を定数に代入し、実行
const textFirst = document.getElementById('text');

// HTML処理が実行された時にイベント処理を実行
btnFirst.addEventListener('click',() => {
  setTimeout(() => {
    textFirst.textContent='ボタンをクリックしました'
  },2000);
});
