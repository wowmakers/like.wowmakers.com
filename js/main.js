
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

$(document).ready(function() {

  preload([
    'images/monster-still.gif',
    'images/monster-foot-tapping.gif',
    'images/monster-dancing.gif'
  ]);
  
  var beforeMusic = new buzz.sound("audio/gangnam-intro.ogg", { preload: true, autoplay: false, loop:true });
  var afterMusic  = new buzz.sound("audio/gangnam.ogg",  { preload: true, autoplay: false, loop:true });

  $(".like-wrapper").mouseenter(function(){
    beforeMusic.play().loop();
    $("#wow-monster").css("background", "center -60px url(images/monster-foot-tapping.gif)");
  }).mouseleave(function(){
    beforeMusic.pause();
    $("#wow-monster").css("background", "center -60px url(images/monster-still.gif)");
  });
  
  $(".like-inner").mouseenter(function(){
    beforeMusic.pause();
    afterMusic.play().loop();
    $("#wow-monster").css("background", "center -60px url(images/monster-dancing.gif)");
  }).mouseleave(function(){
    afterMusic.pause();
    beforeMusic.play();
    $("#wow-monster").css("background", "center -60px url(images/monster-foot-tapping.gif)");
  });

});
