// // 1. Constructor functions using object

// function Person (first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor = eye;
// }

// Person.prototype.language = "Tamil";
// Person.prototype.getFullname = function(){
//     return this.firstName + " " + this.lastName;
// };

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");

// mySelf.language = "English";
// mySelf.voteEligibility = "True";

// console.log(myFather, "myFather");
// console.log(myMother, "myMother");
// console.log(mySister, "mySister");
// console.log(mySelf, "mySelf");
// console.log(mySelf.language, "mySelf-Language");
// console.log(mySelf.getFullname(), "myself-FullName");

// // 2. General Methods in Objects

// console.log(Object.keys(mySelf));
// console.log(Object.values(mySelf));
// console.log(Object.entries(mySelf));
// console.log(Object.assign(myFather, mySelf));
// // console.log(Object.create(mySister));
// // console.log(Object.fromEntries());


// // 3. Property Management Methods
// console.log(Object.getPrototypeOf(myFather));
// console.log(Object.getOwnPropertyNames(myMother));
// console.log(Object.getOwnPropertyDescriptors(myMother), "Property Descriptors");
// console.log(Object.defineProperty(myMother, "year", {value:"1967"}), "define property");
// console.log(Object.getOwnPropertyDescriptor(mySister, ));


// const Obj1 = {counter:0};
// // console.log(Object.defineProperty(Obj1, "reset", {
// //     get : function () {this.counter = 0;}
// // }));
// console.log(Object.defineProperty(Obj1, "increment", {
//     get : function () {this.counter++;}
// }));



