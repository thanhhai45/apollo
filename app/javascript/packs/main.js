$(document).ready(function () {
  // READ MORE PROJECT
  $(".project-modal__read-more").click(function () {
    var content = $(".project-modal__content");
    var locale = $(this).attr("data-content");
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
      $(this).text("Rút gọn");
    } else {
      $(this).siblings(".service-page__description").css({
        height: 150,
        overflow: "hidden",
      });
      $(this).text("Đọc thêm");
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
    var locale = $(this).attr("data-content");
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
  $(".procedure__carousel--mobile .item-header").click(function () {
    $(".procedure__carousel--mobile .item").removeClass("open");
    $(this).parents(".item").toggleClass("open");
    $(".procedure__carousel--mobile").css("height", $(".procedure__carousel--mobile .list").outerHeight());
  });;
});
