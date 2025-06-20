// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  
});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
  //start hamburger menu
  $(document).ready(function () {
    const $hamburger = $("#hamburger");
    const $menu = $(".menu");
    const $icon = $(".search-icon");
    const $body = $("body");

    $hamburger.on("click", function () {
      $(this).toggleClass("active");
      $menu.toggleClass("show");
      $icon.toggleClass("show");

      if ($(this).hasClass("active")) {
        $body.addClass("hidden");
      } else {
        $body.removeClass("hidden");
      }
    });
  });
  //end hambuger menu

  //for advertisement slider start
  $(".advertisement").slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed:3000,
    cssEase:"linear",
    arrows: false,
    appendDots: "#dot-container",
    draggable: true,
    initialSlide: 2,
    variableWidth: true,
  });

 
  //for advertisement slider end

  //for testimonals slider start
  $(".testimonal").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: "100px",
        focusOnSelect: true,
        autoplay: true ,
        autoplaySpeed: 2000,
        arrows: false,
        draggable: true,
        variableWidth: true,
      });
  //for testimonals slider end
  

  //for back to top btn start

$(document).ready(function () {
  
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 200); 
  });
});
 
    //for back to top btn end
});
 



    