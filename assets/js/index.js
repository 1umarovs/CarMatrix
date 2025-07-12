    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }