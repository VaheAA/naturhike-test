// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.curved-slider-button-next',
    prevEl: '.curved-slider-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
