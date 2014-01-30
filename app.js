var express = require('express'),
	app = express(),
	server = require('http').createServer(app);


server.listen(process.env.PORT || 3000);


app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
})