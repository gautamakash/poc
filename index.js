var express = require('express');

var app = express();

app.get('/', function(req, res){
	console.log(req.query);
	res.status(200).json(req.query);
});

app.listen(process.env.PORT, process.env.IP);
