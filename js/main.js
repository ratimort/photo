
$(document).ready(function(){
  $(".click-on, .click-on-1").click(function(){
    $(".all").toggleClass("all-1");
    $(".top").toggleClass("all-1");
    $(".all-bl").fadeToggle(100)
    $(".menu-toggle").toggleClass("right-toggle")
  });
});
$(window).on('load', function () {
    var $preloader = $('#loading'),
        $loader   = $preloader.find('.loader');
        $body = $("body"),
        $htext = $(".header-text"),
    // $body.removeClass("body1");
    // $("header").css("border","1px solid red");
    $loader.slideUp();
    $preloader.delay(1000).slideUp(1000);
});
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();



