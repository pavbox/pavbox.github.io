const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const hostname = 'pavbox.com';
const port = 80;

__rootpath = path.join(__dirname + './../');
__dirname = path.join(__dirname + './../public/');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Routes.
 */

 app.get('/', function (req, res) {
 	new fs.ReadStream(path.join(__dirname + 'index.html')).pipe(res)
 });

app.get('*', function (req, res) {
	let isCSS = (req.url.indexOf('.css') > 0)
	let isJS = (req.url.indexOf('.js') > 0)

	if (isCSS) {
	 res.setHeader('Content-Type', 'text/css');
	} else if (isJS) {
	 res.setHeader('Content-Type', 'text/javascript');
	} else {
	 res.setHeader('Content-Type', 'text/html');
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

app.listen(port, () => {
  console.log('-----------------------------------------');
  console.log('-      Serving pavbox.com website.      -');
  console.log('-----------------------------------------');
});
