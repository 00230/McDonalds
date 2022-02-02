// 여기서부터 윈도우 resize이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

// 스크롤바 유무 확인 
function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
if (scD > 0) {
    deviceSize1 = deviceSize1 - scD
    deviceSize2 = deviceSize2 - scD
}

function init() {
    var ww = $(window).width()
    if (ww > deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        // $('#header #nav').css({
        //     position: 'absolute',
        //     top: '50%',
        //     transform: 'translateY(-50%)',
        //     right: 0,
        //     background: 'none',
        //     left: 'unset',
        //     overflow: 'unset',
        //     bottom: 'unset'
        // })
        // $('#header #nav .depth1').css({
        //     position: 'unset',
        //     top: 'unset',
        //     height: 'unset',
        //     right: 'unset',
        //     width: 'unset',
        //     background: 'unset',
        //     paddingTop: 'unset'
        // })
        // $('#header #nav .depth1 > li > a').next().hide()
        $('html').scrollTop(0)
    } else if (ww > deviceSize2 && ww <= deviceSize1 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        // $('#header #nav').css({
        //     position: 'fixed',
        //     top: '0',
        //     transform: 'translateY(0%)',
        //     right: '0',
        //     background: 'rgba(0,0,0,0.5)',
        //     left: '100%',
        //     bottom: '0',
        //     overflowY: 'auto',
        //     overflowX: 'hidden'
        // })
        // $('#header #nav .depth1').css({
        //     position: 'absolute',
        //     top: '0',
        //     height: '100%',
        //     right: '-200px',
        //     width: '200px',
        //     background: '#fff',
        //     paddingTop: '50px'
        // })
        // $('#header .opennav').removeClass('on')
        // $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0)
    } else if (ww <= deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
        // $('#header #nav').css({
        //     position: 'fixed',
        //     top: 0,
        //     transform: 'translateY(0%)',
        //     right: 0,
        //     background: 'rgba(0,0,0,0.5)',
        //     left: '100%',
        //     bottom: '0px',
        //     overflowY: 'auto',
        //     overflowX: 'hidden'
        // })
        // $('#header #nav .depth1').css({
        //     position: 'absolute',
        //     top: '0',
        //     height: '100%',
        //     right: '-200px',
        //     width: '200px',
        //     background: '#fff',
        //     paddingTop: '50px'
        // })
        // $('#header .opennav').removeClass('on')
        // $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0)
    }
}

init()

$(window).on('resize', function () {
    init()
})

// 여기까지 윈도우 resize이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램

var depth1 = $('#header #nav .depth1')
var decobox = $('#header .decobox')

depth1.on('mouseover mouseout', function(){
    $(this).find('.depth2').stop().slideToggle(250)
    $('body').find('.decobox').stop().slideToggle(250)
})


$('.subnav button').on('click', function(){
    $(this).siblings('.search').addClass('on')
})

$('.subnav .search button').on('click', function(){
    $(this).parent('.search.on').css({display:'none'})
})

