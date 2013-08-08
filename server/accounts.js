if (Meteor.users.find().count() == 0) {
  var users = [
    {
      name: "Patrick Scott",
      email:"patrick.lee.scott@gmail.com",
      roles:['admin']
    },
    {
      name: "Krish Jargidar",
      email:"krishjargidar@gmail.com",
      roles:['admin']}
  ];

  _.each(users, function (user) {
    var id;

    //createUserAdminRoles();

    id = Accounts.createUser({
      email: user.email,
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
      if (user.roles.indexOf('admin') >= 0) {
        console.log(user.email + ' added as admin.')
        Accounts.sendEnrollmentEmail(id, user.email)
      }
    }


  });
}