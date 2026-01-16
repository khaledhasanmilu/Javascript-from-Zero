# 📘 JavaScript Functions  
### Function কী, কিভাবে কাজ করে — বাংলায় সহজ ব্যাখ্যা

এই রিপোজিটরিতে JavaScript-এর সবচেয়ে গুরুত্বপূর্ণ একটি বিষয়  
**Function** নিয়ে বিস্তারিত আলোচনা করা হয়েছে।  
এটি **Beginner-friendly** এবং বাস্তব উদাহরণসমৃদ্ধ।

---

## 📑 সূচিপত্র (Table of Contents)
- Function কী?
- Function কেন ব্যবহার করি?
- Function Declaration
- Function Expression
- Arrow Function
- Parameters & Arguments
- Return Statement
- Default Parameters
- Callback Function
- Higher-Order Function
- উপসংহার

---

## 🔹 Function কী?

👉 **Function হলো পুনঃব্যবহারযোগ্য (reusable) কোডের একটি ব্লক**,  
👉 যা নির্দিষ্ট কাজ করার জন্য তৈরি করা হয়।

```js
function greet() {
  console.log("Hello JavaScript!");
}
````

---

## 🔹 Function কেন ব্যবহার করি?

* কোড পুনরায় ব্যবহার করা যায়
* কোড পরিষ্কার ও readable হয়
* Bug কম হয়
* Maintain করা সহজ হয়

---

## 1️⃣ Function Declaration

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8
```

📌 এটি **hoisted** হয়

---

## 2️⃣ Function Expression

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

📌 এটি hoisted হয় না

---

## 3️⃣ Arrow Function (ES6)

```js
const subtract = (a, b) => {
  return a - b;
};
```

### Short Syntax

```js
const square = x => x * x;
```

📌 Arrow function এ `this` আলাদা ভাবে কাজ করে

---

## 4️⃣ Parameters & Arguments

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Milu");
```

* `name` → Parameter
* `"Milu"` → Argument

---

## 5️⃣ Return Statement

```js
function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result); // 5
```

👉 `return` function শেষ করে দেয়

---

## 6️⃣ Default Parameters

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Milu");  // Hello Milu
```

---

## 7️⃣ Callback Function

👉 যে function অন্য function-এর argument হিসেবে যায়

```js
function process(callback) {
  callback();
}

process(function () {
  console.log("Callback function called");
});
```

---

## 8️⃣ Higher-Order Function

👉 যে function:

* অন্য function নেয়, অথবা
* function return করে

```js
function calculator(fn, a, b) {
  return fn(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculator(add, 2, 3));
```

---

## 📊 Function Types Summary

| Type         | Example                     |
| ------------ | --------------------------- |
| Declaration  | `function test(){}`         |
| Expression   | `const test = function(){}` |
| Arrow        | `const test = () => {}`     |
| Callback     | `fn(() => {})`              |
| Higher-Order | `function(fn){}`            |

---

## ✅ উপসংহার (Conclusion)

* Function হলো JavaScript-এর heart ❤️
* Clean ও reusable code লেখার জন্য function জানা অত্যন্ত জরুরি
* Modern JavaScript এ **Arrow Function** বেশি ব্যবহৃত হয়

---

## 👨‍💻 Author

**Khaled Hasan Milu**
JavaScript Learner | QA Aspirant

- 🔗 GitHub: [https://github.com/your-github-username](https://github.com/khaledhasanmilu)
- 🔗 LinkedIn: [https://www.linkedin.com/in/your-linkedin-username/](https://www.linkedin.com/in/khaled-hasan-milu/)
