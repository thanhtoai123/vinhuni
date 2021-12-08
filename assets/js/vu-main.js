$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#back-top').fadeIn()
        }else{
            $('#back-top').fadeOut()
        }

        if($(this).scrollTop() > 160 & $(this).width() >= 1200){
            $('.vu-header-bottom').addClass('pixed-menu')
            $('#vu_content').css('margin-top', '85px')
        }else{
            $('.vu-header-bottom').removeClass('pixed-menu')
            $('#vu_content').css('margin-top', '0px')
        }

        if($(this).scrollTop() > 70 & $(this).width() <1200){
            $('#vu-header-top').addClass('pixed-menu-mobie')
            $('#vu_content').css('margin-top', '56px')
        }else{
            $('#vu-header-top').removeClass('pixed-menu-mobie')
            $('#vu_content').css('margin-top', '0px')
        }
    })

    $('#back-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })


    // ====================================
  
      $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    

    var owl = $('.owl-carousel');
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
  
    $('.owl-dots').css('display', 'none')
});