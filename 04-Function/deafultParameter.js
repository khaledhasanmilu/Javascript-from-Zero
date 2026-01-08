// Default Parameters in Functions
const great = (name = "Guest",id=0,value = "") => {
    return `Hello, ${name}! Your id is ${id} and value is ${value}.`;
}
console.log(great()); // Uses all default parameters
console.log(great("Alice")); // Overrides the name parameter
console.log(great("Bob", 42));    
console.log(great("Charlie", 7, "Special Value"));

// Additional examples
const multiply = (a = 1, b = 1) => {
    return a * b;
} 
console.log(multiply()); // Uses default parameters
console.log(multiply(5)); // Overrides the first parameter
console.log(multiply(4, 3)); // Overrides both parameters


//User examples
const greetUser = (username = "User", greeting = "Welcome") => {
    return `${greeting}, ${username}!`;
} 
console.log(greetUser()); // Uses default parameters
console.log(greetUser("Alice")); // Overrides the username parameter
console.log(greetUser("Bob", "Hello")); // Overrides both parameters  


// More examples
const calculateArea = (length = 1, width = 1) => {
    return length * width;
}   
console.log(calculateArea()); // Uses default parameters
console.log(calculateArea(5)); // Overrides the length parameter
console.log(calculateArea(4, 3)); // Overrides both parameters  



// Even more examples
const createUser = (name = "Anonymous", age = 0, role = "Guest") => {
    return { name, age, role };
} 
console.log(createUser()); // Uses default parameters
console.log(createUser("Alice")); // Overrides the name parameter
console.log(createUser("Bob", 25, "Admin")); // Overrides all parameters  