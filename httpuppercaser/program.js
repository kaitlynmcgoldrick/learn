var http = require('http');

var map = require('through2-map');

var server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map((data) => {
            return data.toString().toUpperCase();
        })).pipe(res); 
    } else {
       return res.end('Only POST requests are accepted')
    }
});

server.listen(process.argv[2]);

