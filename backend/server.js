const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sendmail = require('sendmail')();

const hostname = 'pavbox.com';
const port = 8080;
const __rootpath = path.dirname(__dirname + "/../public/");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Default blank page.
 */

app.get(/\/(index)?/, function (req, res) {
	fs.readFile(__dirname + './../public/index.html', 'utf8', function(err, text) {
  	res.send(text);
  });
});

app.get('/send', function (req, res) {
	fs.readFile(__dirname + './../public/send.html', 'utf8', function(err, text) {
  	res.send(text);
  });
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

app.listen(port, () => {
  console.log('-----------------------------------------');
  console.log('-      Serving pavbox.com website.      -');
  console.log('-----------------------------------------');
});
