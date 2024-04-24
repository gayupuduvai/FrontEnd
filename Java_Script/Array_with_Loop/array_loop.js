// 1. Array with for loop:
var media = ["television", "radio", "facebook", "instagram", "twitter"];
for (let i = 0; i < media.length; i++) {
    console.log(media[i], "Array with for loop");
}
// 2. Array with for-of loop:
var datas = [500, 600, 300, 400, 100];
for (let data of datas) {
    console.log(data, "Array with for-of loop");
}
// 3. Array with for-in loop:
const percentages = ["20%", "30%", "50%", "80%", "10%"];
for (let percentage in percentages) {
    console.log(percentages[percentage], "Array with for-in loop");
}
// 4. Ternary Operator:
let age = 23;
let Ternaryop = age >= 18 ? `eligilble` : `not eligible`;
console.log(Ternaryop, "ternary operator");