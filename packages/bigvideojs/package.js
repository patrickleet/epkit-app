Package.describe({
  summary: "Smart package for bigvideo.js. This plugin makes it easy to add fit-to-fill background video to websites. It can play silent ambient background video (or series of videos). Or use it as a player to show video playlist. BigVideo.js can also show big background images, which is nice to have for showing big background images for devices that don’t have autoplay for ambient video."
});

Package.on_use(function (api) {
  api.use(['jquery', 'jquery-ui', 'jquery-imagesloaded', 'videojs'], 'client');
  api.add_files([
    'bigvideo.js',
    'bigvideo.css'
  ], 'client');
});