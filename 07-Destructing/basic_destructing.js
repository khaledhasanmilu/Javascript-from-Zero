const info = {
  name :'khaled',
  age :24,
  country :'Egypt',
  profession :'developer'
};

// Destructuring the object
const {name,age,country,profession} = info;
console.log(`Name: ${name}, Age: ${age}, Country: ${country}, Profession: ${profession}`);

const numbers = [10, 20, 30, 40, 50];
const [first, , , ,fifth]=numbers;
console.log(`Fifth number is: ${fifth}`);
console.log(`First Number is : ${first}`);

// More examples
const coordinates = [5, 10, 15];
const [x, y, z] = coordinates;
console.log(`X: ${x}, Y: ${y}, Z: ${z}`); 

// Additional example
const settings = {
  theme: 'dark',
  fontSize: 16
};

const { theme, fontSize } = settings;
console.log(`Theme: ${theme}, Font Size: ${fontSize}`);
