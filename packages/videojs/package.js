Package.describe({
  summary: "Smart package for video.js."
});

Package.on_use(function (api) {
  api.use(['jquery'], 'client');
  api.add_files([
    'video.js',
    'video-js.css',
  ], 'client');
});