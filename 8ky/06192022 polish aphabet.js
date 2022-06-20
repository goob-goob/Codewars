// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

const replacements = new Map ([
    ['ą', 'a'],
    ['ć', 'c'],
    ['ę', 'e'],
    ['ł', 'l'],
    ['ń', 'n'],
    ['ó', 'o'],
    ['ś', 's'],
    ['ź', 'z'],
    ['ż', 'z']
  ])
  
  function correctPolishLetters (string) {
    string = string.split('')
    string.forEach((letter, index, array) => {
      if( replacements.has(letter) ) {
        array[index] = replacements.get(letter)
      }
    })
    return string.join('')
}