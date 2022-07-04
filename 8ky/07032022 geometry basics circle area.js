// The Circle class can be seen below:

// // Represents a Circle where center is a Point and radius is a Number
// class Circle {
//   constructor(center, radius) { 
//     this.center = center; 
//     this.radius = radius;
//   }
// }

// And the Point class can be seen below:

// // Represents a Point where x and y are Numbers
// class Point {
//   constructor (x,y) { 
//     this.x = x;
//     this.y = y; 
//   }
// }

// Tests round answers to 6 decimal places.

function circleArea(circle){
    return Math.PI * circle.radius ** 2
  }