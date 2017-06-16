// var http = require('http');
// var fs = require('fs');
// var html = fs.readFileSync('./index.html');

// http.createServer(function(req, res) {
// 	if (req.url === '/') {
// 		res.end(html);
// 		return;
// 	} else if (req.url === '/favicon.ico') {
// 		return;
// 	} else {
// 		res.end(fs.readFileSync('.' + req.url));
// 	}
// }).listen(3012)

// express版
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.resolve(__dirname, 'assets')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen('3012')