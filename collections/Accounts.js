Meteor.methods({
  signUp: function (user) {
    if (this.isSimulation) {
      Session.set("signUpState", 'signed-up');
      return;
    }

    check(user);

    var roles = ['lead'];

    var id = Accounts.createUser({
      email: user.email,
      profile: { name: user.email },
      roles: roles
    });

    if (roles.length > 0) {
      Roles.addUsersToRoles(id, roles);
    }

    console.log("user " + id + " added to leads");
    //Accounts.sendEnrollmentEmail(id, user.email)
    return id;
  }
});