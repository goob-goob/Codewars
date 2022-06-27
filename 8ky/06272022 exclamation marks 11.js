// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
  
    const vowels = 'AEIOUaeiou'
    s = s.split('')
  
    s.forEach((element, index, array) => {
      if( vowels.includes(element) ) {
        array[index] = '!'
      }
    })
    
    return s.join('')
}