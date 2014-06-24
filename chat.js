var clients = [];

exports.subscribe = function(res) {
	clients.push(res);
};

exports.publish = function(message) {
	clients.forEach(function(res){
		res.end(message);
	});
	clients = [];
}