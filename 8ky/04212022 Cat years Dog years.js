// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
    let catyears = 0
    let dogyears = 0
    for(let i = 1; i <= humanYears; i++ ) {
      if (i === 1) {
        catyears += 15
        dogyears += 15
      } else if (i === 2) {
        catyears += 9
        dogyears += 9
      } else {
        catyears += 4
        dogyears += 5
      }    
    }
    return [humanYears, catyears, dogyears]
  }
  