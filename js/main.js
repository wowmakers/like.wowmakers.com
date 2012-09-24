
$(document).ready(function() {
  
  var bgSound = new buzz.sound("audio/test.mp3", { preload: true, autoplay: false, loop:true });

  $(".like-wrapper").mouseenter(function(){
    $("#wow-monster").css("background", "center center url(images/monster-foot-tapping.gif)");
  }).mouseleave(function(){
    $("#wow-monster").css("background", "center center url(images/monster-still.gif)");
  });
  
  $(".like-inner").mouseenter(function(){
    bgSound.play().loop();
    $("#wow-monster").css("background", "center center url(images/monster-dancing.gif)");
  }).mouseleave(function(){
    bgSound.pause();
    $("#wow-monster").css("background", "center center url(images/monster-foot-tapping.gif)");
  });

});
