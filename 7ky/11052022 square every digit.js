// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = n => {
    let nums = n.toString().split('')

    for (let i = 0; i < nums.length; i++) {
        nums[i] = parseInt(nums[i], 10)
        nums[i] = nums[i] * nums[i]
    }

    return parseInt(nums.join(''), 10)
}