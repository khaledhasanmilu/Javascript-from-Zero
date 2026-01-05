// Conditional Statements: switch case

// Problem 1: Day of the week
let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Problem 2: Simple calculator
let operator = "+";
let x = 10;
let y = 5;

switch (operator) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.log("Invalid operator");
}

// Problem 3: Grade system
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  default:
    console.log("Fail");
}
