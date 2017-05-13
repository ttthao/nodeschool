var fs = require('fs')
var http = require('http')
var map = require('through2-map')

var port = process.argv[2]
var path = process.argv[3] //fs.createReadStream()

var server = http.createServer(function (req, res){
  res.writeHead(200, {'content-type': 'text/plain' })
  if(req.method !== 'POST'){
    return res.end('Send me a POST request please!\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port)
