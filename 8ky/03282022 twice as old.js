// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// ****** My solution ******
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if( sonYearsOld * 2 == dadYearsOld ) return 0
    if( sonYearsOld == 0 ) return dadYearsOld
    let born = dadYearsOld - sonYearsOld
    let d = 1, s = 0
    while( true ) {
      console.log(`d = ${d}, s = ${s}`)
      if( d > born ) s++
      if( s === d / 2 ) return Math.abs(d - dadYearsOld)
      d++
    }
}

// ****** other, better solution ******

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}