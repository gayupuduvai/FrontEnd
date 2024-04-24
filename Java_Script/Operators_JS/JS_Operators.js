// length
var country = "India";
document.write(country.length);
console.log(country.length, "India-length")

var data = "Hello World";
console.log(data.length, "Hello World-length")

// uppercase and lowercase
let upperData = data.toUpperCase();
console.log(upperData, "uppercase")

const lowerData = data.toLowerCase();
console.log(lowerData, "lowercase")

// index

var indexOfData = data.indexOf("r");
console.log(indexOfData, "index-Of-Data")

var lastindexOfData = data.lastIndexOf("l");
console.log(lastindexOfData, "last-index-of-data")
document.write(lastindexOfData);

// concat

var first_name = "Ram";
var LastName = "Prasath";

let fullName = first_name.concat(" " + LastName);
console.log(fullName, "concat");

//Trim
let course = "     Python 120 days    ";
console.log(course.trim());
console.log(course.trimEnd())
console.log(course.trimStart())


//Slice

var animal = "dog cat camel";
console.log(animal.slice(5, 8), "slice")
console.log(animal.substring(6, -4), "sub-string")
console.log(animal.substr(2, 5))

// Repeat, Replace

var info = "Welcome to New World!!!";
console.log(info.repeat(1), "repeat")
console.log(info.repeat(2), "repeat")
console.log(info.replace("to New World!!!", "Home!!!"))