$(document).ready(function () {
  var feedbackCarouselIndex = 1;
  var initialLengthFeedbackCarousel = $('.feedback-customer__slider').children().length;
  $(".feedback-customer__prev").addClass("disabled");
  var locale = $("body").attr("data-content");
  // READ MORE PROJECT
  $(".project-modal__read-more").click(function () {
    var content = $(".project-modal__content");
    
    if (content.css("overflow") === "hidden") {
      content.css({
        height: "auto",
        overflow: "auto",
      });
      var text = locale == 'en' ? 'Less' : 'Rút gọn'
      $(this).text(text);
    } else {
      content.css({
        height: 100,
        overflow: "hidden",
      });
      var text = locale == 'en' ? 'Read more' : 'Đọc thêm'
      $(this).text(text);
    }
  });

  // CLOSE PROJECT POPUP
  $(".project-modal .modal-close").click(function () {
    var id = $(this).attr("data-id")
    $("#project-modal-"+id).removeClass("is-active");
  });
  $(document).click((e) => {
    var id = $(".project-modal.is-active .modal-close").attr("data-id")
    var isOutsideCard = $.contains($("#project-modal-"+id).get(0), e.target) && !$.contains($("#project-modal-"+id+" .modal-card").get(0), e.target);
    if (isOutsideCard && $("#project-modal-"+id).hasClass("is-active")) {
      $("#project-modal-"+id).removeClass("is-active");
    }
  }); 

  // OPEN PROJECT POPUP
  $(".project__card").click(function () {
    var id = $(this).attr("data-id")
    $("#project-modal-"+id).addClass("is-active");
  });

  // READ MORE SERVICE PAGE
  $(".service-page__read").click(function () {
    
    if (
      $(this).siblings(".service-page__description").css("overflow") ===
      "hidden"
    ) {
      $(this).siblings(".service-page__description").css({
        height: "auto",
        overflow: "auto",
      });
      var text = locale == 'en' ? 'Less' : 'Rút gọn'
      $(this).text(text);
    } else {
      $(this).siblings(".service-page__description").css({
        height: 150,
        overflow: "hidden",
      });
      var text = locale == 'en' ? 'Read more' : 'Đọc thêm'
      $(this).text(text);
    }
  });

  // READ MORE SERVICE PAGE
  $(".service-page__read").click(function () {
    if (
      $(this).siblings(".service-page__description").css("display") ===
      "none"
    ) {
      $(this).siblings(".service-page__description").css({
        display: "block",
      });
      $(this).siblings(".service-page__preview").css({
        display: "none",
      });
      var text = locale == 'en' ? 'Less' : 'Rút gọn'
      $(this).text(text);
    } else {
      $(this).siblings(".service-page__description").css({
        display: "none",
      });
      $(this).siblings(".service-page__preview").css({
        display: "block",
      });
      var text = locale == 'en' ? 'Read more' : 'Đọc thêm'
      $(this).text(text);
    }
  });

  // PROCEDURE CAROUSEL CHANGE STEP
  $(".procedure__nav-item").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var eleClass = $(this).attr("class");
    var selectedNum = "";
    eleClass.split(" ").forEach(function (className) {
      if (className.includes("procedure__nav-item--")) {
        selectedNum = className.replace("procedure__nav-item--", "");
      }
    });
    var item = $(".procedure__item--" + selectedNum);
    item.css("visibility", "visible");
    item.siblings().css("visibility", "hidden");
  });

  
  // PROCEDURE CAROUSEL ARROW DOWN CLICK
  $(".procedure__arrow-down").click(function () {
    const lastElement = $(
      ".procedure__nav-item--" + $(".procedure__nav-list").children().length
    );
    var elementTop = lastElement.offset().top;
    var elementBottom = elementTop + lastElement.outerHeight();

    var viewportTop = $(".procedure__nav").offset().top;
    var viewportBottom = viewportTop + $(".procedure__nav").outerHeight() - 55;

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      $(".procedure__arrow-down").css({
        opacity: 0.5,
        cursor: "auto",
      });
    } else {
      var currentTop = Number(
        $(".procedure__nav-list").css("top").replace("px", "")
      );
      $(".procedure__nav-list").css("top", currentTop - 85);
      $(".procedure__arrow-up").css({
        opacity: 1,
        cursor: "pointer",
      });
    }

    var currentNavItem = $(".procedure__nav-item.active");
    var eleClass = currentNavItem.attr("class");
    var selectedNum = "";
    eleClass.split(" ").forEach(function (className) {
      if (className.includes("procedure__nav-item--")) {
        selectedNum = Number(className.replace("procedure__nav-item--", "")) ;
      }
    });
    if (selectedNum < $(".procedure__nav-list").children().length) {
      currentNavItem.removeClass("active");
      var nextItemNum = selectedNum + 1;
      $(".procedure__nav-item--" + nextItemNum).addClass("active");
      var item = $(".procedure__item--" + nextItemNum);
      item.css("visibility", "visible");
      item.siblings().css("visibility", "hidden");
    }
  });

  // PROCEDURE CAROUSEL ARROW UP CLICK
  $(".procedure__arrow-up").click(function () {
    var currentTop = Number(
      $(".procedure__nav-list").css("top").replace("px", "")
    );
    if (currentTop <= -85) {
      $(".procedure__nav-list").css("top", currentTop + 85);
      $(".procedure__arrow-down").css({
        opacity: 1,
        cursor: "pointer",
      });
    } else {
      $(".procedure__nav-list").css("top", 0);
      $(".procedure__arrow-up").css({
        opacity: 0.5,
        cursor: "auto",
      });
    }

    var currentNavItem = $(".procedure__nav-item.active");
    var eleClass = currentNavItem.attr("class");
    var selectedNum = "";
    eleClass.split(" ").forEach(function (className) {
      if (className.includes("procedure__nav-item--")) {
        selectedNum = Number(className.replace("procedure__nav-item--", "")) ;
      }
    });
    if (selectedNum > 1) {
      currentNavItem.removeClass("active");
      var nextItemNum = selectedNum - 1;
      $(".procedure__nav-item--" + nextItemNum).addClass("active");
      var item = $(".procedure__item--" + nextItemNum);
      item.css("visibility", "visible");
      item.siblings().css("visibility", "hidden");
    }
  });


  // READ MORE ABOUT PAGE - FOUNDER
  $(".about-page__read-more").click(function () {
    
    if ($(this).siblings(".story").css("overflow") === "hidden") {
      $(this).siblings(".story").css({
        "max-height": "calc(100% - 200px)",
        overflow: "auto",
      });
      var text = locale == 'en' ? 'Less' : 'Rút gọn'
      $(this).text(text);
    } else {
      $(this).siblings(".story").css({
        "max-height": 350,
        overflow: "hidden",
      });
      var text = locale == 'en' ? 'Read more' : 'Đọc thêm'
      $(this).text(text);
    }
  });

  // OPEN/COLLAPSE RECRUIT PAGE - JOB ITEM
  $(".recruit-page__job-header").click(function () {
    if (!$(this).attr("class").includes("open")) {
      $(this).closest(".recruit-page__job-item").addClass("open");
    }
  });
  $(".recruit-page__collapse").click(function () {
    $(this).closest(".recruit-page__job-item").removeClass("open");
  });

  // MOBILE NAVBAR
  $(".navbar-burger").click(function () {
    if (!$(this).attr("class").includes("is-active")) {
      $(".navbar-brand .navbar-item").css("display", "none");
      $(this).css("top", "30px");
    } else {
      $(".navbar-brand .navbar-item").css("display", "flex");
      $(this).css("top", "50%");
    }
    $(this).toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  $(".navbar-company .navbar-link").click(function () {
    $(".navbar-company").toggleClass("is-active");
  });
  $(".navbar-lang .navbar-link").click(function () {
    $(".navbar-lang").toggleClass("is-active");
  });

  // MOBILE PROCEDURE COLLAPSE
  $(".procedure__carousel--mobile").css("height", $(".procedure__carousel--mobile .list").outerHeight());
  $(".procedure__carousel--mobile .item-header .procedure-icon").click(function () {
    $(".procedure__carousel--mobile .item").removeClass("open");
    $(this).parents(".item").toggleClass("open");
    $(".procedure__carousel--mobile").css("height", $(".procedure__carousel--mobile .list").outerHeight());
  });

  /* FEEDBACK CUSTOMER SLIDER
   * https://kenwheeler.github.io/slick/
   */
  $(".feedback-customer .slide-arrow").click(function () {
    const isNext = $(this).data("toggle") === "next";

    var carousel = $('.feedback-customer__slider');

    var carouselWidth = $('.feedback-customer__slide').width();

    var items = carousel.children();

    var offset;
    if (isNext) {
      offset = -(feedbackCarouselIndex * carouselWidth);
      for (var i = 0; i < items.length; i++) {
        var item = items.get(i);
        $(item).css({
          'left': offset + 'px'
        });
      }
      feedbackCarouselIndex += 1;

      $(".feedback-customer__prev").removeClass("disabled");
      if (feedbackCarouselIndex === initialLengthFeedbackCarousel) {
        $(this).addClass("disabled");
      }
    } else {
      for (var i = 0; i < items.length; i++) {
        var item = items.get(i);
        offset = Number($(item).css("left").replace("px", "")) + carouselWidth;
        $(item).css({
          'left': offset + 'px'
        });
      }
      feedbackCarouselIndex -= 1;

      $(".feedback-customer__next").removeClass("disabled");
      if (feedbackCarouselIndex === 1) {
        $(this).addClass("disabled");
      }
    }
  });
  // MOBILE SERVICE SECTION IN HOME PAGE
  setServiceHeight();
  $(window).on("resize", function () {
    setServiceHeight();
  });

  function setServiceHeight() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 768) {
      var serviceWrapper = $(".home .service .service__wrapper");
      $(".home .service").css("height", serviceWrapper.outerHeight());
    } else {
      $(".home .service").css("height", 600);
    }
  }

  

  $(document).on("click", "#submit", function (e) {
    return checkform()
  });
  
});

function checkform() {
  var name = $("#name").val()
  var email = $("#email").val()
  var message = $("#message").val();
  var validationFailed = true
  if (name.length === 0) {
    $("span#name_field").css({ "display": "block" })
    validationFailed = false
  } else {
    $("span#name_field").css({ "display": "none" })
  }
  if (email.length === 0) {
    $("span#email_field").css({ "display": "block" })
    validationFailed = false
  } else {
    $("span#email_field").css({ "display": "none" })
  }
  if (message.length === 0) {
    $("span#message_field").css({ "display": "block" })
    validationFailed = false
  } else {
    $("span#message_field").css({ "display": "none" })
  }
  if (name.length > 0 && email.length > 0 && message.length > 0) {
    validationFailed = true
    $("span#email_field").css({ "display": "none" })
    $("span#name_field").css({ "display": "none" })
    $("span#message_field").css({ "display": "none" })
  }
  return validationFailed
}
