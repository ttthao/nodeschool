/*
Write a module that returns a readable/writable stream using the
`stream-combiner` module. You can use this code to start with:

    var combine = require('stream-combiner')
    
    module.exports = function () {
        return combine(
            // read newline-separated json,
            // group books into genres,
            // then gzip the output
        )
    }
 
Your stream will be written a newline-separated JSON list of science fiction
genres and books. All the books after a `"type":"genre"` row belong in that
genre until the next `"type":"genre"` comes along in the output.

    {"type":"genre","name":"cyberpunk"}
    {"type":"book","name":"Neuromancer"}
    {"type":"book","name":"Snow Crash"}
    {"type":"genre","name":"space opera"}
    {"type":"book","name":"A Deepness in the Sky"}
    {"type":"book","name":"Void"}
    
Your program should generate a newline-separated list of JSON lines of genres,
each with a `"books"` array containing all the books in that genre. The input
above would yield the output:

    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    {"name":"space opera","books":["A Deepness in the Sky","Void"]}

Your stream should take this list of JSON lines and gzip it with
`zlib.createGzip()`.

* HINTS *

The `stream-combiner` module creates a pipeline from a list of streams,
returning a single stream that exposes the first stream as the writable side and
the last stream as the readable side like the `duplexer` module, but with an
arbitrary number of streams in between. Unlike the `duplexer` module, each
stream is piped to the next. For example:

    var combine = require('stream-combiner');
    var stream = combine(a, b, c, d);
    
will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
`combine()` has its writable side hooked into `a` and its readable side hooked
into `d`.

As in the previous LINES adventure, the `split` module is very handy here. You
can put a split stream directly into the stream-combiner pipeline.
Note that split can send empty lines too.

If you end up using `split` and `stream-combiner`, make sure to install them
into the directory where your solution file resides by doing:

    npm install stream-combiner split
*/
var combine = require('stream-combiner')
var split = require('split')
var through = require('through2') // not .obj because input is JSON string
var zlib = require('zlib')

module.exports = function () {
    var curr_genre
    var group_books = through(write, end)

    // On available data ... (data can be empty lines)
    function write(buffer, _, next) {
        if (buffer.length === 0) {
            // Why return, and not just a singular call?
            // I think it's because even if it's 
            return next() 
        }
        var datum = JSON.parse(buffer)
        if (datum.type === "genre") {
            if (curr_genre) {
                this.push(JSON.stringify(curr_genre) + "\n")
            }
            curr_genre = { name: datum.name, books: [] }
        } else {
            curr_genre.books.push(datum.name)
        }
        next()
    }
    // When no more data ...
    // Difference between next() and done()?
    // Next() called when ready to receive next chunk
    // Done() finishes output
    // function end(next) {
    function end(done) {
        if (curr_genre) {
            this.push(JSON.stringify(curr_genre) + "\n")
        }
        // next()
        done()
    }
    var print_results = through(function (buffer, _, next) {
        console.log(buffer)
        this.push(buffer)
    })

    // The unclear part of this problem was that the 'combine' stream is written
    // to at the start of the execution, so I wasn't sure where the input
    // was in the code
    return combine(
        // read newline-separated json,
        split(), // Writable
        // group books into genres,
        group_books,
        // then gzip the output
        // print_results,
        zlib.createGzip() // Readable
    )
}