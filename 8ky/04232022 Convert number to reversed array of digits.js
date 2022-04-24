// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]



function digitize(n) {
    if( n === 0 ) { return [0] }
    const res = [];
    while(n){
      const last = n % 10;
      res.unshift(last);
      n = Math.floor(n / 10);
    };
    
    return res.reverse()
  }