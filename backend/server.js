const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const __rootpath = __dirname + "/../public/";

const server = http.createServer((req, res) => {
	if (!req.err) { console.log(req.url); }
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');

	if (req.url == '/index.html' || req.url == '/') {
		//new fs.ReadStream("./frontend/index.html").pipe(res);
    new fs.ReadStream(__rootpath + "/index.html").pipe(res);
	} else {
    new fs.ReadStream(__rootpath + req.url).pipe(res);
	}
});


server.listen(port, hostname, function() {
  console.log(`Server Running`);
});
