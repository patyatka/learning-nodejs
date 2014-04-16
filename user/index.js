var db = require('db');
var log = require('logger')(module);
var User = function(name) {
	this.name = name;
}

User.prototype.sayHello = function(who) {
	log(db.getPhrase('hello') + ", " + who.name);
}

module.exports = User;