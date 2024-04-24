var employeeData = [
  {
    name: "Priya",
    EmpID: "IS5432",
    Position: "Lead",
    Age: 29,
  },
  {
    name: "Ashok",
    EmpID: "IS4332",
    Position: "Production",
    Age: 26,
  },
  {
    name: "Sam",
    EmpID: "IS5416",
    Position: "Editor",
    Age: 23,
  },
];

// forEach
employeeData.forEach((singleData) => console.log(singleData, "forEach"));

// keys, values, entries

var employee = {
  name: "Ashok",
  EmpID: "IS4332",
  Position: "Production",
  Age: 26,
};

let keyData = Object.keys(employee);
console.log(keyData, "keys");

var valueData = Object.values(employee);
console.log(valueData, "Values");

let entryData = Object.entries(employee);
console.log(entryData, "Entries");

//forEach process like map
var values = [5, 10, 15, 20, 25];
values.forEach((number) => {
  add = number + 5;
  console.log(add, "forEach like mapping");
});
