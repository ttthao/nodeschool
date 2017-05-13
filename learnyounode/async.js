var fs = require('fs');

var file = process.argv[2];

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

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function count_newlines (err, contents) {
  if (err) { return console.log(err) }
  var lines = contents.split('\n').length - 1
  console.log(lines)
})
