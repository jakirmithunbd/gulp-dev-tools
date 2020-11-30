jQuery(function($){

	AOS.init({
		offset: -300,
		duration:2000
		// once: true
	});

	// Mobile Menu
	$('.menu-toggle').click(function(){
		$('.search-toggle, .header-search').removeClass('active');
		$('.menu-toggle, .nav-menu, .mega-menu, body').toggleClass('active');
	});

	$('.menu-item-has-children > .submenu-expand').click(function(e){
		$(this).toggleClass('expanded');
		e.preventDefault();
	});

	$('.tenders-wrapper .tender .tender-above').click(function(e){
		$(this).parent().toggleClass('expanded');
		e.preventDefault();
	});

	// Search toggle
	$('.search-toggle').click(function(){
		$('.menu-toggle, .nav-menu').removeClass('active');
		$('.search-toggle, .header-search').toggleClass('active');
		$('.site-header .search-field').focus();
	});

	/*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 100) {
		  $(".site-header").addClass("sticky");
		  
		  $('.nav-menu, .menu-toggle').removeClass('active');
        } 
        else {
          $(".site-header").removeClass("sticky");
        }
	});
	

	
	$('.video_header .details').click(function (e) {
		console.log('.details');
		e.stopPropagation();
	});

	$('.header_cont  video , #play_btn , #play_btn_mobile').click(function (e) {
		e.preventDefault();
		if (firstTime) {
			sendAnaliticsCode(10002001);
			isPlay = true;
			firstTime = false;
			video[0].pause();
			video[0].currentTime = 0;
			video[0].play();
			video[0].muted = 0;
			$('#play_btn').toggleClass("isPlay");
			$('#play_btn_mobile').toggleClass("isPlay");
			$('.video_header video,.video_header .details').toggleClass("isPlay");
			if (window.innerWidth < 767) { //mobile only
				showVideo(true);
			}
		} else {
			if (isPlay) {
				isPlay = false;
				video[0].pause();
				$('#play_btn').toggleClass("isPlay");
				$('#play_btn_mobile').toggleClass("isPlay");
				$('.video_header video,.video_header .details').toggleClass("isPlay");
				if (window.innerWidth < 767) { //mobile only
					showVideo(false);
				}
			} else {
				sendAnaliticsCode(10002001);
				isPlay = true;
				video[0].play();
				$('#play_btn').toggleClass("isPlay");
				$('#play_btn_mobile').toggleClass("isPlay");
				$('.video_header video,.video_header .details').toggleClass("isPlay");
				if (window.innerWidth < 767) { //mobile only
					showVideo(true);
				}
			}

		}


	});

	function showVideo(show) { // show video on mobile
		if (show) {
			$('.header_cont img').addClass('d-none').removeClass('d-block');
			$('.header_cont video').removeClass('d-none').css({"position": "static"});
		} else {
			$('.header_cont img').addClass('d-block').removeClass('d-none');
			$('.header_cont video').addClass('d-none');
		}
	}

	// Project Silder
    $(".projects_slider_section .project-wrapper").slick({
        dots: true,
        // infinite: true,
        // draggable: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		rtl: jsdata.rtl ? true : false  
	  });

	$(".scroll-down a").click(function() {
		$('html, body').animate({
			scrollTop: $(".entry-content").offset().top
		}, 1000);
	});

	$('.entry-content ul').each(function( index ) {
		w = $( this ).width() ;
		l = $(this).children('li').length
		if (w > 600 && l > 5 ){$(this).addClass('columns')}
	});


});
