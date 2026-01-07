// 1️⃣ Normal Function
function greet() {
  console.log("Hello!");
}

// 2️⃣ Function with Parameters
function add(a, b) {
  return a + b;
}

// 3️⃣ Function with Return
function multiply(x, y) {
  return x * y;
}

// 4️⃣ Function Expression
const sayHi = function () {
  console.log("Hi!");
};

// 5️⃣ Arrow Function
const subtract = (a, b) => a - b;

// 6️⃣ One-line Arrow Function
const square = n => n * n;

// 7️⃣ Default Parameter Function
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}

// 8️⃣ Anonymous Function (used in setTimeout)
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);

// 9️⃣ Callback Function
function processData(data, callback) {
  callback(data);
}

processData("JS", function (value) {
  console.log(value);
});

// 🔟 Function inside Function
function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}

// 1️⃣1️⃣ IIFE (Immediately Invoked Function)
(function () {
  console.log("IIFE executed");
})();

// 1️⃣2️⃣ Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// ===== Function Calls =====
greet();
console.log(add(5, 3));
console.log(multiply(4, 2));
sayHi();
console.log(subtract(10, 5));
console.log(square(6));
welcome("Milu");
outer();
console.log(factorial(5));
