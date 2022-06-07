// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = s => {
    let spl = s.split('')
    spl.forEach((letter, index, array) => { if(letter == '!') array[index] = '' })
    
    return spl.join('')
}