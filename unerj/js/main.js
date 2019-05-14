$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
});

/* ANIMAÇÃO SCROLL*/ 
$(window).scroll(function() {
  var windowtop = $(this).scrollTop();
  $('.anime').each(function(){
    if(windowtop > $(this).offset().top - 550) {
      $(this).addClass('animar')
    } else {
      $(this).removeClass('animar'); 
    }
  });
});
