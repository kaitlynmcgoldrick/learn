var fs = require('fs');
var buf = fs.readFile(process.argv[2], function(err, data){
    var str = data.toString();
    var count = str.split('\n').length - 1;

    console.log(count)  
    
    
});

