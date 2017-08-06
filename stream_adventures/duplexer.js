/*
Write a program that exports a function that spawns a process from a `cmd`
string and an `args` array and returns a single duplex stream joining together
the stdin and stdout of the spawned process:

    var spawn = require('child_process').spawn;
    
    module.exports = function (cmd, args) {
        // spawn the process and return a single stream
        // joining together the stdin and stdout here
    };

There is a very handy module you can use here: duplexer2. The duplexer2 module
exports a single function `duplexer2(writable, readable)` that joins together a
writable stream and readable stream into a single, readable/writable duplex
stream.

If you use duplexer2, make sure to `npm install duplexer2` in the directory where
your solution file is located.
*/

var spawn = require('child_process').spawn
var duplexer2 = require('duplexer2')

module.exports = function (cmd, args) {
        // spawn the process and return a single stream
        var ps = spawn(cmd, args)

        // joining together the stdin and stdout here
        // process.stdin is a readable stream, 
        // process.stdout is a writeable stream
        // However, both are Duplex streams, so I think we're
        // setting stdin as the writable side, and stdout as the readable side
        // So you would could do the following:
        // src.pipe(duplex), which is writing the src stream to stdin
        // duplex.pipe(dst), which is reading from stdout to dst
        return duplexer2(ps.stdin, ps.stdout)
        // return duplexer2(ps.stdout, ps.stdin)
}