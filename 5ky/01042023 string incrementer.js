// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(s) {

    let test = /[0-9]/
    let digits = ''
    let length = 0
    let spl = s.split('')
    for (let i = spl.length - 1; i >= 0; i--) {
        if (spl[i].match(test)) {
            digits += spl[i]
            spl.pop()
        } else {
            break;
        }
    }

    digits = digits.split('').reverse().join('')

    length = digits.length

    digits = (Number(digits) + 1).toString()
    digits = digits.split('')

    while (digits.length < length) {
        digits.unshift('0')
    }

    return spl.join('') + digits.join('')
}