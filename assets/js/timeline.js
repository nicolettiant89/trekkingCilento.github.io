$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
	calculateHeight:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    speed: 1000,
    direction: "horizontal",
    navigation: {
      nextEl: ".containerTimeline .swiper-button-next",
      prevEl: ".containerTimeline .swiper-button-prev"
    },
    pagination: {
      el: ".containerTimeline .swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".containerTimeline .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
  $(".containerTimeline .swiper-container--timeline").addClass("removeOverflow");
  
  var mySwiper1 = new Swiper(".swiper1", {
    autoHeight: true,
	calculateHeight:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    speed: 1000,
    direction: "horizontal",
    navigation: {
      nextEl: ".containerTimeline1 .swiper-button-next",
      prevEl: ".containerTimeline1 .swiper-button-prev"
    },
    pagination: {
      el: ".containerTimeline1 .swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper1.slideTo($(this).index());
    $(".containerTimeline1 .swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
  $(".containerTimeline1 .swiper-container--timeline").addClass("removeOverflow");
});