var joeUserId,
    dostArtistId,
    bigVideoAppId;

if (Artists.find().count() === 0) {
  var users = [
    {
      name: "Joe McIntosh",
      email:"joe@dost.com",
      roles:['user']
    },
    {
      name: "Bri",
      email:"intoxicated@bri.com",
      roles:['user']}
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
      console.log(user.email + ' added.')
    }
  });

  joeUserId = Meteor.users.findOne({email: 'joe@dost.com'});

  dostArtistId = Artists.insert({
    name: 'Dost',
    owners: [joeUserId],
    members: [joeUserId]
  });
  console.log('Dost created.')
}

if (Apps.find().count() === 0) {
  bigVideoAppId = Apps.insert({
    category: 'home',
    type: 'bigVideo',
    name: 'Big Video'
  });
  console.log('Big Video App created.')
}

if (InstalledApps.find().count() === 0) {
  bigVideoApp = Apps.findOne({_id: bigVideoAppId});

  dostBigVideoApp = InstalledApps.insert({
    category: bigVideoApp.category,
    type: bigVideoApp.type,
    name: bigVideoApp.name,
    artistId: dostArtistId,
    active: false
  });

  dostImageGalleryApp  = InstalledApps.insert({
    category: bigVideoApp.category,
    type: bigVideoApp.type,
    name: bigVideoApp.name,
    artistId: dostArtistId,
    active: true
  });
  console.log('Big video app installed for dost.')
}

if (Sections.find().count() === 0) {

  Sections.insert({
    title: 'Bio',
    artistId: dostArtistId,
    articles: [
      {
        type: 'bio',
        title: 'About Dost',
        body: 'Sugar plum jujubes gingerbread I love I love donut marzipan. Halvah topping soufflé. Pastry tart candy canes cookie croissant lemon drops tart. Jujubes croissant tart sweet roll lollipop gingerbread candy canes. I love marshmallow chupa chups lollipop dessert unerdwear.com apple pie sweet roll. Candy canes marzipan sweet jujubes applicake. Candy canes brownie chocolate cake jujubes I love I love. Halvah tart macaroon donut halvah.'
      }
    ]
  });

  Sections.insert({
    title: 'Shows',
    artistId: dostArtistId,
    articles: [
      {
        type: 'show',
        venue: 'Middle East',
        location: {
          "city": "Boston",
          "state": "MA"
        },
        body: 'Sugar plum jujubes gingerbread I love I love donut marzipan. Halvah topping soufflé. Pastry tart candy canes cookie croissant lemon drops tart. Jujubes croissant tart sweet roll lollipop gingerbread candy canes. I love marshmallow chupa chups lollipop dessert unerdwear.com apple pie sweet roll. Candy canes marzipan sweet jujubes applicake. Candy canes brownie chocolate cake jujubes I love I love. Halvah tart macaroon donut halvah.',
        draw: 120
      },
      {
        type: 'show',
        venue: 'The Bitter End',
        location: {
          city: 'New York City',
          state: 'New York'
        },
        body: 'Sugar plum jujubes gingerbread I love I love donut marzipan. Halvah topping soufflé. Pastry tart candy canes cookie croissant lemon drops tart. Jujubes croissant tart sweet roll lollipop gingerbread candy canes. I love marshmallow chupa chups lollipop dessert unerdwear.com apple pie sweet roll. Candy canes marzipan sweet jujubes applicake. Candy canes brownie chocolate cake jujubes I love I love. Halvah tart macaroon donut halvah.',
        draw: 120
      }
    ]
  });

}

