// スクロール
// https://teratail.com/questions/257341
const anchors = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector("header").offsetHeight; //header高さ
const urlHash = location.hash; // URLのアンカー（#以降の部分）を取得

//別ページから遷移して来た場合
window.addEventListener("DOMContentLoaded", (event) => {
  if (urlHash) {
    // window.scrollTo({ top: 0 });

    setTimeout(function () {
      //ページロード用に処理を遅らす

      // スクロール先の要素を取得 （アンカーの リンク先 #.. の # を取り除いた名前と一致する id名の要素）
      const urlTarget = document.getElementsByName(urlHash.replace("#", ""));
      console.log(urlTarget[0]);

      // スクロール先の要素の位置を取得
      const urlPosition =
        window.pageYOffset + urlTarget[0].getBoundingClientRect().top - header;
      // スクロールアニメーション
      window.scroll({
        top: urlPosition, // スクロール先要素の左上までスクロール
        behavior: "smooth" // スクロールアニメーション
      });
    }, 1000); //1秒後に処理開始
  }
});

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
