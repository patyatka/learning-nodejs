var Err = require('./error');
var db = require("db");
var EE = require('events').EventEmitter;
db.connect();
var ee = new EE();

var User = require("./user");

function run() {
/*	var vasya = new User("Vasya");
	var petya = new User("Petya");
	vasya.sayHello(petya);
	console.log(db.getPhrase('a'));
	vasya.saySomething();*/
	ee.emit('evvvveent', 'Im event EVVVEENT!! YE!');
	ee.emit('error', new Err());
}

ee.on('evvvveent', function(ev){
	console.log("Event evvveent was fired!");
	console.log(ev);
});

ee.on('error', function(err){
	console.log("Name of error is" + err.name);
})


if (module.parent) {
	exports.run = run;
} else {
	run();
}