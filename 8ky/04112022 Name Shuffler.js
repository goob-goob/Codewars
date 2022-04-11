// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    let split = str.split(' ')
  
    let first = split[0], last = split[1]
    
    return `${last} ${first}`
  }