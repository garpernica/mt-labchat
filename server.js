
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


app.get('/', function(req, res){
	res.sendFile(path.resolve('index.html'));
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log(msg);
	});
});

http.listen(3000,function(){
	console.log('listening on *:3000');
});
