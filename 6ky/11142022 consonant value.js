// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

function solve(s) {
    const subs = s.replace(/[aeiouAEIOU]/g, ',')
        .split(',')
        .filter(x => x !== '')

    let highest = 0
    let total = 0

    subs.forEach((sub) => {
        let score = sub.split('').map((letter) => letter.charCodeAt(0) - 96)

        total = score.reduce((a, c) => a = a + c, 0)

        if (total > highest) { highest = total }
    })

    return highest
};