
$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // variableWidth: true,
    speed: 1300,
    autoplaySpeed: 4000,
    dots: true,
    // mobileFirst:true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.header-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1300,
    vertical: true,
    verticalSwiping: false,
    pauseOnHover: false
});
