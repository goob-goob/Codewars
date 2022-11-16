// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    const splitString = s.split('')
    const result = splitString.map((element, index, array) => {
        let x = element.toUpperCase()
        for (let i = 0; i < index; i++) {
            x += element.toLowerCase()
        }
        return x
    })
    return result.join('-')
}