let Studentsdata = [
  {
    name: "sangeetha",
    Regno: 474,
    course: "Mern",
    duration: "6 months",
  },
  {
    name: "Gayu",
    Regno: 472,
    course: "Mean",
    duration: "6 months",
  },
  {
    name: "Hemanth",
    Regno: 476,
    course: "phython-fullstack",
    duration: "6 months",
  },
];

Studentsdata.forEach((e) => console.log(e));

var student = {
  name: "Hemanth",
  Regno: 476,
  course: "phython-fullstack",
  duration: "6 months",
};

// Keys
const keyData = Object.keys(student);
console.log(keyData);

// Values
var ValueData = Object.values(student);
console.log(ValueData);

// entries
var entryData = Object.entries(student);
console.log(entryData);

// array.forEach(element => {

// });
