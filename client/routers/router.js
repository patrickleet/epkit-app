var user = function() {
  Session.set('currentUserId', Meteor.userId);
  return 'user';
};

var epk = function(name) {
  Session.set('artistName', name);
  return 'epk'
}

var editEpk = function(name) {
  Session.set('artistName', name);
  Session.set('editMode', true);
}

Meteor.Router.add({
  '/': user,
  '/:name': {as: 'epk', to: epk},
  '/:name/edit': {as: 'editEpk', to: editEpk}
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'login';
  },

  'clearErrors': function(page) {
    clearErrors();
    return page;
  },

  setEpkMode: function(page) {
    Session.set('epkMode', page === 'epk' ? true : false);
    return page;
  }
});

Meteor.Router.filter('requireLogin', {except: ['404', 'epk']});
Meteor.Router.filter('clearErrors');
Meteor.Router.filter('setEpkMode');
Meteor.Router.filter('requireUserIsCollaboratorForArtist', {only: 'editEpk'})

