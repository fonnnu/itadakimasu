/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/

const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// schedule.html
function register() {
  // ここで日程の登録処理を行う（例: ローカルストレージへ保存）
  var selectedDates = /* ここに日程の取得処理 */;

  // ローカルストレージに保存
  localStorage.setItem('selectedDates', JSON.stringify(selectedDates));

  // fan_profile.htmlに遷移
  window.location.href = 'fan_profile.html';
}



// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

function showNextPage(nextPage) {
  // 選択した情報を取得
  var selectedInfo = document.getElementById('selectedPhotoTag').textContent;

  // URLにパラメーターを追加してページ遷移
  window.location.href = `${nextPage}?info=${encodeURIComponent(selectedInfo)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  // URLからパラメーターを取得
  const urlParams = new URLSearchParams(window.location.search);
  const info = urlParams.get('info');

  if (info) {
    // パラメーターがあれば、それを表示
    document.getElementById('selectedInfo').textContent = info;
  }
});
// schedule.html

