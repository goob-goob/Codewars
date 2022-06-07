// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    arr3 = arr1.concat(arr2)
    return arr3.reduce((a, c) => a += c, 0)
}

// decided to refactor to the following before submitting:

const arrayPlusArray = (a, b) => a.concat(b).reduce((a, c) => a+= c, 0)