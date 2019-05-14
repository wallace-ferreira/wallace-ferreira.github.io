
$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
});