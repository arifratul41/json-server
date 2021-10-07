import generateRegex from "./generateRegex"

const http = require('http');
http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("write html code to display you test")
    res.end();
}).listen(8080);