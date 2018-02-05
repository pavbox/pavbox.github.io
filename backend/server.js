const http = require('http');
const fs = require('fs');
const sendmail = require('sendmail')();

const hostname = 'pavbox.com';
const port = 80;
const __rootpath = __dirname + "/../public/";

const server = http.createServer((req, res) => {
	if (!req.err) { console.log(req.url); }
	res.statusCode = 200;

  if (req.url.indexOf('.css') > 0) {
    res.setHeader('Content-Type', 'text/css');
  } else if (req.url.indexOf('.js') > 0) {
    res.setHeader('Content-Type', 'text/javascript');
  } else {
    res.setHeader('Content-Type', 'text/html');
  }

	switch (req.url) {
		case '/':
		case '/index.html':
			new fs.ReadStream(__rootpath + "index.html").pipe(res);
			break;
		case '/send.html':
			new fs.ReadStream(__rootpath + "send.html").pipe(res);
			break;
		case '/request':
			sendmail({
			    from: 'no-reply@pavbox.com',
			    to: 'pavlikprogrammer@mail.ru',
			    subject: '[ WARN ] Amount Request',
			    html: '<span>' + req.body.amount + '</span>',
			  }, function(err, reply) {
			    console.log(err && err.stack);
			    console.dir(reply);
			});
			break;
		default:
			try {
	      fs.mkdirSync(path);
				new fs.ReadStream(__rootpath + req.url).pipe(res);
	    } catch (err) {
	      if (err.code !== 'EEXIST') {
	        console.log(err);
	      }

				res.writeHead(302, {
				  'Location': '/index.html'
				});
				res.end();
			}
	}
});


server.listen(port, hostname, function() {
  console.log(`Server Running`);
});
