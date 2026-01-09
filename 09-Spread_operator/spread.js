let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
let obj = { a: 1, b: 2 };
let newObj = { ...obj, c: 3, d: 4 };
console.log(newObj); // Output: { a: 1, b: 2, c: 3, d: 4 }  
// Merging arrays
let arr1 = [7, 8, 9];
let mergedArr = [...arr, ...arr1];
console.log(mergedArr); // Output: [1, 2, 3, 7, 8, 9]
// Merging objects
let obj1 = { e: 5, f: 6 };
let mergedObj = { ...obj, ...obj1 };
console.log(mergedObj); // Output: { a: 1, b: 2, e: 5, f: 6 }
// Copying arrays
let copiedArr = [...arr];
console.log(copiedArr); // Output: [1, 2, 3]
// Copying objects
let copiedObj = { ...obj };
console.log(copiedObj); // Output: { a: 1, b: 2 }     
// Using spread operator in function calls
function sum(x, y, z) {
  return x + y + z;
} 
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
// Using spread operator with strings
let str = "Hello";
let chars = [...str];
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']  
// Using spread operator to convert NodeList to Array (in browser environment)
// let nodeList = document.querySelectorAll('div');
// let nodeArray = [...nodeList];
// console.log(nodeArray);  
// Using spread operator with Sets
let mySet = new Set([1, 2, 3]);
let setArray = [...mySet];
console.log(setArray); // Output: [1, 2, 3]
// Using spread operator with Maps
let myMap = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
let mapArray = [...myMap];
console.log(mapArray); // Output: [[1, 'a'], [2, 'b'], [3, 'c']]  
// Using spread operator to find max in an array
let nums = [10, 5, 20, 15];
let maxNum = Math.max(...nums);
console.log(maxNum); // Output: 20  
// Using spread operator to create a new object with updated properties
let updatedObj = { ...obj, b: 20, c: 30 };
console.log(updatedObj); // Output: { a: 1, b: 20, c: 30 }
// Using spread operator to flatten an array (one level deep)
let nestedArr = [1, 2, [3, 4], 5];
let flattenedArr = [].concat(...nestedArr);
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5]   
// Using spread operator to add elements to the beginning of an array
let extendedArr = [0, ...arr];
console.log(extendedArr); // Output: [0, 1, 2, 3]
// Using spread operator to add elements to the end of an array
let extendedArrEnd = [...arr, 4];
console.log(extendedArrEnd); // Output: [1, 2, 3, 4]
// Using spread operator to create a shallow copy of an array and modify it
let modifiedArr = [...arr];
modifiedArr.push(4);
console.log(modifiedArr);
  // Output: [1, 2, 3, 4]// Original array remains unchanged
console.log(arr); 
  // Output: [1, 2, 3]// Using spread operator to create a shallow copy of an object and modify it
let modifiedObj = { ...obj };
modifiedObj.c = 3;
console.log(modifiedObj); 
  // Output: { a: 1, b: 2, c: 3 }// Original object remains unchanged
console.log(obj); 
  // Output: { a: 1, b: 2 }// Using spread operator to combine multiple arrays into one
let arr2 = [10, 11, 12];
let combinedArr = [...arr, ...arr1, ...arr2];
console.log(combinedArr); 
  // Output: [1, 2, 3, 7, 8, 9, 10, 11, 12]
// Using spread operator to combine multiple objects into one
let obj2 = { g: 7, h: 8 };
let combinedObj = { ...obj, ...obj1, ...obj2 };
console.log(combinedObj); 
  // Output: { a: 1, b: 2, e: 5, f: 6, g: 7, h: 8}  
