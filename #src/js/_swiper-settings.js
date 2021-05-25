// Инициализация слайдера swiper
new Swiper('.catalog__content ', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   slidesPerView: 3,
   spaceBetween: 15,
   slidesPerGroup: 1,
   // centeredSlides: true,
   autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disabeOnInteraction: false
   },
   speed: 1500,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      550: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      }
   }
});

new Swiper('.reviews__content ', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   // centeredSlides: true,
   autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disabeOnInteraction: false
   },
   speed: 3000,
});