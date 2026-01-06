// JavaScript Operators

// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Comparison Operators
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a === b); // false (strict check)

// Logical Operators
let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false

// Problem: Check if a number is between 1 and 20
let num = 15;

let isInRange = num >= 1 && num <= 20;
console.log("Is number between 1 and 20?", isInRange);
