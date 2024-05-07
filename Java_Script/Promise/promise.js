// Tasks based on PROMISE
// 1. EVEN or ODD
var value = 10;
let promise_value = new Promise(function (pass, fail) {
  if (value % 2 == 0) {
    pass(`${value} is an EVEN number`);
  } else {
    fail(`${value} is an ODD number`);
  }
});
promise_value.then((passOP) => {
  console.log(passOP);
});
promise_value.catch((failOP) => {
  console.log(failOP);
});
console.log(promise_value, "promise_value");

// 2. postive or negative
var number = -5;
var validate = new Promise(function (pos, neg) {
  if (number >= 0) {
    pos(`${number} is an postive number`);
  } else {
    neg(`${number} is an negative number`);
  }
});
console.log(validate, "validate");
