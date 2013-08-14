Template.signUp.events({
  'submit form': function(e, tmpl) {
    var user, form;
    e.preventDefault();
    form = e.currentTarget;
    user = parseForm(form);

    Meteor.call('signUp', user, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Session.set("signUpState", 'signed-up');
      }
    });

  }
})