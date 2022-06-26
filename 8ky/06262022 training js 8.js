// Complete function howManydays, function accept 1 parameters:month, means the month of year, 
// different month has different days (refer to the following table), return a number that how many 
// days in this month(month is always greater than 0, less than or equal to 12).

const howManydays = month => {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
          return 31
          break
        case 4:
        case 6:
        case 9:
        case 11:
          return 30
          break
        case 2:
          return 28
          break
    }
}