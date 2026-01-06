// nested-if.js
let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("User not found");
}
