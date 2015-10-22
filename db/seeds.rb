User.create!(
  username: "sven",
  password: "svensven"
)

User.create!(
  username: "linn",
  password: "linnlinn"
)

User.create!(
  username: "mascha",
  password: "maschamascha"
)

User.create!(
  username: "guest",
  password: "guestguest"
)

Snippet.create!(
  title: "Cool Sven Function",
  body: "var function(){
    return 'Sven';
  }",
  author_id: User.all[0].id
  )

Snippet.create!(
  title: "Cool Linn Function",
  body: "var function(){
    return 'Linn';
  }",
  author_id: User.all[1].id
  )

Snippet.create!(
  title: "Cool Mascha Function",
  body: "var function(){
    return 'Mascha';
  }",
  author_id: User.all[2].id
)

Snippet.create!(
  title: "Other Sven Function",
  body: "var i = 'variable';
  var function(){
    return 'Sven other' + i;
  }",
  author_id: User.all[0].id
)


Snippet.create!(
  title: "Other Linn Function",
  body: "var i = 'variable';
  var function(){
    return 'Linn other' + i;
  }",
  author_id: User.all[1].id
)

Snippet.create!(
  title: "Other Mascha Function",
  body: "var i = 'variable';
  var function(){
    return 'Mascha other' + i;
  }",
  author_id: User.all[1].id
)
