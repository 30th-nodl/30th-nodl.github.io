$(function () {
  var slider01 = new Swiper(".gallery-slider-01", {
    autoplay: {
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 29, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var thumbs01 = new Swiper(".gallery-thumbs-01", {
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider01.controller.control = thumbs01;
  thumbs01.controller.control = slider01;
});

$(function () {
  var slider02 = new Swiper(".gallery-slider-02", {
    autoplay: {
      delay: 8000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(function () {
  var slider03 = new Swiper(".gallery-slider-03", {
    autoplay: {
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 29, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
