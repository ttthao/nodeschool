var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res){
  var req_url = url.parse(req.url, true) // parsed url
  var time = new Date(req_url['query']['time'])
  var result

  if(req_url['pathname'] === '/api/parsetime'){
    var date = {
      "hour": time.getHours(),
      "minute": time.getMinutes(),
      "second": time.getSeconds()
    }
    result = JSON.stringify(date)
  }
  else if(req_url['pathname'] === '/api/unixtime'){
    var unixtime = {
      "unixtime": time.getTime()
    }
    result = JSON.stringify(unixtime)
  }
  if(result){
    res.writeHead(200, {'Content-Type': 'application/json' })
    res.end(result)
  }
  else{
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
