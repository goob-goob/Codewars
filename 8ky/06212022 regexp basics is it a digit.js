// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    let parsed = parseInt(this, 10)
  
    return parsed > -1 && parsed < 10 && parsed == this && this.length < 2 ? true : false
};