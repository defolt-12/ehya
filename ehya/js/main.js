var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-navigation").toggleClass("navbar-navigation--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

$(document).ready(function () {
  var portfolioSlider = new Swiper(".portfolio-slider", {
    slidesPerView: 3,
    spaceBetween: 30,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".portfolio-slider__button--next",
      prevEl: ".portfolio-slider__button--prev",
    },

    on: {
      // on the elements to add events
      slideChangeTransitionEnd: function () {
        if (this.isEnd) {
          this.navigation.$nextEl.css("opacity", "0.5");
          this.navigation.$prevEl.css("opacity", "1");
        } else {
          this.navigation.$nextEl.css("opacity", "1");
          this.navigation.$prevEl.css("opacity", "0.5");
        }
      },
    },

    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      576: {
        slidesPerView: 1.4,
        spaceBetween: 5,
      },
      767: {
        slidesPerView: 1.6,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  

var feedbackSlider = new Swiper(".feedback__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".feedback__slider-button--next",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    319: {
      slidesPerView: 1,
    },
  },
});

document.addEventListener('click', event => {
  const target = event.target;
  if ( target.matches(".button") ) {
    document.querySelector(".modal__dialog").classList.add("modal__dialog--visible");
    document.querySelector(".modal__overlay").classList.add("modal__overlay--visible");
  };
});

document.addEventListener('click', event => {
  let target = event.target;

  target = target.closest('.modal__close');

  if (target) {
    document.querySelector(".modal__dialog").classList.remove("modal__dialog--visible");
    document.querySelector(".modal__overlay").classList.remove("modal__overlay--visible");
  }
});

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 27:
        document.querySelector(".modal__dialog").classList.remove("modal__dialog--visible");
        document.querySelector(".modal__overlay").classList.remove("modal__overlay--visible");
        break;
  }
};

$(document).mouseup(function (e) {
  var container = $(".modal__dialog");
  if (container.has(e.target).length === 0) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});

$('.form').each(function() {
  $(this).validate({
  messages: {
    name: {
      required: "?????????????? ???????? ??????",
      minlength: "?????? ???????????? ???????????????? ?????????????? ???? 2?? ????????????????",
    },
    email: {
      required: "?????????????? ???????? ??????????",
      email: "?????????????? ?????????? ?? ?????????????? name@domain.com",
    },
    phone: {
      required: "?????????????? ?????? ?????????? ????????????????",
      minlength: "?????????????? ?????????????? ?? ??????????????: +7 (999) 999-99-99",
    },
    text: {
      required: "Enter your location",
    },
  },
});
})
});

$(document).ready(function () {
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
});

AOS.init();

AOS.init({
  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
    },
  });
