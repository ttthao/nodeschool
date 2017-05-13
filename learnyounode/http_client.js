/*
A HTTP GET request tutorial that writes the string contents of the response.

*/

var http = require('http')

var url = process.argv[2]

http.get(url, function(response){
  response.setEncoding("utf8") // Converts Node Buffer objects from response to strings
  // response.on("data", function(data){
  //   console.log(data)
  // })
  response.on("data", console.log)
  response.on("error", console.error)
}).on("error", console.error) // Listen for errors for GET request failure
