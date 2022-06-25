// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s,n){
    s = s.split('')
    let newString = s
    let positions = []
    for(let i = 0; i < s.length; i++) {
      if(s[i] === '!' && n > 0) {
        positions.unshift(i)
        n--
      }
    }
    for(let i = 0; i < positions.length; i++) {
      newString.splice(positions[i], 1)
    }
    return newString.join('') 
}