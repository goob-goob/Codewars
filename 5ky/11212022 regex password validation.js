// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

// assign your RegExp to REGEXP
const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]{6,15}$/;
// ^            -- start of string
// (?=.*?[A-Z]) -- look ahead for uppercase letters
// (?=.*?[a-z]) -- look ahead for lowercase letters
// (?=.*?[0-9]) -- look ahead for numbers
// [a-zA-Z0-9]  -- this set ...
// {6,15}       -- length of 6-15 characters for previous set
// $            -- end of string