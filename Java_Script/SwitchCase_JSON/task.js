// Check Month number and print out its Name
// var month = parseInt(prompt("Enter the month:"));
// switch (month) {
//     case 1:
//         console.log(month, "January Month")
//         break;
//     case 2:
//         console.log(month, "February Month")
//         break;
//     case 3:
//         console.log(month, "March Month")
//         break;
//     case 4:
//         console.log(month, "April Month")
//         break;
//     case 5:
//         console.log(month, "May Month")
//         break;
//     case 6:
//         console.log(month, "June Month")
//         break;
//     case 7:
//         console.log(month, "July Month")
//         break;
//     case 8:
//         console.log(month, "August Month")
//         break;
//     case 9:
//         console.log(month, "September Month")
//         break;
//     case 10:
//         console.log(month, "October Month")
//         break;
//     case 11:
//         console.log(month, "November Month")
//         break;
//     case 12:
//         console.log(month, "December Month")
//         break;
//     default:
//         console.log(month, "Invalid data")
// }

// Determine the letter is vowel or consonant:
// let letter = prompt("Please enter the letter:");
// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log(letter, "is an Vowel");
//         break;
//     default:
//         console.log(letter, "is an Consonant");
// }


// Calculate area of square, rectangle

// let shape = prompt("Enter the shape:");
// var area;
// switch (shape) {
//     case "square":
//         let a = prompt("Enter the sides of a square");
//         area = a * a;
//         console.log(`Area of a Square is ${area}`);
//         break;
//     case "rectangle":
//         let length = prompt("Enter the length of a rectangle");
//         let width = prompt("Enter the width of a rectangle");
//         area = length * width;
//         console.log(`Area of a rectangle is ${area}`);
//         break;
//     case "triangle":
//         let base = prompt("Enter the base of a triangle");
//         let height = prompt("Enter the height of a triangle");
//         area = (base * height) / 2;
//         console.log(`Area of a triangle is ${area}`);
//         break;
//     default:
//         console.log("Invaild data entered");
// }

// Determine the month based on its days:

// var month = prompt("Enter the month");
// switch (month) {
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//         console.log(`${month} has 31 days`);
//         break;
//     case "April":
//     case "June":
//     case "September":
//     case "November":
//         console.log(`${month} has 30 days`);
//         break;
//     case "February":
//         console.log(`${month} has 28 days`);
//         break;
//     default:
//         console.log(month, "Entered invalid data");
// }

// Calculate the angle (acute, right, obtuse, straight)

// let angleType = parseInt(prompt("Enter the angle type:"));
// var degree = prompt ("Please enter the degree:");
// switch (angleType) {
//     case "acute": 
//         degree < 90;
//         console.log(`${degree} is an Acute angle`);
//         break;
//     default:
//         console.log(`${degree} is invalid entry`);
// }


// Convert given temperature from Celsius to Fahrenheit:

// var temperature=prompt("Enter the temperature in celsius:");
// var temp_fahren;
// switch (temperature) {
//     fahren = temperature * 9/5 + 32;
// }

// Century year or not:

var year = prompt("Enter the year:");
switch(year % 100) {
    case 0:
        console.log(`${year} is a Century Year`);
        break;
        default:
            console.log(`${year} is not a century year`);
}