const ham = document.querySelector('#js-hamburger');//js-hamburgerの要素を取得し変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.addEventListener('click', function(){  //ハンバーガーメニューをクリックしたら
    ham.classList.toggle('active');  //ハンバーガーメニューにactiveクラスをつけ外し
    nav.classList.toggle('active');  //ナビゲーションメニューにactiveクラスをつけ外し
});
