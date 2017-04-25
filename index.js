var buzzwords = require('buzzwords')
var uniqueRandomArray = require('unique-random-array')
var rand = uniqueRandomArray(buzzwords)

module.exports = function () {
  return rand()
}
