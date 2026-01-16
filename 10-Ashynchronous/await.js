// Basic idea

// await only works inside async functions (with rare exceptions like top-level await in modern JS).

// It makes asynchronous code look and behave more like synchronous code.

// It does not block the main thread—only the async function is paused.
async function fetchData() {
  const response = await fetch("/api/data");
  const data = await response.json();
  console.log(data);
}
