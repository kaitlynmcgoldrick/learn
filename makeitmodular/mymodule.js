const fs = require('fs')
const path = require('path')

module.exports = function (directory, extension, callback){
  
  // do stuffs
  fs.readdir(directory, function(err, list){
    if(err){
        return callback(err)
    }
    
    list = list.filter(function (file) {
      return path.extname(file) === '.' + extension
    })
      // call callback
  callback(null, list)
})
  
}