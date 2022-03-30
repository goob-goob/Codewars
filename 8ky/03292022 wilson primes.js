// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    var factorial = p - 1;
    for (i = factorial; i > 1; i--) {
      factorial = factorial * (i - 1)
    }
    var wilson = (factorial + 1) / (p * p);
  
    if (wilson % 1 === 0) {
      return true;
    } else {
      return false;
    }
}