// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
    let arr = word.split('')
    let indices = []
    for( let i = 0; i < arr.length; i++ ) {
      switch( arr[i] ) {
          case 'a':
            indices.push(i + 1)
            break
          case 'e':
            indices.push(i + 1)
            break
          case 'i':
            indices.push(i + 1)
            break
          case 'o':
            indices.push(i + 1)
            break
          case 'u':
            indices.push(i + 1)
            break
          case 'A':
            indices.push(i + 1)
            break
          case 'E':
            indices.push(i + 1)
            break
          case 'I':
            indices.push(i + 1)
            break
          case 'O':
            indices.push(i + 1)
            break
          case 'U':
            indices.push(i + 1)
            break
          case 'y':
            indices.push(i + 1)
            break
          case 'Y':
            indices.push(i + 1)
            break
      }
    }
    return indices
}