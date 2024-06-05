// 1. Arguments example

function sum() {
    console.log(arguments.length);
    console.log([0]);
    console.log([1]);
}
// console.log(sum);
sum(1, 5);

// 2. Example 2

function Sum() {
    let output = 0;
    for (let i = 0; i < arguments.length; i++) {
        output += arguments[1];
    }
    return output;
}
console.log(Sum(1, 5));
console.log(Sum(1, 5, 10));

// 3. Recursion Example

function recursion(n) {
    if (n === 0) return n;
    recursion(n - 1);
    console.log(n);
}
recursion(10);

// 4. Factorial of a number by using recursion

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

const number = prompt("Enter a postive number:");
if (number >= 0) {
    const result = factorial(number);
    console.log(`The Factorial of ${number} is ${result}`);
}
else {
    console.log("Enter a Positive Number.");
}