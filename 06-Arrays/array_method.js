//map method
const number = [1,2,3,4];
const number2 = number.map(num=>num*2);
console.log(nummber2);
//object
const users = [
  { name: "Milu", age: 22 },
  { name: "Hasan", age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // ["Milu", "Hasan"]

//find
const find = number.find(num=>num>2);
console.log(find);

//filter
const filter = number.filter(num=>num>2);
console.log(filter);
