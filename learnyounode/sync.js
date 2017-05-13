var fs = require('fs')

var newlines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(newlines);

// buf = fs.readFileSync(process.argv[2]);
//
// var str = buf.toString();
// // buf = fs.readFileSync(process.argv[2], 'utf8');
//
// var count = str.split('\n').length - 1;
//
// console.log(count);
