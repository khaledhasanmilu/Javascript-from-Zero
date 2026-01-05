// JavaScript Data Types

// Problem 1: Primitive data types
let fullName = "Khaled Hasan Milu"; // String
let age = 22;                      // Number
let isStudent = true;              // Boolean
let result = null;                 // Null
let value;                         // Undefined

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof result);   // object (JavaScript quirk)
console.log(typeof value);

// Problem 2: Non-primitive data types
let numbers = [10, 20, 30];        // Array
let person = {
  name: "Milu",
  age: 22
};                                 // Object

console.log(typeof numbers); // object
console.log(typeof person);

// Problem 3: Check value and type
console.log(numbers);
console.log(person);
