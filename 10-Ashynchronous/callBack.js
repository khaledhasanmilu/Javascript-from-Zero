function getData(callback) {
  setTimeout(() => {
    callback("Data পাওয়া গেছে");
  }, 1000);
}

getData(function (result) {
  console.log(result);
});
