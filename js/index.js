$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
     useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: false
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
})


$('.slider__list').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1700,
    arrow: true,
    fade: true,
    cssEase: 'linear'
  });
$(".burger-wrap").click(function () {
        $(".header__navigation").toggleClass("header__navigation--open");
        $(".burger").toggleClass('burger--close');
});
$('a.anchor').on('click', function (e) {
    e.preventDefault();
    var $anchor = $(this).attr('href');
    var $stop = $($anchor).offset().top - 0;
    $('body,html').stop(true, true).animate({scrollTop: $stop}, 1000);
    return false;
});
$(".main__sidebar-burger-wrap").click(function () {
    $(".main__sidebar-wrap").toggleClass("main__sidebar-wrap--open");
    $("main__sidebar-burger").toggleClass('main__sidebar-burger');
});
let openr = document.querySelectorAll('.main__heading-item');
let openS = document.querySelectorAll('.main__heading-answer');

openr.forEach((item, index) => {
    item.addEventListener('click', () => {
        openS[index].classList.toggle('main__heading-answer--open');
    })
})