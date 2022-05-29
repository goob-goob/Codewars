// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
 
    const reg14 = /[0-4]/g
    const reg59 = /[5-9]/g
    let y = x.replace(reg14, '0')
    let z = y.replace(reg59, '1')
  
    return z
  }