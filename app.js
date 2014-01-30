var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	questions = require(__dirname + '/JeopardyQuestions2012.json');


server.listen(process.env.PORT || 3000);


app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});


// return a random question
app.get('/question', function(req, res) {
	res.json(questions[randomQuestion(0,questions.length)]);
});



function randomQuestion(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}