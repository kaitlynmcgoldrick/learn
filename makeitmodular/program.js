const mymodule = require('./mymodule.js')
    
var directory = process.argv[2]
var extension = process.argv[3]
    
mymodule(directory, extension, function (err, list) {
      if (err) return console.error(err)
      
      
      list.forEach(function (file) {
          console.log(file)
      })
    })