var filter_files = require('./filter_files')

var dir = process.argv[2]
var ext = process.argv[3]

filter_files(dir,ext, function(err, files){
  if(err) console.log(err)

  files.forEach(function(file){
    console.log(file)
  })
})
