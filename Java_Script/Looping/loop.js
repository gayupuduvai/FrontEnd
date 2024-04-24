// // 1. Right Triangle Pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string, "RIGHT Triangle Pattern");
// // 2. Square Pattern
// let m = 5;
// let square = "";
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < m; j++) {
//         square += "*";
//     }
//     square += "\n";
// }
// console.log(square, "Square Pattern");
// // 3. Hollow Square Pattern
// var a = 5;
// let hollow_Sq = "";
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//         if (i === 0 || i === a - 1) {
//             hollow_Sq += "*";
//         }
//         else {
//             if (j === 0 || j === a - 1) {
//                 hollow_Sq += "*";
//             }
//             else {
//                 hollow_Sq += " ";
//             }
//         }
//     }
//     hollow_Sq += "\n";
// }
// console.log(hollow_Sq, "Hollow Square Pattern");
// // 4. Left Triangle Pattern

// let b = 5;
// let left_tri = "";
// for (let i = 1; i <= b; i++) {
//     for (let j = 0; j < i; j++) {
//         left_tri += "*";
//     }
//     left_tri += "\n";
// }
// console.log(left_tri, "LEFT Triangle Pattern");
// // 5. Downward Triangle Star Pattern
// let c = 5;
// let down_tri = "";
// for (let i = 0; i <= c; i++) {
//     for (let j = 0; j < c - i; j++) {
//         down_tri += "*";
//     }
//     down_tri += "\n";
// }
// console.log(down_tri, "Downward Triangle Pattern");
// // 6. Pyramid Star Pattern
// let d = 5;
// let pyramid = "";
// for (let i = 1; i <= d; i++) {
//     for (let j = 1; j <= d - i; j++) {
//         pyramid += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         pyramid += "*";
//     }
//     pyramid += "\n";
// }
// console.log(pyramid, "Pyramid Star Pattern");
// // 7. Reversed Pyramid Star Pattern
// let e = 5;
// let rev_pyramid = "";
// for (let i = 0; i < e; i++) {
//     for (let j = 0; j < i; j++) {
//         rev_pyramid += " ";
//     }
//     for (let k = 0; k < 2 * (e - i) - 1; k++) {
//         rev_pyramid += "*";
//     }
//     rev_pyramid += "\n";
// }
// console.log(rev_pyramid, "Reversed Pyramid Star Pattern");
// // 8. Hollow Triangle Star Pattern
// var f = 6;
// let hollow_tri = "";
// for (let i = 1; i <= f; i++) {
//     for (let j = 0; j < i; j++) {
//         if (i === f) {
//             hollow_tri += "*";
//         }
//         else {
//             if (j == 0 || j == i - 1) {
//                 hollow_tri += "*";
//             }
//             else {
//                 hollow_tri += " ";
//             }
//         }
//     }
//     hollow_tri += "\n";
// }
// console.log(hollow_tri, "Hollow Square Pattern");
// // 9. Hollow Pyramid Star Pattern
// let g = 5;
// let hollow_pry = "";
// for (let i = 1; i <= g; i++) {
//     for (let j = 1; j <= g - i; j++) {
//         hollow_pry += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         if (i === 1 || i === g) {
//             hollow_pry += "*";
//         }
//         else {
//             if (k === 0 || k === 2 * i - 2) {
//                 hollow_pry += "*";
//             }
//             else {
//                 hollow_pry += " ";
//             }
//         }
//     }
//     hollow_pry += "\n";
// }
// console.log(hollow_pry, "Hollow Pyramid Pattern");
// // 10. Diamond Pattern
// let h = 5;
// let diamond = "";
// // Upside pyramid
// for (let i = 1; i <= h; i++) {
//     for (let j = h; j > i; j--) {
//         diamond += " ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//         diamond += "*";
//     }
//     diamond += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= h - 1; i++) {
//     for (let j = 0; j < i; j++) {
//         diamond += " ";
//     }
//     for (let k = (h - i) * 2 - 1; k > 0; k--) {
//         diamond += "*";
//     }
//     diamond += "\n";
// }
// console.log(diamond, "Diamond Pattern");
// // 11. Hollow Diamond Pattern



// sum of numbers from 1 to 20 using while loop:
var j = 0;
var k = 1;
while (k <= 20) {
    j += k;
    k++;
}
console.log("The sum of numbers from 1 to 20 is:", j);
// Print EVEN numbers from 2 to 50:


let n = 2;
while (n <= 50) {
    console.log(n, "EVEN numbers from 2 to 50");
    n += 2;
}

