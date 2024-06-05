// 1. Object Binding Method

// console.log(this);  Global Window object

let object1 = {
    firstName: "Priya",
    lastName: "Kumar"
};

let object2 = {
    firstName: "Arun",
    lastName: "Prasath"
};

const getFullName = function (city = "puducherry") {
    console.log(`${this.firstName} ${this.lastName}. I am from ${city}`);
};

// 1. call
console.log(getFullName.call(object1, "Cuddalore"), "example for call");
console.log(getFullName.call(object2), "example for call");

// 2. apply
console.log(getFullName.apply(object1, ["Cuddalore"]), "example for apply");
console.log(getFullName.apply(object2), "example for apply");

// 3. bind
console.log(getFullName.bind(object1, "Cuddalore"), "example for bind");
console.log(getFullName.bind(object2), "example for bind");

document
    .querySelector("button")
    .addEventListener("click", getFullName.bind(object1, "Cuddalore"));

// access
console.log(object1["getFullName"]);
console.log(object1.getFullName);
// console.log(object1.getFullName());

function trigger(e) {
    if (e.style.backgroundColor === "red") {
        e.style.backgroundColor = "blue";
        return;
    }
    e.style.backgroundColor = "red";
}
