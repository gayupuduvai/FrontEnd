// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// Oops concept

// 1. 
class Person {
    talk(){
        return "Myself taking ...";
    }
}
const obj1 = new Person ();
const obj2 = new Person ();
const obj3 = new Person ();
console.log(obj1);
console.log(obj2);
console.log(obj3);

// 2. 
function Person1(name) {
    this.name = name;
}
Person1.prototype.talk = function talk(){
    return "Myself taking ...";
};

const obj4 = new Person1 ("XYZ");
const obj5 = new Person1 ("ABC");
const obj6 = new Person1 ("EFG");

console.log(obj4);
console.log(obj5);
console.log(obj6);

// 3. prototype inheritance
class Person2 {
    constructor(name) {
        this.name = name;
    }
    talk() {
        return "taking ..."
    }
}

class SuperHuman extends Person2 {
    fly () {
        return "Flying ...";
    }
}
 const obj7 = new SuperHuman("XYZH");
 const obj8 = new SuperHuman("ABCD");
 const obj9 = new SuperHuman("EFGH");

 console.log(obj7.fly());
 console.log(obj7.talk());
 console.log(obj8);
 console.log(obj9);
