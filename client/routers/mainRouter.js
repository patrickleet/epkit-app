Meteor.Router.add({
  '/': 'account',
  '/:name': 'epk',
  '/:name/edit': 'editEpk'
});

Meteor.Router.filters({
//

  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'loading';
  },

  'clearErrors': function(page) {
    clearErrors();
    return page;
  },

  'setCurrentArtistIdByNameAndUserId': function(page) {

  }
});


Meteor.Router.filter('requireLogin', {except: ['404', 'epk']});
Meteor.Router.filter('clearErrors');

Meteor.Router.filter('requireUserIsCollaboratorForArtist', {only: 'editEpk'})
Meteor.Router.filter('setCurrentArtistIdByNameAndUserId', {only: ['epk', 'editEpk']})
