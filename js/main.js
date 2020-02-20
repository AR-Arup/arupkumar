/*  PRELOADER */
$(window).on("load", function () {
    $("#status").fadeOut(), $("#preloader").delay(350).fadeOut(500)
});

/* NAV SCROLL DOWN */
$(function () {
    function a() {
        $(window).scrollTop() > 50 ? ($("nav").addClass("white-nav-top"), $(".navbar-brand img").attr("src", "img/logo/logo-dark.png"), $("#back-to-top").fadeIn()) : ($("nav").removeClass("white-nav-top"), $(".navbar-brand img").attr("src", "img/logo/logo.png"), $("#back-to-top").fadeOut())
    }
    a(), $(window).scroll(function () {
        a()
    })
});

/* ACCORDION */
$(document).ready(function(){
    $('.acc').accordion();
});

 // MIXITUP JS
$(document).ready(function(){
    var mixer = mixitup('.portfolio-gallery');
});

$( function() {
    $( "#tabs" ).tabs();
  } );