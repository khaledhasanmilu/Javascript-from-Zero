// What is a Promise?
// A Promise has three states:
// 1. Pending – still working
// 2. Fulfilled – completed successfully
// 3. Rejected – failed with an error
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Something went wrong");
  }, 1000);
});
