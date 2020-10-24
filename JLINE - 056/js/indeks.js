// document ready
(function ($) {

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
        if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
         $("html,body").stop();
        }
       })

    $('#sec1').fadeIn('1000');

    if ($(window).width() < 768) {
        $('#sec2').css("padding-top",$('#navbar').height());
        console.log($('#navbar').height());
    }


    // scroll functions
    $(window).scroll(function(e) {
        
        if ($(window).width() > 768)
        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }
    
    });
    
    $("#btn-scroll").click(function() {
            $([document.documentElement, document.body]).animate({ 
                scrollDown: $("#sec2").offset().top
            },4000);
    })  
})(jQuery);    