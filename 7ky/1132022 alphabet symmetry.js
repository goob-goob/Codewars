// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(input) {

    // making sure our result.length is appropriate, and starts with value of 0 at each index
    let result = Array.from([...input], x => 0)

    // iterate through input
    // split entry into individual letters
    // check the index against its 'real-life' index
    // if it matches, increase the count in the result array
    for (let i = 0; i < input.length; i++) {
        input[i].split('').forEach((element, index, array) => {
            const realIndex = element.toLowerCase().charCodeAt(array[index]) - 96
            if (index + 1 === realIndex) {
                result[i] = result[i] + 1
            }
        })
    }
    return result
};