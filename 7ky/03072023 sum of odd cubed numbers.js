// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') return undefined
        if (arr[i] % 2 !== 0) result.push(arr[i] = arr[i] ** 3)
    }
    return result.reduce((a, c) => a + c, 0)
}