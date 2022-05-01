function barista(coffees){
    if(coffees[0] == undefined) { return 0 }
    coffees.sort((a,b) => a - b)
  
    let waitTimes = []
    coffees.reduce((previous, current, index) =>  { 
      if( index == 0 ) {
        previous += current
      } else {
        previous += current + 2
      }
      
      waitTimes.push(previous)
      return previous
    }, 0)
    return waitTimes.reduce((prev, curr) => prev + curr, 0)
    
  }