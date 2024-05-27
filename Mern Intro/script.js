// let and const will also be HOISTED same as like var

// TDZ starts at the Memory Creation 
console.log(a);
// TDZ ends at the execution of code
var a = "Hello";
console.log(a);


// console.log(b);
// ReferenceError: Cannot access 'b' before initialization  will occur
let b = "Hello";
console.log(b);

// console.log(c);
// ReferenceError: Cannot access 'b' before initialization  will occur
const c = "Hello";
console.log(c);


const name = "Priya";
console.log(greeting(name));
function greeting(name) {
    return "Hello" + " " + name;
}
console.log(name);