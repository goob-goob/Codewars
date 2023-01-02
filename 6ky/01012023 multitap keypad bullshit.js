// // For this assignment, write a module that can calculate the amount of button presses required for any phrase. 
// Punctuation can be ignored for this exercise. 
// Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters 
// (but you should allow your module to accept input in either for convenience).

function presses(phrase) {
    var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
        phrase = phrase.toUpperCase().split(''),
        total = 0;
    
    phrase.forEach(function(l) {
      var key = chunks.filter(function(c) {
        return c.indexOf(l) > -1;
      })[0];
      total += key.indexOf(l) + 1;
    });
    
    return total;
        
  }