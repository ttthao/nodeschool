var fs = require('fs')
var http = require('http')

var port = process.argv[2]
var path = process.argv[3] //fs.createReadStream()

var server = http.createServer(function (req, res){
  res.writeHead(200, {'content-type': 'text/plain' })
  var file = fs.createReadStream(path)
  file.pipe(res)
})

server.listen(port)
