var fs = require('fs')
var path = require('path')

// var dir = process.argv[2]
// var ext = '.' + process.argv[3]

// var newlines;
// function count_newlines(cb) {
//   fs.readFile(process.argv[2], 'utf8', function split_str(err, str){
//     newlines = str.split('\n').length - 1;
//     cb();
//   })
// }
//
// function print_count() {
//   console.log(newlines);
// }
//
// count_newlines(print_count)

// Remove the function name (filter_files), keep it anonymous to keep the global namespace
// clean
module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function (err, data) {
    if (err) return cb(err)

    var files = []

    ext = '.' + ext

    data.forEach(function (file){
      if(path.extname(file) === ext){
        files.push(file)
      }
    })

    // filter() can be used
    // data = data.filter(function(file){
    //  return path.extname(file) === ext
    // })
    // cb(null, data)
  })

    cb(null, files)
  })
}

// function that takes dir name, file extension and callback
