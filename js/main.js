$(document).ready(function(){
    $('.feature-container').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        centerMode: true,
        dots: false,

    });
    $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        asNavFor: '.slider-for',
        dots: true,
        variableWidth: true,
        focusOnSelect: true

    });
});
