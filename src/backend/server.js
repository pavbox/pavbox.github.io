const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const strictTransportSecurity = require("hsts");
const https = require("https");

const hostname = 'pavbox.com';
const port = 443;

__srcpath = path.join(__dirname + './../');
__dirname = path.join(__dirname + './../../dist/');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  key: fs.readFileSync(path.join(__srcpath + "backend/.certs/private_key.pem")),
  cert: fs.readFileSync(path.join(__srcpath + "backend/.certs/fullchain_key.pem"))
};

/**
 * Routes.
 */

 app.get('/', function (req, res) {
 	new fs.ReadStream(path.join(__dirname + 'index.html')).pipe(res)
 });

 app.get('/lera_congrats', function (req, res) {
	new fs.ReadStream(path.join(__dirname + 'lera_congrats.html')).pipe(res)
});

app.get('*', function (req, res) {
	let isCSS = (req.url.indexOf('.css') > 0)
	let isJS = (req.url.indexOf('.js') > 0)
	let isSVG = (req.url.indexOf('.svg') > 0)

	if (isCSS) {
	 res.setHeader('Content-Type', 'text/css');
	} else if (isJS) {
	 res.setHeader('Content-Type', 'text/javascript');
        } else if (isSVG) {
	 res.setHeader('Content-Type', 'text/xml');
	}

	try {
		let filePath = path.join(__dirname + req.url)
		if (fs.existsSync(filePath)) {
			new fs.ReadStream(filePath).pipe(res)
		} else {
			res.redirect('/')
		}
		console.log("url: " + filePath);
	} catch (e) {
		console.log(e);
	} finally {
		console.log('exception is out');
	}
});

https.createServer(options, app).listen(443);

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
