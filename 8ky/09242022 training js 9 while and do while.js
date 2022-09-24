// Task

// Complete function padIt, which accepts 2 parameters:

//     str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
//     n: a number indicating how many times to pad the string.


function padIt(str, n) {
    if (n < 1) return
    let i = 1
    let result = str
    while (i <= n) {
        if (i % 2 === 0) {
            result = result + '*'
        } else {
            result = '*' + result
        }
        i++
    }
    return result
}