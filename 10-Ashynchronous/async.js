// What is async in JavaScript?
// async is a keyword used to declare a function that works with Promises and allows you to use await inside it.
// Key rules
// - An async function always returns a Promise
// - Inside an async function, you can use await
// - It makes asynchronous code easier to read and write
async function greet() {
  return "Hello!";
}

greet().then(message => console.log(message));
// Output: Hello!
