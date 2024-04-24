// Object Creation METHOD 1
const myData = {
    name: "Priya",
    age: 28,
    mobile: 1523648795,
    address: "No. 01, Street name, City, State, Country",
    pincode: 4100314,
    email: "priya1234@gmail.com",
};
console.log(myData, "METHOD 1")

// Object Creation METHOD 2

const myObj = {};
myObj.CourseName = "B.Tech-ECE";
myObj.duration = "4 years";
myObj.semester = "8 sems";
console.log(myObj, "METHOD 2")
let my_Data = {};
my_Data.CourseName = "B.Sc-Maths";
my_Data.duration = "6 years";
my_Data.semester = "3 sems";
console.log(my_Data, "Method II")


// Object Creation METHOD 3

const food = new Object();
food.name = "Dosa";
food.rate = 40;
food.quantity = "3 sets";
console.log(food, "METHOD 3")

// Object Accessing Methods - It has 3 methods

// 1. dot property accessing method

var dotPropAccess = myData.email;
console.log(dotPropAccess, "dot method");

// 2. Square Accessing method

var SquareAccess1 = my_Data["CourseName"];
var SquareAccess2 = my_Data["duration"];
console.log(SquareAccess1, "square method")
console.log(SquareAccess2, "square method")

// 3. destructuring method
const { name, quantity } = food;
console.log(name, quantity, "Destructuring method");