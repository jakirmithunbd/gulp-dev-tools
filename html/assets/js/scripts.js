(function($){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if ( !isIE ) {
        //IE specific code goes here
        "use strict";
    }

    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          $(".header").addClass("sticky");
        } 
        else {
          $(".header").removeClass("sticky");
        }
    });

    /*** Header height = gutter height */
    function headersetGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.header_gutter');
            if (gutter) {
            	gutter.style.height = header.offsetHeight + 'px';
            }
    }

    window.onload = headersetGutterHeight;
    window.onresize = headersetGutterHeight;

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

    $('.tab-a').click(function(e){
        e.preventDefault();  
        $(".tab-list").removeClass('tab-active');
        $(".tab-list[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).addClass('active-a');
    });
    
})(jQuery);

