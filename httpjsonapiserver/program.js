var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url, true).pathname;
    var time = url.parse(req.url, true).query.iso;
    var date = new Date(time);

    if (pathname === '/api/parsetime') {
        var result = {  
            "hour": date.getHours(),  
            "minute": date.getMinutes(),  
            "second": date.getSeconds()  
        } 
    } else if (pathname === '/api/unixtime') {
        var result = {
            "unixtime": Date.parse(time)
        } 
    } else {
        var result = undefined
    }
    
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(process.argv[2]);