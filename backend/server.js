const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sendmail = require('sendmail')();

const hostname = 'pavbox.com';
const port = 8080;
const __rootpath = path.dirname(__dirname + '/public/');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Default blank page.
 */
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	new fs.ReadStream(path.join(__rootpath + 'index.html')).pipe(res)
});

app.get('/send', function (req, res) {
	new fs.ReadStream(path.join(__rootpath + 'send.html')).pipe(res)
});

app.post('/request', function (req, res) {
	sendmail({
	    from: 'no-reply@pavbox.com',
	    to: 'pavlikprogrammer@mail.ru',
	    subject: '[ WARN ] Amount Request',
	    html: '<span>' + req.body.amount + '</span>',
	  }, function(err, reply) {
	    console.log(err && err.stack);
	    console.dir(reply);
	});
});

app.get('*', function (req, res) {
	if (req.url.indexOf('.css') > 0) {
     res.setHeader('Content-Type', 'text/css');
   } else if (req.url.indexOf('.js') > 0) {
     res.setHeader('Content-Type', 'text/javascript');
   } else {
     res.setHeader('Content-Type', 'text/html');
   }

	 try {
	 	new fs.ReadStream(path.join(__rootpath + req.url)).pipe(res)
	} catch (e) {
		res.end()
	}
})

app.listen(port, () => {
  console.log('-----------------------------------------');
  console.log('-      Serving pavbox.com website.      -');
  console.log('-----------------------------------------');
});
