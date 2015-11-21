var express = required('express');

var app = express();

app.get('/', function(req, res){
	res.status(200).send("My First Micro Service.");
});

app.listen(8080);
