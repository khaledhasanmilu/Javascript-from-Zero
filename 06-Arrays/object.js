let student ={
  name:"student",
  cgpa:3.80,
  university:"UIU",
  goodstudent:true
};
console.log(student);
let result = student.name;
console.log(result);
student.cgpa = 3.90;
console.log(student);
student.department = "CSE";
console.log(student);
// Loop through object properties
for(let num in student){
  console.log(num);
}
// // Check if a property exists in the object
console.log("university" in student); 
// // Get all keys of the object
console.log(Object.keys(student));
// // Get all values of the object
console.log(Object.values(student));
// // Remove a property from the object
delete student.goodstudent;
console.log(student); 