Meteor.subscribe('artists');

Meteor.subscribe('sections');

Meteor.subscribe('apps');
Meteor.subscribe('installed-apps', function() {
  // get home app
  var homeApp = InstalledApps.findOne({
    category: 'home'
  });

  Session.set('homeApp', homeApp.type);
//  Session.set('homeApp', 'imageSlideshow');
});

