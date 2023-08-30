$(document).ready(function(){
      // 메뉴바 색
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".header").css("background", "#2b2b2b");
      $(".nav ul li a").css("color", "#fff");
    } else {
      $(".header").css("background", "#fff");
      $(".nav ul li a").css("color", "#000");
    }
    // 사이드메뉴
    // 버튼을 누르면 상단으로 이동
    const $topBtn = document.querySelector(".side-up");
    $topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // 버튼을 누르면 하단으로 이동
    const $bottomBtn = document.querySelector(".side-down");
    $bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
  });
})