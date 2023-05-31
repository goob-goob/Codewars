// Acknowledgments:

// I thank yvonne-liu for the idea and for the example tests :)
// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
    let coded = text.split(' ').map((word) => {
        const firstLetter = word.charCodeAt(0)
        const secondLetter = { letter: word.slice(1, 2), index: 1 }
        const lastLetter = { letter: word[word.length - 1], index: word.length - 1 }

        console.log(`word:${word}\nfirstLetter: ${firstLetter}\nsecondLetter: ${secondLetter}\nlastLetter: ${lastLetter}\n`)

        return firstLetter +
            (word.length > 1 ? lastLetter.letter : '') +
            (word.length > 2 ? word.slice(2, word.length - 1) : '') +
            (secondLetter.letter ? secondLetter.index !== lastLetter.index ? secondLetter.letter : '' : '')
    })
    console.log(coded.join(' '))
    return coded.join(' ')
}