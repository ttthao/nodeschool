/*
Take data from `process.stdin` and pipe it to `process.stdout`.
With `.pipe()`. `process.stdin.pipe()` to be exact.
Don't overthink this.
*/

const fs = require("fs")

// Stream input to output
process.stdin.pipe(process.stdout)