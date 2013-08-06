var dostArtistId;

if (Artists.find().count() === 0) {
  dostArtistId = Artists.insert({
    name: 'Dost',
    members: [

    ]
  });
}

if (Apps.find().count() === 0) {
  Apps.insert({
    category: 'home',
    type: 'bigVideo',
    name: 'Big Video'
  });
}

if (Sections.find().count() === 0) {

  Sections.insert({
    title: 'Bio',
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

