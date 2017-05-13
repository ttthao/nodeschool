/*
A HTTP GET request tutorial that writes the string contents of the response.
*/

var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function(response){
  // Collects (pipes) stream into bl
  response.pipe(bl(function (err, data) {
    if(err) {
      return console.error(err)
    }

    console.log(data.toString().length)
    console.log(data.toString())
  }))
}).on("error", console.error) // Listen for errors for GET request failure
