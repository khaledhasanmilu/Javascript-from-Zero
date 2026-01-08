let guess = [1,"khaled","Banana",3.14,true];
console.log(guess);
console.log(guess[2]);

// Modify an element in the array
guess[1] = "Ahmed";
console.log(guess);
// Get the length of the array
console.log(guess.length);  
// Add a new element to the array
guess.push("New Element");
console.log(guess); 
// Remove the last element from the array
guess.pop();
console.log(guess); 
// Loop through the array
for(let i = 0; i < guess.length; i++) {
    console.log(guess[i]);
} 
// Check if an element exists in the array
console.log(guess.includes("Banana"));  
// Find the index of an element
console.log(guess.indexOf(3.14));  
// Remove an element by index
guess.splice(2, 1); 
console.log(guess); 
// Create a new array from a portion of the original array
let newArray = guess.slice(1, 4);
console.log(newArray);  
// Concatenate two arrays
let anotherArray = [false, "Orange"];
let combinedArray = guess.concat(anotherArray);
console.log(combinedArray);
// Sort the array (note: this works best with strings)
let stringArray = ["Banana", "Apple", "Orange"];
stringArray.sort();
console.log(stringArray);
// Reverse the array
stringArray.reverse();
console.log(stringArray);
// Join array elements into a string
let joinedString = stringArray.join(", ");
console.log(joinedString);
