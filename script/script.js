new fullpage("#fullpage", {
  navigation: true,
  navigationPosition: "right",
  showActiveTooltip: true,
  responsiveWidth: 1900,
  scrollOverflow: false,
  afterResponsive: function (isResponsive) {
    //alert("Is responsive: " + isResponsive);
  },
});

// aos 라이브러리

AOS.init();

//슬라이더
function SliderBox__init() {
  const swiper = new Swiper(".slider-box .swiper", {
    // Optional parameters
    loop: true,
    parallax: true,

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    watchSlidesProgress: true,

    // If we need pagination
    pagination: {
      el: ".slider-box .swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box .swiper-button-next",
      prevEl: ".slider-box .swiper-button-prev",
    },
  });
}

SliderBox__init();
