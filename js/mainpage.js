$(document).ready(function () {
  // 비주얼 스와이퍼
  const visSwiper = new Swiper(".visualSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 메뉴 슬라이드
  const menuSwiper = new Swiper(".swiper-menu-1", {
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".swiper-menu-1 .swiper-button-next",
      prevEl: ".swiper-menu-1 .swiper-button-prev",
    },
    loop: true,
    speed: 2500,
    observer: true,
    observeParents: true,
  });
  const menuSwiper2 = new Swiper(".swiper-menu-2", {
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".swiper-menu-2 .swiper-button-next",
      prevEl: ".swiper-menu-2 .swiper-button-prev",
    },
    loop: true,
    speed: 2500,
    observer: true,
    observeParents: true,
  });
  const menuSwiper3 = new Swiper(".swiper-menu-3", {
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".swiper-menu-3 .swiper-button-next",
      prevEl: ".swiper-menu-3 .swiper-button-prev",
    },
    loop: true,
    speed: 2500,
    observer: true,
    observeParents: true,
  });
  // 메뉴 탭 부분
  $(".swiper-menu-2").css({ display: "none" });
  $(".swiper-menu-3").css({ display: "none" });
  $(".tab1").css({
    color: "#000",
    "font-weight": "700",
    "text-decoration": "underline",
  });
  $(".menu-left .tab1").click(function () {
    $(".swiper-menu-2").css({ display: "none" });
  $(".swiper-menu-3").css({ display: "none" });
    $(".swiper-menu-1").css({display:"block"});
    $(".tab1").css({
      color: "#000",
      "font-weight": "700",
      "text-decoration": "underline",
    });
    $(".tab2").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
    $(".tab3").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
  });
  $(".menu-left .tab2").click(function () {
    $(".swiper-menu-2").css({ display: "block" });
  $(".swiper-menu-3").css({ display: "none" });
    $(".swiper-menu-1").css({display:"none"});
    $(".tab2").css({
      color: "#000",
      "font-weight": "700",
      "text-decoration": "underline",
    });
    $(".tab1").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
    $(".tab3").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
  });
  $(".menu-left .tab3").click(function () {
    $(".swiper-menu-2").css({ display: "none" });
  $(".swiper-menu-3").css({ display: "block" });
    $(".swiper-menu-1").css({display:"none"});
    $(".tab3").css({
      color: "#000",
      "font-weight": "700",
      "text-decoration": "underline",
    });
    $(".tab2").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
    $(".tab1").css({
      color: "",
      "font-weight": "",
      "text-decoration": "",
    });
  });
  // 사이드메뉴
});