// 1. String - text, in quotes or backticks
let str = "Hello, World!";
console.log("String:", str, "| typeof:", typeof str);

// 2. Number - integers and decimals share one type, no separate "int"/"float"
let intNum = 42;
let floatNum = 3.14;
console.log("Number (int):", intNum, "| typeof:", typeof intNum);
console.log("Number (float):", floatNum, "| typeof:", typeof floatNum);

// 3. Boolean - only true or false
let isActive = true;
console.log("Boolean:", isActive, "| typeof:", typeof isActive);

// 4. Undefined - declared, but never given a value
let notAssigned;
console.log("Undefined:", notAssigned, "| typeof:", typeof notAssigned);

// 5. Null - deliberately set to "nothing"
let emptyValue = null;
console.log("Null:", emptyValue, "| typeof:", typeof emptyValue);
// Note: typeof null is "object" — a long-standing JS quirk, not a mistake in your code

// 6. Symbol - a guaranteed-unique identifier, rarely used day-to-day
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId, "| typeof:", typeof uniqueId);

let obj = {name: "Alice", age: 30};
console.log("Object:", obj, "| typeof:", typeof obj);                                   
    

// String + Number → the + operator triggers string concatenation
console.log("5" + 3);
console.log(5 + "3");

// String - Number → the - operator only works on numbers, so it goes the OTHER way
console.log("5" - 3);
console.log("10" * "2");        // 20 (both coerced to numbers)

// Boolean context - used inside if/while/ternary, values are coerced to true/false
if ("hello") {
    console.log("Truthy - this runs");
}

if (0) {
    console.log("This never runs - 0 is falsy");
}

// Loose equality (==) triggers coercion before comparing
console.log(5 == "5");          // true ("5" coerced to 5)
console.log(0 == false);        // true (false coerced to 0)
console.log("" == false);       // true ("" coerced to 0, false coerced to 0)
console.log(null == undefined); // true (a special-case rule, not general coercion)

// Strict equality (===) — no type coercion
console.log(5 === "5");
console.log(0 === false);
console.log("" === false);
console.log(null === undefined);

// Template literals implicitly coerce embedded values to strings
let age = 25;
console.log(`Age: ${age}`);  // "Age: 25" - number silently became a string
    