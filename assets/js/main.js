$(function () {
	// Initializing easeScroll for smoth scrolling
	$("html").easeScroll();

	// navbar scroll
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("scrolled");
		} else {
			$(".navbar-fixed-top").removeClass("scrolled");
		}
	});

	// toggle scrolled if scrolled before reload
	$(".navbar").ready(function () {
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
	$(document).on('click', 'a.page-scroll', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 59
		}, 900, 'easeInOutExpo');
		event.preventDefault();
	});

	// Scroll to Top nav
	$('body').append('<div id="toTop"><i class="fa fa-chevron-up"></i></div>');

	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').on('click', function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// Preloader
	$(window).ready(function () {
		$('#preloader').delay(500).fadeOut('fade');
	});

	// Scroll to set active nav item
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();
		$(".page-scroll").each(function () {
			var sectionOffset = $(this).offset().top - 73;
			console.log(sectionOffset + ' ' + scrollbarLocation);
			console.log($(this));
			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	})

	// Progress line skills
	// if ($('.progress-line').length) {
	// 	$('.progress-line').appear(function () {
	// 		var el = $(this);
	// 		var percent = el.data('width');
	// 		$(el).css('width', percent + '%');
	// 	}, { accY: 0 });
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

	$(document).bind('ajaxStart', function () {
		$('.submit-btn').hide();
		$('.ajax-loader').show();
	}).bind('ajaxStop', function () {
		$('.ajax-loader').hide();
		$('.submit-btn').show();
	});

	$('.tab-nav-item .tab-link').click(function (e) {
		var t = $(this).attr('data-target');

		$(this).parent().addClass('nav-tab-active');
		$(this).parent().siblings().removeClass('nav-tab-active');

		$('.tab-nav-content-item').hide();
		$('#' + t).fadeIn(2000);
		e.preventDefault();
	});

	$('.tab-nav-content-item').each(function () {
		var container = $(this).find('.image-popup');
		container.magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});

	$('#formMessage .close').on('click', function () {
		$(this).parent().fadeOut('1000').removeClass('show');
	})
	setTimeout(function () {
		$('this').fadeOut('fast').removeClass('show');
	}, 400);

	var type = document.getElementById('typewrite');

	var typewriter = new Typewriter(type, {
		loop: true
	});

	typewriter.typeString("A Freelance Full-Stack Developer")
		.pauseFor(1000)
		.deleteChars(30)
		.typeString('Computer Science Student')
		.pauseFor(000)
		.deleteAll()
		.typeString('Great to have you here!')
		.pauseFor(3000)
		.start();
});

