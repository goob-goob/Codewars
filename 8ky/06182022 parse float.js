// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.v

function parseF(s) {
    return isNaN(parseFloat(s, 1)) ? null : parseFloat(s, 1)
}