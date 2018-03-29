var net = require('net');

var server = net.createServer((socket) => {
    // socket handling logic
    const addPreceedingZero = (num) => {return num < 10 ? "0" + num : num}
    
    var date = new Date();
    
    var year = date.getFullYear();
    var month = addPreceedingZero(date.getMonth() + 1);
    var day = addPreceedingZero(date.getDate());
    var hour = addPreceedingZero(date.getHours());
    var minute = addPreceedingZero(date.getMinutes());
    
    socket.write(`${year}-${month}-${day} ${hour}:${minute}\n` );
    socket.end();
});

server.listen(process.argv[2]);