import "modern-normalize";
import "./style.scss";

var swiper = new Swiper(".sub-swiper", {
  spaceBetween: 5,
  slidesPerView: "auto",
  centered: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".main-swiper", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
