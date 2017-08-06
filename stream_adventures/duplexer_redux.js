/*
In this example, you will be given a readable stream, `counter`, as the first
argument to your exported function:

    module.exports = function (counter) {
        // return a duplex stream to count countries on the writable side
        // and pass through `counter` on the readable side
    };

Return a duplex stream with the `counter` as the readable side. You will be
written objects with a 2-character `country` field as input, such as these:
 
    {"short":"OH","name":"Ohio","country":"US"}
    {"name":"West Lothian","country":"GB","region":"Scotland"}
    {"short":"NSW","name":"New South Wales","country":"AU"}

Create an object to track the number of occurrences of each unique country code.

For example:

    {"US": 2, "GB": 3, "CN": 1}

Once the input ends, call `counter.setCounts()` with your counts object.

The `duplexer2` module will again be very handy in this example.

If you use duplexer, make sure to `npm install duplexer2` in the directory where
your solution file is located.
*/

var duplexer = require('duplexer2')
var through = require('through2').obj // Object stream transformation

module.exports = function (counter) {
    var counts = {}
    var input = through(write, end)

    // Duplex stream needs to be an object stream
    // duplexer(input,output) => duplexer(writeable, readable)
    // The writeable (input) stream of this duplex stream will take the
    // input data and count
    // The result of the writable stream will be piped into the readable
    // stream of this duplex stream, so that the readable stream is updated
    // when piped from
    // Initially, the readable stream (counter) pipes into input
    return duplexer({ objectMode: true }, input, counter)

    // Counter streams into write()
    function write(row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1
        next()
    }

    // When no more data exists, 
    function end(done) {
        counter.setCounts(counts)
        done()
    }
}