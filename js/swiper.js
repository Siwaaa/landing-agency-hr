const swiper = new Swiper('.partners__slider', {
  // Optional parameters
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  // preloadImages: false,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev"
  }
});