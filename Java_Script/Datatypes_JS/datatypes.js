var name = "Priya";
document.write("Priya")
console.log(name, "name user");
var name1; //variable declaration
console.log(name1, "name1 user");
name1 = "Ramu"; //variable definition
var student_data = {
    RollNo: "11TC2416",
    Name: "Latha",
    Age: 18,
    Rank: 6
}
console.log(student_data, "student data");
var course_array = ["HTML", "CSS"];
console.log(course_array, "Course Array");
var active = true;

// reassign and redeclare

//by using var 
var amount = 8000;
var amount; //redeclare
amount = 10000; //reassign

// by using let
let age = 54;
// let age;  cannot be redeclared
age = 20;  // can be reassigned
console.log("age", age)

// by using const
const student_info = "Regular";
// const student_info;  cannot be redeclared
// student_info = "Part-time";  cannot be reassigned
console.log("student_info", student_info)





