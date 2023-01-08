// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

function encode(string) {
    return [...string].map((letter) => {
      switch(letter) {
          case 'a':
            return '1'
            break
          case 'e':
            return '2'
            break
          case 'i':
            return '3'
            break
          case 'o':
            return '4'
            break
          case 'u':
            return '5'
            break
          default:
            return letter
      }
    }).join('')
  }
  
  function decode(string) {
    return [...string].map((letter) => {
      switch(letter) {
          case '1':
            return 'a'
            break
          case '2':
            return 'e'
            break
          case '3':
            return 'i'
            break
          case '4':
            return 'o'
            break
          case '5':
            return 'u'
            break
          default:
            return letter
      }
    }).join('')
  }