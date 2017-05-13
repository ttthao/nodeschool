var fs = require('fs')
var path = require('path')

// var dir = process.argv[2]
// var ext = process.argv[3]
//
// fs.readdir(dir, function print_files (err, list){
//   if(err){
//     return console.log(err)
//   }
//
//   for(var i=0; i<list.length; i++){
//     if(path.extname(list[i]) === "."+ext){
//       console.log(list[i])
//     }
//   }
//
// })

var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function (err, files) {
  if (err) return console.error(err)

  files.forEach(function (file){
    if(path.extname(file) === ext){
      console.log(file)
    }
  })

})
