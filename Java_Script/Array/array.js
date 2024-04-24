// 1. Array creation
var flowers = ["rose", "lilly", "jasmine"];
var myArray = ["Priya", "IS5164", 869423786, "priya09@gmail.com"]
console.log(flowers, "array list");
console.log(myArray, "array_list1");

// 2. Index in array (Accessing Array Elements)

let foods = ["Idley", "Dosa", "Chappathi", "Poori", "Magi", "Noodles"];
let food = foods[3];
console.log(food, "Index of array");

// 3. Changing array element

const Games = ["Basketball", "Throwball", "Circket", "Football", "Running"];
Games[1] = "Highjump";
console.log(Games, "Array element changing");

// 4. Using the JavaScript Keyword new

const works = new Array("IT", "Teaching", "Automobile", "Civil Engineer", "Nurse");
console.log(works, "New Array");

// Array Methods:
// 1. Array length
var transport = ["Bus", "Auto", "Cab", "Train", "FLIGHT", "Bicycle"];
console.log(transport.length, "Array length");
// 2. Array toString()
console.log(transport.toString(), "Array to String");
// 3. Array at()
console.log(transport.at(4), "Array at");
// 4. Array join()
console.log(transport.join(", "), "Array join");
// 5. Array pop()
console.log(transport.pop(), "Array POP");
console.log(transport, "POP");
// 6. Array push()
console.log(transport.push("By-walk"), "Array Push");
console.log(transport, "PUSH");
// 7. Array shift()
console.log(transport.shift(), "Array Shift");
console.log(transport, "SHIFT");
// 8. Array unshift()
console.log(transport.unshift("Bus"), "Array UnShift");
console.log(transport, "UN-SHIFT");
