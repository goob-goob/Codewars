// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
    let result = arr.map((element, index, array) => {
        if (index < arr.length - 1) {
            return [arr.slice(0, index + 1).join(' '), arr.slice(index + 1).join(' ')]
        }
    })
    result.pop()
    return result
}