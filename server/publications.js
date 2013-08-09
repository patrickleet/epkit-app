Meteor.publish('sections', function() {
  return Sections.find();
});

Meteor.publish('apps', function() {
  return Apps.find();
});

Meteor.publish('installed-apps', function() {
  return InstalledApps.find();
})

Meteor.publish('artists', function() {
  return Artists.find();
});