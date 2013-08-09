Template.homeSection.helpers({
  currentArtist: function() {
    return Artists.findOne(Session.get('currentArtistId'));
  }
});