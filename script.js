$(document).ready(function(){

    // Slick New Plant
    $('.slider-newplant').slick({
        infinite: false,
        dot: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            }
          ]
    });

    // $('.highlight-slider').on('afterChange', function(event, slick, currentSlide) {
    //     $('.highlight-info').slick('slickGoTo', currentSlide);
    //     var currrentNavSlideElem = '.highlight-info .slick-slide[data-slick-index="' + currentSlide + '"]';
    //     $('.highlight-info .slick-slide.is-active').removeClass('is-active');
    //     $(currrentNavSlideElem).addClass('is-active');
    // });
   
    // $('.highlight-info').on('click', '.slick-slide', function(event) {
    //     event.preventDefault();
    //     var goToSingleSlide = $(this).data('slick-index');
   
    //     $('.highlight-slider').slick('slickGoTo', goToSingleSlide);
    // });

    $('.slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    $('.slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');

});