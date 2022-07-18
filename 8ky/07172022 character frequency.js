// Description

// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
// Explanation

// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary 
// (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input. 

const charFreq = text => {
    text = text.split('')
    let result = {}
    text.forEach((letter) => {
      if(result[letter]) {
        result[letter] += 1
      } else {
        result[letter] = 1
      }
    })
    return result
  }