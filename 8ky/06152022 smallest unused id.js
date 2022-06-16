// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

const nextId = ids => {

    let newIds = Array.from(new Set([...ids].sort((a, b) => a - b)))
    
    for( let i = 0; i < newIds.length; i++ ) {
      if( i !== newIds[i] ) return i
    }
    return newIds.length 
}