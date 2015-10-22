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
  title: "Is number big?",
  body: "// Demo function written by sven

var x = 3
big = (x > 10) ? 'greater than 10' :
	(x < 5) ? 'less than 5' :
	'between 5 and 10';

(big); //'less than 5'",
  author_id: User.all[0].id
  )

Snippet.create!(
  title: "Cool Sven Function",
  body: "var msg = function(){
    return 'Hello Sven';
  }
  msg();",
  author_id: User.all[1].id
)

Snippet.create!(
  title: "Cool Linn Function",
  body: "var msg = function(){
    return 'Hello Linn';
  }
  msg();",
  author_id: User.all[1].id
  )

Snippet.create!(
  title: "Cool Mascha Function",
  body: "var msg = function(){
    return 'Hello Mascha';
  }
  msg();",
  author_id: User.all[2].id
)

Snippet.create!(
  title: "Other Sven Function",
  body: "var i = 'function';
  var other = function(){
    return 'Sven other ' + i;
  };
  other(i);",

  author_id: User.all[0].id
)


Snippet.create!(
  title: "Other Linn Function",
  body: "var i = 'function';
  var other = function(){
    return 'Linn other ' + i;
  };
  other(i);",
  author_id: User.all[1].id
)

Snippet.create!(
  title: "Other Mascha Function",
  body: "var i = 'function';
  var other = function(){
    return 'Mascha other ' + i;
  };
  other(i);",
  author_id: User.all[1].id
)

Snippet.create!(
  title: "Very Long Function",
  body: "// long code
writeln(1);
writeln(2);
writeln(3);
writeln(4);
writeln(5);
writeln(6);
writeln(7);
writeln(8);
writeln(9);
writeln(10);",
  author_id: User.all[0].id
)


Snippet.create!(
  title: "Very Long Function",
  body: "// shorter code
  for(i = 0; i < 10; i++) {
    writeln(i);
  };",
  author_id: User.all[0].id
)
