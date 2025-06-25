$('.main_slider').slick({
  centerMode: true,
  centerPadding: '380px',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
  {
      breakpoint: 1100,
      settings: {
      arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1099,
      settings: {
      arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
      arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
