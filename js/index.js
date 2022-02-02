$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:1500,
    speed:600,
    dots:true,
    // arrows:false,  화살표 없애기
    prevArrow:'<button class="slick-arrow slick-prev"><img src = "./img/slide_left.png"></button>',
    nextArrow:'<button class="slick-arrow slick-next"><img src = "./img/slide_right.png"></button>',
    pauseOnDotsHover:true,
    fade:false,
    slidesToShow:1,
    slidesToScroll:1,
})



$('.article1 .plpa').on('click', function(){
    var src = $(this).find('img').attr("src")
    var datasrc = $(this).find('img').attr("data-src")
    if (!$(this).hasClass('on')){
        $(this).addClass('on')
        $(this).find('img').attr('src', datasrc).attr('data-src', src)
        $('.slide-group').slick("slickPause")
    } else {
        $(this).removeClass('on')
        $(this).find('img').attr('src', datasrc).attr('data-src', src)
        $('.slide-group').slick("slickPlay")
    }
})