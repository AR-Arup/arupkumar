/*  ################### 
        Preloader
    ###################  */

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut(500);
});



/*  ################### 
TEAM jQuery owl Carousel
    ###################  */

$("document").ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>']
    });
});


/*  ######################
     !   Happy Client
    ###################### */

$("document").ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>']
    });
});


/*  ############################### 
      ? ((NAVIGATION BAR
  * Show & Hide White Navigation
    ###############################  */
$(function () {
     showHideNav();
    $(window).scroll(function () {
       // ! Show/hide nav on page loade
        showHideNav();    
    });
    function showHideNav () {
        
        if ($(window).scrollTop() > 50) {
            // ! show white nav
           
            $("nav").addClass("white-nav-top");
            // ! Show Dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // ! Show Back To right Button
            $("#back-to-top").fadeIn();
        }      
        else {
            //! Hide white nav
            $("nav").removeClass("white-nav-top");
            // ! Show Normal Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // ! Hide Back To right Button
            $("#back-to-top").fadeOut();
        }
    }
});


/*  ############################### 
      ? ((...PORTFOLIO...))
  
    ###############################  */

   $(document).ready(function (){
    var mixer = mixitup('.portfolio-gallery');
   });



   /*  ###################
        ? ANIMATE WOW JS
        ##################
   */

   $(document).ready(function (){
    new WOW().init();
   });