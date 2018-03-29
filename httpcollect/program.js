var http = require('http'); // standard package within node

var concat = require('concat-stream'); // external package 

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.pipe(concat((data) => {
        console.log(data.split("").length);
        console.log(data);
    }))
})