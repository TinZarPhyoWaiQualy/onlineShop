// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

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
    const $icon =$(".search-icon");
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
});
