//1️⃣ Scope in JavaScript
Scope means where a variable can be accessed.
Types of Scope: 
1. Global Scope
2. Function Scope
3. Block Scope
//
// =====================================
// JavaScript Scope – All in One Code
// =====================================

// 1️⃣ Global Scope
let globalVar = "I am Global";

function globalTest() {
  console.log(globalVar); // accessible
}

globalTest();
console.log(globalVar); // accessible

// -------------------------------------

// 2️⃣ Function Scope (var)
function functionScope() {
  var functionVar = "I am Function Scoped";
  console.log(functionVar);
}

functionScope();
// console.log(functionVar); ❌ Error

// -------------------------------------

// 3️⃣ Block Scope (let, const)
if (true) {
  let blockLet = "Block Let";
  const blockConst = "Block Const";
  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet);   ❌ Error
// console.log(blockConst); ❌ Error

// -------------------------------------

// 4️⃣ var is NOT Block Scoped
if (true) {
  var notBlockScoped = "var ignores block";
}

console.log(notBlockScoped); // Works

// -------------------------------------

// 5️⃣ Lexical Scope (Inner function can access outer)
function outer() {
  let outerVar = "Outer Variable";

  function inner() {
    console.log(outerVar); // Lexical scope
  }

  inner();
}

outer();

// -------------------------------------

// 6️⃣ Scope Chain Example
let x = 10;

function first() {
  let y = 20;

  function second() {
    let z = 30;
    console.log(x, y, z); // Scope chain
  }

  second();
}

first();

// -------------------------------------

// 7️⃣ Shadowing (same variable name)
let value = 100;

function shadowTest() {
  let value = 50; // shadows global
  console.log(value);
}

shadowTest();
console.log(value);

// -------------------------------------

// 8️⃣ const scope example
function constTest() {
  if (true) {
    const pi = 3.14;
    console.log(pi);
  }
  // console.log(pi); ❌ Error
}

constTest();

// =====================================
// END
// =====================================
