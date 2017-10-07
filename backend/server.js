const http = require('http');
const fs = require('fs');

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

	if (req.url == '/index.html' || req.url == '/') {
    new fs.ReadStream(__rootpath + "index.html").pipe(res);
	} else if (req.url != '/favicon.ico') {
		new fs.ReadStream(__rootpath + req.url).pipe(res);
	}
});


server.listen(port, hostname, function() {
  console.log(`Server Running`);
});
