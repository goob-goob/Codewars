// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (test, original) => {

    test = test.toLowerCase()
    original = original.toLowerCase()

    test = test.split('').sort().join('')
    original = original.split('').sort().join('')

    return test == original
}