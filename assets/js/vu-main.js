$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#back-top').fadeIn()
        }else{
            $('#back-top').fadeOut()
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
        autoplayTimeout:1500,
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
                items:4
            },
            1000:{
                items:5
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