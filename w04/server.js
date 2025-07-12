var http = require('http');
var dt = require('./data');
var url = require('url');

var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true); 
    if (q.pathname == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1><p>The time is now: ' + dt.myDateTime() + '</p>');
        res.write('<p>The url is: ' + q.pathname + '</p>');
        res.write('<p>A is ' + q.query.A + ' and B is ' + q.query.B + '</p>');
        res.end();
    } else if (q.pathname == "/second") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Second Page</h1><p>This is the second page.</p>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404</h1><p>This is not the page you are looking for.</p>');
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Now listening on port 8080.');
});
