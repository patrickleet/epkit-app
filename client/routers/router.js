Meteor.Router.beforeRouting = function() {
  console.log('// Before Routing //')
  // reset all session variables that might be set by the previous route

  $('body').css('min-height','0');

}

var user = function() {
  Session.set('currentUserId', Meteor.userId);
  return 'user';
};

var epk = function(name) {
  console.log("Set to " + name + "'s EPK Mode");
  Session.set('epkMode', true);
  Session.set('artistName', name);
  return 'epk'
}

Meteor.Router.add({
  '/': user,
  '/:name': epk,
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
      return 'login';
  },

  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});


Meteor.Router.filter('requireLogin', {except: ['404', 'epk']});
Meteor.Router.filter('clearErrors');

Meteor.Router.filter('requireUserIsCollaboratorForArtist', {only: 'editEpk'})