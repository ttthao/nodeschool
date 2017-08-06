/*
Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud",
and pipe all the html to stdout.

You can use `trumpet` and `through2` to solve this adventure.

With `trumpet` you can create a transform stream from a css selector:

    var trumpet = require('trumpet');
    var fs = require('fs');
    var tr = trumpet();
    fs.createReadStream('input.html').pipe(tr);
    
    var stream = tr.select('.beep').createStream();

Now `stream` outputs all the inner html content at `'.beep'` and the data you
write to `stream` will appear as the new inner html content.

Make sure to `npm install trumpet through2` in the directory where your solution
file lives.
*/

var trumpet = require('trumpet');
var fs = require('fs')
var through = require('through2')
var tr = trumpet()

// From tr stream, html elements of class 'loud'
// are upper-cased and sent back to tr through the loud stream
var loud = tr.select('.loud').createStream()
loud.pipe(through(function(buffer, encoding,next){
    this.push(buffer.toString().toUpperCase())
    next()
})).pipe(loud)

process.stdin
    .pipe(tr) // tr stream gets fed html input
    .pipe(process.stdout)