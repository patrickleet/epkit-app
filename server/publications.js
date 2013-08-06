Meteor.publish('sections', function() {
  return Sections.find();
});

Meteor.publish('apps', function() {
  return Apps.find();
});

Meteor.publish('artists', function() {
  return Artists.find();
});