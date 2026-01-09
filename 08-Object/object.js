/**************************************
 * JAVASCRIPT OBJECT: ALL-IN-ONE FILE
 **************************************/

/*====================================
  1. Object Creation
====================================*/

// Object Literal
const person = {
  name: "Khaled",
  age: 22,
  isStudent: true
};

// new Object()
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";

// Constructor Function
function User(username, email) {
  this.username = username;
  this.email = email;
}
const user1 = new User("milu", "milu@gmail.com");

// Object.create()
const human = {
  species: "Homo sapiens"
};
const man = Object.create(human);
man.name = "Rahim";

/*====================================
  2. Access Object Properties
====================================*/

console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

/*====================================
  3. Add, Update, Delete Property
====================================*/

person.city = "Dhaka";           // Add
person.age = 23;                 // Update
delete person.isStudent;         // Delete

/*====================================
  4. Object Methods
====================================*/

const student = {
  name: "Hasan",
  roll: 10,
  greet: function () {
    return `Hello, ${this.name}`;
  }
};

console.log(student.greet());

/*====================================
  5. this Keyword
====================================*/

const laptop = {
  brand: "HP",
  showBrand() {
    console.log(this.brand);
  }
};
laptop.showBrand();

/*====================================
  6. Object Destructuring
====================================*/

const { name, age } = person;
console.log(name, age);

/*====================================
  7. Nested Object
====================================*/

const company = {
  name: "TechSoft",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

console.log(company.address.city);

/*====================================
  8. Object Looping
====================================*/

// for...in loop
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys()
console.log(Object.keys(person));

// Object.values()
console.log(Object.values(person));

// Object.entries()
console.log(Object.entries(person));

/*====================================
  9. Object Copy
====================================*/

// Shallow Copy
const copy1 = Object.assign({}, person);
const copy2 = { ...person };

/*====================================
  10. Object Comparison
====================================*/

const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false (reference different)

/*====================================
  11. Freeze & Seal
====================================*/

const settings = {
  theme: "dark"
};

Object.freeze(settings); // cannot change or add
// settings.theme = "light"; ❌

const profile = {
  name: "Milu"
};
Object.seal(profile); // can update, cannot add/delete
profile.name = "Hasan";

/*====================================
  12. hasOwnProperty
====================================*/

console.log(person.hasOwnProperty("name")); // true

/*====================================
  13. Getter & Setter
====================================*/

const account = {
  firstName: "Khaled",
  lastName: "Milu",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(account.fullName);
account.fullName = "Hasan Milu";

/*====================================
  14. Optional Chaining
====================================*/

console.log(company?.address?.city);
console.log(company?.owner?.name); // undefined, no error

/*====================================
  15. JSON with Object
====================================*/

const jsonData = JSON.stringify(person);
const objData = JSON.parse(jsonData);

console.log(jsonData);
console.log(objData);

/*====================================
  16. Object as Function Parameter
====================================*/

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printUser(person);

/*====================================
  17. Computed Property Name
====================================*/

const keyName = "score";
const game = {
  [keyName]: 100
};
console.log(game.score);

/*====================================
  18. Check Property Exists
====================================*/

console.log("name" in person); // true

/*====================================
  END OF OBJECT ALL-IN-ONE
====================================*/
