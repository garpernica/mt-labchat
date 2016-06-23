
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var port = process.env.PORT || 3000;


app.get('/', function(req, res){
	res.sendFile(path.resolve('index.html'));
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log(msg);
	});
});

http.listen(port,function(){
	console.log('Server listening at port %d', port);
});
