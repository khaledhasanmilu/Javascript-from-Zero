// =====================================
// JavaScript Array – All in One Code
// =====================================

// 1️⃣ Array Creation
let numbers = [10, 20, 30, 40];
let names = ["Khaled", "Milu", "Hasan"];

// -------------------------------------

// 2️⃣ Access Array Elements
console.log(numbers[0]); // 10
console.log(names[1]);   // Milu

// -------------------------------------

// 3️⃣ Array Length
console.log(numbers.length);

// -------------------------------------

// 4️⃣ Looping Arrays

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of loop
for (let num of numbers) {
  console.log(num);
}

// -------------------------------------

// 5️⃣ Array Methods

numbers.push(50);     // add at end
numbers.pop();        // remove from end
numbers.unshift(5);   // add at start
numbers.shift();      // remove from start

// -------------------------------------

// 6️⃣ Search in Array
console.log(numbers.includes(20)); // true
console.log(numbers.indexOf(30));  // index

// -------------------------------------

// 7️⃣ slice & splice

let slicedArray = numbers.slice(1, 3); // copy
console.log(slicedArray);

numbers.splice(1, 1); // remove 1 element from index 1
console.log(numbers);

// -------------------------------------

// 8️⃣ Map, Filter, Reduce

let doubled = numbers.map(n => n * 2);
console.log(doubled);

let filtered = numbers.filter(n => n > 20);
console.log(filtered);

let total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total);

// -------------------------------------

// 9️⃣ Function with Array
function sumArray(arr) {
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum;
}

console.log(sumArray(numbers));

// -------------------------------------

// 🔟 Array of Objects
let students = [
  { name: "Khaled", age: 22 },
  { name: "Milu", age: 21 }
];

for (let student of students) {
  console.log(student.name, student.age);
}

// -------------------------------------

// 1️⃣1️⃣ Sort & Reverse
let scores = [40, 10, 100, 30];
scores.sort((a, b) => a - b);
console.log(scores);

scores.reverse();
console.log(scores);

// -------------------------------------

// END
// =====================================
