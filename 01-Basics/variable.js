// Variables in JavaScript

// Problem 1: Declare variables using let, const, and var
let name = "Milu";
const country = "Bangladesh";
var age = 22;

console.log(name);
console.log(country);
console.log(age);

// Problem 2: Update a let variable
let score = 50;
score = 80;
console.log("Updated score:", score);

// Problem 3: Try updating const (commented to avoid error)
// country = "India"; // ❌ Not allowed

// Problem 4: Difference between var and let
if (true) {
  var city = "Dhaka";
  let area = "UIU";
}

console.log(city); // ✅ Accessible
// console.log(area); // ❌ Not accessible (block scope)
