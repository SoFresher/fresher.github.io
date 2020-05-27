$(function () {
  // Initializing easeScroll for smoth scrolling
  $("html").easeScroll();

  $(".navbar-toggler").on("click", function () {
    $(".navbar-fixed-top").toggleClass("scrolled");
  });

  // fixed-navbar when scrolled
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("scrolled");
    } else {
      $(".navbar-fixed-top").removeClass("scrolled");
    }

    if (!$("nav.navbar").hasClass("scrolled")) {
      $(".navbar-collapse").collapse("hide");
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

  // border-radius mouse hover effect
  $(".featured-icon-box, .contact-box").hover(
    function () {
      $(this).find(".icon-shape").css("border-radius", "50px");
    },
    function () {
      $(this).find(".icon-shape").css("border-radius", ".25rem");
    }
  );

  // Page scroll navigation on click
  $("a.page-scroll").click(function (event) {
    var anchor = $(this);
    anchor.parent().addClass("active");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 80,
        },
        900,
        "easeInOutExpo"
      );
    $(".navbar-collapse").collapse("hide");
    $(".sidebar").collapse("hide");
    event.preventDefault();
  });

  // Scroll to Top nav
  $("body").append('<div id="toTop"><i class="fa fa-chevron-up"></i></div>');

  $(window).on("scroll", function (e) {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Preloader
  //   $(window).on("load", function() {
  //     if ($("#preloader").length) {
  //       $("#preloader")
  //         .delay(50)
  //         .fadeOut("slow", function() {
  //           $(this).remove();
  //         });
  //     }
  //   });

  //
  $(document).on("scroll", function onScroll() {
    var scrollPos = $(document).scrollTop();
    $("#navbarTogglerDemo02 a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("#navbarTogglerDemo02 ul li a").parent().removeClass("active");
        currLink.parent().addClass("active");
      } else {
        currLink.parent().removeClass("active");
      }
    });

    $("#mySidenav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("mySidenav ul li a").parent().removeClass("active");
        currLink.parent().addClass("active");
      } else {
        currLink.parent().removeClass("active");
      }
    });
  });

  // Overlay on hover
  $(".single-project").hover(
    function () {
      $(this).find(".overlay").toggleClass("flipped");
      $(this).find("h3").slideDown("slow");
      $(this).find(".slide-left").slideDown("slow");
      $(this).find(".slide-right").slideDown("slow");
    },
    function () {
      $(this).find(".overlay").toggleClass("flipped");
      $(this).find("h3").slideUp("slow");
      $(this).find(".slide-left").slideUp("fast");
      $(this).find(".slide-right").slideUp("fast");
    }
  );

  $(document)
    .bind("ajaxStart", function () {
      $(".submit-btn").hide();
      $(".ajax-loader").show();
    })
    .bind("ajaxStop", function () {
      $(".ajax-loader").hide();
      $(".submit-btn").show();
    });

  $(".tab-nav-item .tab-link").click(function (e) {
    var t = $(this).attr("data-target");

    $(this).parent().addClass("nav-tab-active");
    $(this).parent().siblings().removeClass("nav-tab-active");

    $(".tab-nav-content-item").hide();
    $("#" + t).fadeIn(2000);
    e.preventDefault();
  });

  $(".tab-nav-content-item").each(function () {
    var container = $(this).find(".image-popup");
    container.magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  $("#formMessage .close").on("click", function () {
    $(this).parent().fadeOut("1000").removeClass("show");
  });
  setTimeout(function () {
    $("this").fadeOut("fast").removeClass("show");
  }, 400);

  var type = document.getElementById("typewrite");

  var typewriter = new Typewriter(type, {
    loop: true,
  });

  typewriter
    .typeString("A Freelance Full-Stack Developer")
    .pauseFor(1000)
    .deleteChars(30)
    .typeString("Computer Science Student")
    .pauseFor(000)
    .deleteAll()
    .typeString("Great to have you here!")
    .pauseFor(3000)
    .start();

  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $(".navbar-toggler").click(function (e) {
    e.stopPropagation();
    sidebar = $("#mySidenav");
    sidebar.toggleClass("sidebar-show");
    $(this).toggleClass("collapsed");
  });

  $("#mySidenav").click(function (e) {
    e.stopPropagation();
  });

  $("html,body").click(function () {
    sidebar.removeClass("sidebar-show");
  });
});
