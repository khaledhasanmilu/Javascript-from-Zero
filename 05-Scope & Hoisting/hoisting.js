// =====================================
// JavaScript Hoisting – All in One Code
// =====================================

// 1️⃣ Function Hoisting (Works)
sayHello();

function sayHello() {
  console.log("Hello World");
}

// -------------------------------------

// 2️⃣ var Hoisting
console.log(a); // undefined
var a = 10;

// Internally JS does:
// var a;
// console.log(a);
// a = 10;

// -------------------------------------

// 3️⃣ let Hoisting (Temporal Dead Zone)
try {
  console.log(b);
} catch (e) {
  console.log("Error with let hoisting");
}
let b = 20;

// -------------------------------------

// 4️⃣ const Hoisting (TDZ)
try {
  console.log(c);
} catch (e) {
  console.log("Error with const hoisting");
}
const c = 30;

// -------------------------------------

// 5️⃣ Function Expression Hoisting
try {
  greet();
} catch (e) {
  console.log("Function expression not hoisted");
}

var greet = function () {
  console.log("Hi!");
};

// -------------------------------------

// 6️⃣ Arrow Function Hoisting
try {
  arrowFunc();
} catch (e) {
  console.log("Arrow function not hoisted");
}

const arrowFunc = () => {
  console.log("Arrow Function");
};

// -------------------------------------

// 7️⃣ Class Hoisting
try {
  const obj = new MyClass();
} catch (e) {
  console.log("Class not hoisted");
}

class MyClass {
  constructor() {
    console.log("Class created");
  }
}

// =====================================
// END
// =====================================
