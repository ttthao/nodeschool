var http = require('http')

var url = process.argv[2]
var bl = require('bl')

// My solution doesn't count callbacks
// for(var i=2; i<process.argv.length; i++){
//   http.get(process.argv[i], function(response){
//     // Collects (pipes) stream into bl
//     response.pipe(bl(function (err, data) {
//       if(err) {
//         return console.error(err)
//       }
//
//       console.log(data.toString())
//     }))
//   }).on("error", console.error) // Listen for errors for GET request failure
// }

var results = []
var count = 0

function printResults() {
  for(var i=0; i<3; i++){
    console.log(results[i])
  }
}

function httpGet(index) {
    http.get(process.argv[2+index], function(response){
    // Collects (pipes) stream into bl
    response.pipe(bl(function (err, data) {
      if(err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if(count === 3){
        printResults()
      }
    }))
  }).on("error", console.error) // Listen for errors for GET request failure
}

for(var i=0; i<3; i++){
  httpGet(i)
}
