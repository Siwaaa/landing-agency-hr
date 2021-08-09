const swiper = new Swiper('.partners__slider', {
  // Optional parameters
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".partners__prev",
    nextEl: ".partners__next"
  }
});
const swiperPodbor = new Swiper('.podbors__body--swiper ', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".podbor-prev",
    nextEl: ".podbor-next"
  }
});
const swiperUnderstand = new Swiper('.understand__body--swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  // preloadImages: false,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".understand-prev",
    nextEl: ".understand-next"
  }
});
const swiperFacts = new Swiper('.facts__facts-content--swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 40,
  CSSWidthAndHeight: true,
  // preloadImages: false,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".facts__facts-prev",
    nextEl: ".facts__facts-next"
  }
});