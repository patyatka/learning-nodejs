var Err = require('./error');
var db = require("db");
var EE = require('events').EventEmitter;
db.connect();
var ee = new EE();

var fs = require("fs");

var url = require('url');

var server = new require('http').Server(function(req, res){
	var parsedUrl = url.parse(req.url, true);
	if (parsedUrl.query.mes == '123') {
		res.statusCode = 200;
		res.setHeader('Cache-control', 'no-cache');
		console.log(parsedUrl);
		res.end(parsedUrl.query.mes + 'I was made it');
	} else if (parsedUrl.query.mes == 'fsAsync') {
		fs.readFile('app.js', function(err, data){
			res.end(data);
		});
	} else if (parsedUrl.query.mes == 'fsSync') {
		var file = fs.readFileSync('app.js');
		res.end(file);
	} else if (parsedUrl.query.mes == 'runTimeout') {
		var i = 0;
		setTimeout(function(){
			process.exit();
		},5000);
		setInterval(function(){
			res.end(JSON.stringify(process.memoryUsage()) + i++);
		}, 500);
		process.nextTick(function(){
			res.end('nextTick!');
		});
	} else {
		res.statusCode = 4458522;
		res.end("Nema query!");
	}
});


function run() {
	server.listen(1337, '127.0.0.1');
}


var User = require("./user");

function learnModulesErrorEventEmitter() {
	var vasya = new User("Vasya");
	var petya = new User("Petya");
	vasya.sayHello(petya);
	console.log(db.getPhrase('a'));
	vasya.saySomething();
	ee.emit('evvvveent', 'Im event EVVVEENT!! YE!');
	ee.emit('error', new Err());

	ee.on('evvvveent', function(ev){
		console.log("Event evvveent was fired!");
		console.log(ev);
	});

	ee.on('error', function(err){
		console.log("Name of error is" + err.name);
	})

}


if (module.parent) {
	exports.run = run;
} else {
	run();
}