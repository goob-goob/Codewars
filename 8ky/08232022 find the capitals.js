// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = word => {
    let indexes = []
    word.split('').forEach((element, index, array) => {
        if (element === element.toUpperCase()) {
            indexes.push(index)
        }
    })
    return indexes
}