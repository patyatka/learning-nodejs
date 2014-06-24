var http = require("http");
var fs = require("fs");
var chat = require("./chat");
http.createServer(function(req, res){
	switch (req.url) {
		case '/':
			sendFile("chat.html", res);
			break;
		case '/subscribe':
			chat.subscribe(res);
			break;
		case '/publish':
			var body = ''; 
			req.on("data", function(chunk) {
				body += chunk;
			}).on("end", function() {
				body = JSON.parse(body);
				chat.publish(body.message);
				res.end("ok");
			});
			break;
		default:
			res.statusCode = 404;
			res.end("404");
	}
}).listen(3000);

function sendFile(fileName, res) {
	var fileStream = fs.createReadStream(fileName);
	fileStream.on('error', function(){
		res.statusCode = 500;
		res.end("Sorry, server error");
	}).pipe(res).on('close', function() {
      fileStream.destroy();
    });;

}