$(function () {
	// Initializing easeScroll for smoth scrolling
  	$("html").easeScroll();

	// navbar scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
		    $(".navbar-fixed-top").addClass("scrolled");
		} else {
		    $(".navbar-fixed-top").removeClass("scrolled");
		}
	});

	// toggle scrolled if scrolled before reload
	$(".navbar").ready(function() {
		if ($(".navbar").offset().top > 50) {
		    $(".navbar-fixed-top").addClass("scrolled");
		} else {
		    $(".navbar-fixed-top").removeClass("scrolled");
		}
	});

	// Mouse over single featured service
	$(".featured-single-service").hover(
		function () {
			$(this).find(".icon-shape").css("border-radius", "50px");
		},
		function () {
			$(this).find(".icon-shape").css("border-radius", ".25rem");
		}
	);

	// Page scroll navigation
	$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-59
		}, 900, 'easeInOutExpo');
		event.preventDefault();
	});

	// Scroll to Top nav
	$('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').on('click',function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// Preloader
	$(window).ready(function() {
        $('#preloader').delay(500).fadeOut('fade');
	});

	// Scroll to set active nav item
    $(window).scroll(function(){
    	var scrollbarLocation=$(this).scrollTop();
    	$(".nav-link").each(function(){
    		var sectionOffset=$(this).offset().top-73;
    		if(sectionOffset <= scrollbarLocation){
    			$(this).parent().addClass('active');
    			$(this).parent().siblings().removeClass('active');
    		}
    	});
	})

	// Progress line skills
    // if($('.progress-line').length){
    //     $('.progress-line').appear(function(){
    //         var el = $(this);
    //         var percent = el.data('width');
    //         $(el).css('width',percent+'%');
    //     },{accY: 0});
	// }

	// Overlay on hover
	$(".single-project").hover(
		function () {
			$(this).find(".overlay").toggleClass('flipped');
			$(this).find("h3").slideDown("slow");
			$(this).find(".slide-left").slideDown("slow");
			$(this).find(".slide-right").slideDown("slow");
		},
		function () {
			$(this).find(".overlay").toggleClass('flipped');
			$(this).find("h3").slideUp('slow');
			$(this).find(".slide-left").slideUp("fast");
			$(this).find(".slide-right").slideUp("fast");
		}
	);

	$(document).on('click', 'a[data-target]', function(event) {
		var $navtab = $(this);
		$('tab-nav-content-item').hide();

		$($navtab.attr('id')).animate({
			
		})
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-59
		}, 900, 'easeInOutExpo');
		event.preventDefault();
	});
	$('.close').click(function () {
		$(this).parent().removeClass('show');
	});
});

