// // let and const will also be HOISTED same as like var

// // TDZ starts at the Memory Creation
// console.log(a);
// // TDZ ends at the execution of code
// var a = "Hello";
// console.log(a);


// // console.log(b);
// // ReferenceError: Cannot access 'b' before initialization  will occur
// let b = "Hello";
// console.log(b);

// // console.log(c);
// // ReferenceError: Cannot access 'b' before initialization  will occur
// const c = "Hello";
// console.log(c);


// const name = "Priya";
// console.log(greeting(name));
// function greeting(name) {
//     return "Hello" + " " + name;
// }
// console.log(name);

// function addition(i) {
//     result = i + i;
//     console.log(result);
// } addition(10)

// 3. Scopes
let a = [2, 4, 5];
// let arr = [3, 5, 7];
// function double(arr) {
//     let O = [];
//     for (x of arr) {
//         O.push(x ** 2);
//     }
//     return O;
// }
// let data = double();
// console.log(data);

function map(func, a) {
    let O = [];
    for (let i = 0; i < a.length; i++) {
        O.push(func(a[i], i, a));
    }
    return O;
}
let result1 = map((v) => v ** 2, a);
let result2 = map((v) => v ** 3, a);
console.log(result1);
console.log(result2);