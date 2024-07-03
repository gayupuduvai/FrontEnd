// // Different ways to create object
// // Singleton pattern:

// var object = new (function () {
//     this.name = "Sudheer";
//     })();
// console.log(object);

// // 5. What is the purpose of the array slice method?
//     let arrayIntegers = [1, 2, 3, 4, 5];
//     console.log(arrayIntegers);
//     let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
//     console.log(arrayIntegers1);
//     let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
//     console.log(arrayIntegers2);
//     let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
//     console.log(arrayIntegers3);

// // 1. Arrow function

// const arrowFunc1 = (a, b) => a + b; // Multiple parameters
// console.log(arrowFunc1(10,2));

// const arrowFunc2 = a => a * 10; // Single parameter
// console.log(arrowFunc2(5));

// const arrowFunc3 = () => {} // no parameters
// console.log(arrowFunc3);

// // 2. Impure function
// let numberArray = [];
//       const impureAddNumber = (number) => numberArray.push(number);
//       console.log(impureAddNumber(3));
//       console.log(numberArray);

//       //Pure
//       const pureAddNumber = (number) => (argNumberArray) =>
//         argNumberArray.concat([number]);
//       console.log(pureAddNumber(6)(numberArray));
//     //   console.log(argNumberArray(2));

// // 3. Switch case
//     let counter = 0;
//     switch (counter) {
//       case 0: {
//         let name = "XYZ";
//         console.log(name);
//         break;
//       }
//       case 1: {
//         let name = "SDFG"; // No SyntaxError for redeclaration.
//         console.log(name);
//         break;
//       }
//     }

// // 4. Memoization
// const memoizAddition = () => {
//     let cache = {};
//     return (value) => {
//       if (value in cache) {
//         console.log("Fetching from cache");
//         return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//       } else {
//         console.log("Calculating result");
//         let result = value + 20;
//         cache[value] = result;
//         return result;
//       }
//     };
//   };
//   // returned function from memoizAddition
//   const addition = memoizAddition();
//   console.log(addition(20)); //output: 40 calculated
//   console.log(addition(20)); //output: 40 cached

//   // 5. 

//   let a = 10;
// if (true) {
//   let a = 20;
//   console.log(a, "inside");
// }
// console.log(a, "outside");

   