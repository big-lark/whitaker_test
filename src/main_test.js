// @ts-check
// Formatting, linting
// Formatting: prettier
// Linting: ESLint
// Type checking: TypeSctipt

// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.end('Hello!')
// })

// const PORT = 4000
// server.listen(PORT, () => {
//   console.log(`The server is listening at port: ${PORT}.`)
// })

var numCounters = 0

function getCounter() {
  numCounters += 1

  var result = { conunt: count, total: 0 }
  function count() {
    result.total += 1
  }
  return result
}

var counterA = getCounter()
counterA.conunt()
counterA.conunt()
var counterB = getCounter()
counterB.conunt()

console.log(counterA.total, counterB.total, numCounters)
