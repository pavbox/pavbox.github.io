const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const strictTransportSecurity = require("hsts");
const https = require("https");
const proxy = require("http-proxy")

const pavbox = 'pavbox.*';
const wayneris = 'wayneris.com';
const port = 443;

__srcpath = path.join(__dirname + './../');
__dirname = path.join(__dirname + './../../dist/');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Routes. Pavboxcom
 */

 app.get('/lera_congrats', function (req, res) {
	new fs.ReadStream(path.join(__dirname + 'lera_congrats.html')).pipe(res)
 });

 app.get('/NY22', function (req, res) {
	new fs.ReadStream(path.join(__dirname + 'NY22.html')).pipe(res)
 });

 app.get('/NY22/benzo', function (req, res) {
	new fs.ReadStream(path.join(__dirname + 'benzo.html')).pipe(res)
 });

 app.get('/', function (req, res) {
 	new fs.ReadStream(path.join(__dirname + 'index.html')).pipe(res)
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
	} catch (e) {
		console.log(e);
	} finally {
		console.log('exception is out');
	}
});

const wayapp = express()

wayapp.use(bodyParser.urlencoded({ extended: true }));
wayapp.use(bodyParser.json());

/**
 * Routes. Wayneris
 */

wayapp.get('/', function (req, res) {
	res.redirect('https://wayneris.notion.site/wayneris/Margarita-Troyanskaya-1923c935b5e3471b981845249677c463');
}); 

wayapp.get('*', function (req, res) {
	res.redirect('https://wayneris.notion.site/wayneris/Margarita-Troyanskaya-1923c935b5e3471b981845249677c463');
});

var vhost = require('vhost')
const proxyv = express()

proxyv.use(vhost(pavbox, app))
proxyv.use(vhost(wayneris, wayapp))

const options = {
  key: fs.readFileSync(path.join(__srcpath + "backend/.certs/private_key.pem")),
  cert: fs.readFileSync(path.join(__srcpath + "backend/.certs/fullchain_key.pem"))
};

https.createServer(options, proxyv).listen(443);

// secure

const insecureApp = express()

insecureApp.use(bodyParser.urlencoded({ extended: true }));
insecureApp.use(bodyParser.json());

insecureApp.get('*', function (req, res) {
	if (!req.secure) {
		res.redirect('https://' + req.hostname + req.url);
	}
});

https.createServer(insecureApp).listen(80);