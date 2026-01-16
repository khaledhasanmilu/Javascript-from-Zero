# 📘 JavaScript Hoisting & Scope  
### Hoisting এবং Scope — বাংলায় সহজ, পরিষ্কার ও বাস্তব উদাহরণ

এই রিপোজিটরিতে JavaScript-এর দুটি অত্যন্ত গুরুত্বপূর্ণ কনসেপ্ট  
**Hoisting** এবং **Scope** সুন্দরভাবে, বাস্তব উদাহরণসহ ব্যাখ্যা করা হয়েছে।  
এই নোটটি **Beginner থেকে Intermediate** ডেভেলপারদের জন্য উপযোগী।

---

## 📑 সূচিপত্র (Table of Contents)
- Hoisting কী?
- Variable Hoisting
- Function Hoisting
- let, const ও Temporal Dead Zone
- Scope কী?
- Global Scope
- Function Scope
- Block Scope
- var vs let vs const
- উপসংহার

---

## 🚀 Hoisting কী?

👉 JavaScript কোড চালানোর আগেই  
👉 **Declaration গুলোকে মেমোরিতে উপরে তুলে নেয়**  
👉 একেই বলা হয় **Hoisting**

⚠️ গুরুত্বপূর্ণ:
> **Declaration hoist হয়, Assignment হয় না**

---

## 🔹 Variable Hoisting (`var`)

```js
console.log(a);
var a = 10;
````

🔍 Output:

```
undefined
```

👉 JavaScript এটাকে এমনভাবে দেখে:

```js
var a;
console.log(a);
a = 10;
```

📌 অর্থাৎ `var` hoisted হয় কিন্তু value না।

---

## 🔹 Function Hoisting

```js
sayHello();

function sayHello() {
  console.log("Hello JavaScript!");
}
```

✅ এটি কাজ করবে

👉 কারণ **Function Declaration পুরোপুরি hoisted হয়**

---

## 🔹 let ও const (Temporal Dead Zone)

```js
console.log(b);
let b = 20;
```

❌ Error:

```
Cannot access 'b' before initialization
```

📌 একে বলা হয় **Temporal Dead Zone (TDZ)**

### ✨ সংক্ষেপে:

* `var` → hoisted (value = undefined)
* `let` → hoisted, কিন্তু TDZ তে থাকে
* `const` → hoisted, কিন্তু TDZ তে থাকে

---

## 🧠 Scope কী?

👉 **কোন জায়গা থেকে কোন variable access করা যাবে**
👉 সেটাকেই বলে **Scope**

---

## 🌍 Global Scope

```js
let x = 100;

function show() {
  console.log(x);
}

show();
```

👉 Global variable সব জায়গা থেকে ব্যবহার করা যায়

---

## 🔒 Function Scope

```js
function test() {
  let y = 200;
  console.log(y);
}

test();
// console.log(y); ❌ Error
```

👉 Function-এর ভিতরের variable বাইরে পাওয়া যায় না

---

## 🧱 Block Scope (`let` & `const`)

```js
if (true) {
  let a = 10;
  const b = 20;
}

// console.log(a); ❌ Error
// console.log(b); ❌ Error
```

👉 `let` ও `const` হলো **Block Scoped**

---

## ⚠️ var Block Scoped নয়

```js
if (true) {
  var c = 30;
}

console.log(c); // ✅ কাজ করবে
```

👉 `var` হলো **Function Scoped**, Block Scoped নয়

---

## 📊 var vs let vs const

| Feature     | var     | let           | const         |
| ----------- | ------- | ------------- | ------------- |
| Hoisting    | ✅       | ✅ (TDZ)       | ✅ (TDZ)       |
| Block Scope | ❌       | ✅             | ✅             |
| Re-declare  | ✅       | ❌             | ❌             |
| Re-assign   | ✅       | ✅             | ❌             |
| Modern JS   | ❌ Avoid | ✅ Recommended | ✅ Recommended |

---

## ✅ উপসংহার (Conclusion)

* **Hoisting** বোঝা মানে runtime error কমানো
* **Scope** বোঝা মানে secure ও clean code লেখা
* Modern JavaScript-এ সবসময়:

  * `let` ও `const` ব্যবহার করুন
  * `var` এড়িয়ে চলুন

---

## 👨‍💻 Author

**Khaled Hasan Milu**  
JavaScript Learner | QA Aspirant  

- 🧑‍💻 GitHub: https://github.com/khaledhasanmilu/ 
- 💼 LinkedIn: [https://www.linkedin.com/in/khaled-hasan-milu/](https://www.linkedin.com/in/khaledhasanmilu/)


🌟 *Happy Coding — Keep Learning, Keep Growing* 🚀
