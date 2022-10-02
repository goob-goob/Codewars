// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str is empty return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

function revrot(str, sz) {
    if (sz > str.length || sz < 1 || !str) { return '' }
    let chunks = makeChunks(str, sz)
    let result = ''

    for (let chunk of chunks) {
        if (chunk.length >= sz) {
            let c = cubes(chunk)
            if (by2(c)) {
                result += chunk.split('').reverse().join('')
            } else {
                result += rotate(chunk)
            }

        }
    }
    return result
}

function cubes(array) {
    let result = 0
    for (let num of array) {
        num = Number(num)
        result += Math.pow(num, 3)
    }
    return result
}

function by2(value) {
    return value % 2 === 0
}

function rotate(array) {
    array = array.toString().split('')
    array.push(array[0])
    array.shift()
    return array.join('')
}

function makeChunks(string, size) {
    let chunks = []
    for (let i = 0; i <= string.length; i += size) {
        if (i === 0) {
            chunks.push(string.slice(0, size))
        } else {
            chunks.push(string.slice(i, size + i))

        }
    }
    return chunks
}