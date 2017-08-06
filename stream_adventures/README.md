# Stream Adventure Summary

1. .pipe takes a readable stream and pipes it to a writable stream
2. process.stdin/stdout are duplex streams
3. through2 module creates transforms streams, that take input data and applies transforamtions to produce output data: var stream = through(write,end), also next() in write will bring in the next buffered chunk
4. split module buffers chunks on newlines from readable streams
5. concat-stream module creates a writable stream where the contents of a readable stream are buffered
6. Request/response objects are streams, allowing us to sidestep buffering their content to the server
7. request module allows GET/POST, where the response from a POST is a duplex stream!
8. websocket-stream module allows us to write code where the client can directly communicate with the server for event-driven responses
9. trumpet module allows us to create transform streams (through2) from a css selector, where we can modify HTML. When modifying a trumpet transform stream, you must read from it, then transform the content, and write to the same trumpet stream to modify the selection
10. child_process module allows you to spawn a process
11. duplexer2 module joins a writable and readable into a duplex stream. Joining stdin and stdout would place the stdin on the writable side (to allow input), and stdout on the readable side (to allow output)
12. through2 supports streams that receive objects as input data to still create normal transform streams. If duplexing streams for objects, including objectmodeP: true
13. stream-combiner module creates a pipeline from a list of streams, where the first and last streams are writabable and readable, respectively.
14. crypto module allows us to decrypt or hash encrypted data.
15. zlib module allows us to gzip or gunzip zipped files.
16. tar module allows us to parse each file in a tar input, where each object is a readable stream of the file.