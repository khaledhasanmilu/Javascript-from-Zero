// For Loop Examples

// Problem 1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Problem 2: Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem 3: Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Problem 4: Sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);

// Problem 5: Factorial of 5
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log("Factorial of 5:", factorial);
