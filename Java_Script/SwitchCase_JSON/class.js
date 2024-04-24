// Create calculator using SWITCH CASE
const operator = prompt("Enter an Operator:");
let b1 = parseInt(prompt("Enter the b1 value"));
let b2 = parseInt(prompt("Enter the b2 value"));
var result;
switch (operator) {
    case "-":
        result = b1 - b2;
        console.log(result, "firtst case - sub oper");
        break;
    case "+":
        result = b1 + b2;
        console.log(result, "second case - add oper");
        break;
    case "*":
        result = b1 * b2;
        console.log(result, "third case - multiple oper");
        break;
    case "/":
        result = b1 / b2;
        console.log(result, "fourth case - divide oper");
        break;
    default:
        console.log("Invalid Operator");
}