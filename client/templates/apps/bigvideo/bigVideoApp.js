Template.bigVideoApp.rendered = function() {
  var BV = new $.BigVideo();
  BV.init();
  if (Modernizr.touch) {
    BV.show('http://i.imgur.com/JaajGKM.jpg');
  } else {
    BV.show('http://video-js.zencoder.com/oceans-clip.mp4', {ambient:true});
  }
}