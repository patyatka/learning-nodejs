var db = require('db');
var util = require('util');
var log = require('logger')(module);
var User = function(name) {
	this.name = name;
}

User.prototype.sayHello = function(who) {
	log(db.getPhrase('hello') + ", " + who.name);
}

User.prototype.saySomething = function() {
	try {
		log(db.getPhrase('nosuchphrase'));
	} catch(e) {
		console.error("Error %s\n %s\n %s\n", e.name, e.message, e.stack)
	}
}

module.exports = User;