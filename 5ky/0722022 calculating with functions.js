// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

function zero(a) { return a ? Math.floor(eval(`0 ${a}`)) : '0' }
function one(a) { return a ? Math.floor(eval(`1 ${a}`)) : '1' }
function two(a) { return a ? Math.floor(eval(`2 ${a}`)) : '2' }
function three(a) { return a ? Math.floor(eval(`3 ${a}`)) : '3' }
function four(a) { return a ? Math.floor(eval(`4 ${a}`)) : '4' }
function five(a) { return a ? Math.floor(eval(`5 ${a}`)) : '5' }
function six(a) { return a ? Math.floor(eval(`6 ${a}`)) : '6' }
function seven(a) { return a ? Math.floor(eval(`7 ${a}`)) : '7' }
function eight(a) { return a ? Math.floor(eval(`8 ${a}`)) : '8' }
function nine(a) { return a ? Math.floor(eval(`9 ${a}`)) : '9' }

function plus(a) { return `+ ${a}` }
function minus(a) { return `- ${a}` }
function times(a) { return `* ${a}` }
function dividedBy(a) { return `/ ${a}` }