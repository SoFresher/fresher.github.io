$(function () {
  	$("html").easeScroll();

	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
		    $(".navbar-fixed-top").addClass("scrolled");
		} else {
		    $(".navbar-fixed-top").removeClass("scrolled");
		}
	});
	$(".navbar").ready(function() {
		if ($(".navbar").offset().top > 50) {
		    $(".navbar-fixed-top").addClass("scrolled");
		} else {
		    $(".navbar-fixed-top").removeClass("scrolled");
		}
	});

	$(".featured-single-service").hover(
		function () {
			$(this).find(".icon-shape").css("border-radius", "50px");
		},
		function () {
			$(this).find(".icon-shape").css("border-radius", ".25rem");
		}
	);

	$(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-59
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });
	$(function(){
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

	});
	$(window).ready(function() {
        $('#preloader').delay(500).fadeOut('fade');
    });
    $(window).scroll(function(){
    	var scrollbarLocation=$(this).scrollTop();
    	$(".nav-link").each(function(){
    		console.log($(this.hash).offset().top);
    		var sectionOffset=$(this.hash).offset().top-73;
    		if(sectionOffset <= scrollbarLocation){
    			$(this).parent().addClass('active');
    			$(this).parent().siblings().removeClass('active');
    		}
    	});
    })
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
});

