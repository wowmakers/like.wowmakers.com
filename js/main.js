
function preload(arrayOfImages) {
  $(arrayOfImages).each(function() {
    $('<img/>')[0].src = this;
  });
}

$(document).ready(function() {
  preload([
    'images/monster-still.gif',
    'images/monster-foot-tapping.gif',
    'images/monster-dancing.gif'
  ]);

  $("#wow-monster,.like-wrapper").mouseenter(startFootTapping).mouseleave(stopFootTapping);
  $(".button-click a").click(startDancing);
});

isLiked = false;

var beforeMusic = new buzz.sound("audio/gangnam-intro.ogg", { preload: true, autoplay: false, loop:true });
var afterMusic  = new buzz.sound("audio/gangnam.ogg",  { preload: true, autoplay: false, loop:true });

startFootTapping = function() {
  if(!isLiked) {
    beforeMusic.play().loop();
    $("#wow-monster").css("background", "center -60px url(images/monster-foot-tapping.gif)");
  }
}

stopFootTapping = function() {
  if(!isLiked) {
    beforeMusic.pause();
    $("#wow-monster").css("background", "center -60px url(images/monster-still.gif)");
  }
}

startDancing = function() {
  isLiked = true;
  beforeMusic.pause();
  afterMusic.play().loop();
  $("#wow-monster").css("background", "center -60px url(images/monster-dancing.gif)");
}
