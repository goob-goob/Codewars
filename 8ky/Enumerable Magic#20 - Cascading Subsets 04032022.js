function eachCons(array, n) {
    let result = []
      
    for( let i = 0; i < array.length;  i++ ) {
        result.push(array.slice(i, i + n));    

    }
    
    return result.filter(e => e.length === n);
  }
  
  // function eachCons(array, n) {
  //   let res = [];
    
  //   for(let i = 0; i < array.length; i++){
  //     res.push(array.slice(i,i + n));
  //   }
    
  //   return res.filter(e => e.length === n);
  // }
  
  