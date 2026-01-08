const add = (a, b) => {
  return a + b;
};

//short arrow function
const add = (a, b) => a + b;

const double = x => x * 2;

//with no parameters
const greet = () => {
  console.log("Hello!");
};

//Arrow functions with arrays using  forEach
const fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
  console.log(fruit);
});

//with objects

const users = [
  { name: "Alex", age: 25 },
  { name: "Sam", age: 30 }
];

users.forEach(user => {
  console.log(user.name);
});
