$(function () {
  var slider01 = new Swiper(".gallery-slider-01", {
    autoplay: {
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 54, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var thumbs01 = new Swiper(".gallery-thumbs-01", {
    slidesPerView: "auto",
    spaceBetween: 8,
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
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 190, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var thumbs02 = new Swiper(".gallery-thumbs-02", {
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider02.controller.control = thumbs02;
  thumbs02.controller.control = slider02;
});

$(function () {
  var slider03 = new Swiper(".gallery-slider-03", {
    autoplay: {
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 35, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var thumbs03 = new Swiper(".gallery-thumbs-03", {
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider03.controller.control = thumbs03;
  thumbs03.controller.control = slider03;
});



$(function () {
  var slider04 = new Swiper(".gallery-slider-04", {
    autoplay: {
      delay: 4000,
    },

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 48, //슬라이드 수와 동일한 값을 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var thumbs04 = new Swiper(".gallery-thumbs-04", {
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider04.controller.control = thumbs04;
  thumbs04.controller.control = slider04;
});
