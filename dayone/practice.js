// 1. Declare three variables using const and one using let

const name = "Diksha";
const age = 20;
const course = "CSE AI & ML";

let city = "Pathankot";

console.log(name);
console.log(age);
console.log(course);
console.log(city);

/*
Why:
- const is used when the variable should not be reassigned.
- let is used when the value may change later.
*/


// 2. One line where == and === give different results

console.log(5 == "5", 5 === "5");

// Output:
// true false

/*
==  -> checks value after type conversion
=== -> checks both value AND data type

5 == "5"   → true
5 === "5"  → false
*/


// 3. Template literal using three variables

const student = "Diksha";
const subject = "JavaScript";
const topic = "Variables";

console.log(`My name is ${student}, I am studying ${subject}, and today's topic is ${topic}.`);


// 4. Safely access user.address.city without crashing

const user = {
    address: null
};

console.log(user.address?.city);