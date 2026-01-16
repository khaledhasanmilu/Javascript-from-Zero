
# JavaScript Asynchronous Concepts  
## Callbacks, Promises & Async/Await

This file explains **Callbacks**, **Promises**, and **Async/Await** in JavaScript in a simple and easy-to-understand way.

---

## 📌 Table of Contents
- What is Asynchronous JavaScript?
- Callbacks
- Promises
- Async / Await
- Comparison
- Conclusion

---

## 🔄 What is Asynchronous JavaScript?

Asynchronous JavaScript allows tasks like API calls, timers, or file reading to run **without blocking** the main thread.

---

## 1️⃣ Callbacks

A **callback** is a function passed as an argument to another function and executed after the task completes.

### Example
```js
function getData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

getData(function (result) {
  console.log(result);
});
````

### ❌ Problem: Callback Hell

```js
doA(() => {
  doB(() => {
    doC(() => {
      doD(() => {
        console.log("Too messy!");
      });
    });
  });
});
```

---

## 2️⃣ Promises

A **Promise** represents a value that will be available in the future.

### Creating a Promise

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}
```

### Consuming a Promise

```js
getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Promise States

* Pending
* Fulfilled
* Rejected

---

## 3️⃣ Async / Await

`async/await` is a modern and cleaner way to handle Promises.

### Example

```js
async function getData() {
  return "Data received";
}

async function run() {
  const result = await getData();
  console.log(result);
}

run();
```

### Error Handling

```js
async function run() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 🔁 Same Task in 3 Ways

### Callback

```js
getData(data => console.log(data));
```

### Promise

```js
getData().then(data => console.log(data));
```

### Async / Await

```js
const data = await getData();
console.log(data);
```

---

## 📊 Comparison Table

| Feature        | Callback | Promise   | Async/Await   |
| -------------- | -------- | --------- | ------------- |
| Readability    | ❌ Poor   | 😐 Medium | ✅ Best        |
| Error Handling | ❌ Hard   | 😐 Medium | ✅ Easy        |
| Code Structure | ❌ Messy  | ✅ Better  | ⭐ Cleanest    |
| Modern Usage   | ❌ Old    | ✅ Yes     | ✅ Recommended |

---

## ✅ Conclusion

* Callbacks are the foundation but hard to manage
* Promises improve readability and structure
* Async/Await is the **best modern approach**

👉 **Async/Await is built on top of Promises.**

---
