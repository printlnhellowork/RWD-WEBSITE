$('.team-carousel').slick(
    
    {
    
    mobileFirst: true,
    autoStart: 2000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 3
        }
    }

]
  }
  );