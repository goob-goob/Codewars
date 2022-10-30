// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let n = Math.abs(number)

    let digits = n.toString().split('')

    return digits.reduce((a, c) => Number(a) + Number(c), 0)
}
