var db = require("db");
db.connect();

var User = require("./user");

function run() {
	var vasya = new User("Vasya");
	var petya = new User("Petya");
	vasya.sayHello(petya);
	console.log(db.getPhrase('a'))
}


if (module.parent) {
	exports.run = run;
} else {
	run();
}