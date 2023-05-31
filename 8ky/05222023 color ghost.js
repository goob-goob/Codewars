// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function () {
    const n = Math.floor(Math.random() * 4)
    this.color = n === 1 ? 'white' : n === 2 ? 'yellow' : n === 3 ? 'purple' : 'red'
};