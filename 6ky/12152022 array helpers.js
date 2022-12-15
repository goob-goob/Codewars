// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

Array.prototype.square = function(array) {
  let x = this
  return x.map((value) => value * value)
}

Array.prototype.cube = function(array) {
  let x = this
  return x.map((value) => value * value * value)
}

Array.prototype.average = function(array) {
  let x = this
  let sum = this.sum()
  return (sum / x.length)
}

Array.prototype.sum = function(array) {
  let x = this
  return x.reduce((a, c) => c = a + c, 0)
}

Array.prototype.even = function(array) {
  let x = this
  return x.filter((value) => value % 2 === 0)
}

Array.prototype.odd = function(array) {
  let x = this
  return x.filter((value) => value % 2 !== 0)
}