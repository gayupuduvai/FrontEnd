// Tasks based on FUNCTION
// 1. Write a JavaScript function to print the “Hello World” message
function message() {
    var mssg = "Hello World"
    console.log(mssg, "||Print Greeting msg||");
}
message()

// 2. Write a function that returns the square of a number
function number(a) {
    return a * a;
}
var sqNum = number(5);
console.log(sqNum, "||square of a number||");

// 3. Write a function to convert Celsius to Fahrenheit
function celtoFahren(celsius) {
    var fahren = (celsius * 9 / 5 + 32);
    console.log(fahren, "||convert Celsius to Fahrenheit||");
}
celtoFahren(6)

// 4. Write a function to find the area of a given Rectangle
function AoT(length, width) {
    let area = length * width;
    console.log(area, "||Area of a Rectangle");
}
AoT(10, 5)

// 5. Write a function to find the area and perimeter of a Circle
function circle(radius) {
    var perimeter = 2 * 3.14 * radius;
    var area = Math.PI * radius * radius;
    console.log(`The PERIMETER of a circle is ${perimeter}`);
    console.log(`The AREA of a circle is ${area}`);
}
circle(3)

// 6. Write a function to reverse a number
function revNum(num) {
    var NumtoStr = num.toString();
    var rev_str = NumtoStr.split('').reverse().join('');
    var StrtoNum = parseInt(rev_str);
    return StrtoNum;
}
console.log(revNum(674), "Reversed Number");
console.log(revNum(263), "Reversed Number");

// 7. Count number of Vowels in String
function vowelcount(word) {
    word = word.toLowerCase();
    let count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            count++;
        }
    }
    return count;
}
console.log(vowelcount("Java Script Function"), "Vowels count");
// 8. Flatten array of arrays using JavaScript reduce:
var values = [[2, 6, 8], [3, 9, 12], [5, 10, 15]];
var flatternArray = values.reduce ((flatarray, resultarray) => {
    return flatarray.concat(resultarray);
}, []);
console.log(flatternArray, "flatten array");
// 9. Write a function to check if an input string is a palindrome
function plaindromestrg(aword) {
    aword = aword.toLowerCase();
    for (let j = 0; j < aword.length; j++) {
        if (aword[j] !== aword[aword.length - 1 - j]) {
            return false;
        }
    }
    return true;
}
console.log(plaindromestrg("Mom"), "||Check Plaindrome||");
console.log(plaindromestrg("Banana"), "||Check Plaindrome||");
console.log(plaindromestrg("Racecar"), "||Check Plaindrome||");
console.log(plaindromestrg("Madam"), "||Check Plaindrome||");

// 10. Write a function to calculate simple interest based on the principle amount:
function SimpleInt (Amount, Rate, Time) {
    let PrincpleAmt = Amount + Amount*Time*Rate;
    return PrincpleAmt;
}
console.log(SimpleInt(500, 50, 5), "Simple Interest");
console.log(SimpleInt(800, 100, 40), "Simple Interest");

// 11. Write a function to calculate compound interest based on the principle amount:
function CompoundInt(amount, rate, time, n) {
    var CI_result = amount * (Math.pow((1 + (rate / n)), (n * time)));
    return amount + CI_result; 
}
console.log(CompoundInt(26000, 6, 2, 2), "Compound Interest");
console.log(CompoundInt(15000, 3, 2, 2), "Compound Interest");

// 12. Write a function to generate a random number:
// 13. Write a function to find Factorial of a number:
function factorialNum (value) {
    if (value==1){
        return 1;
    }
    if (value <= 0) {
        return 0;
    }
    return value * factorialNum (value - 1);
}
console.log(factorialNum(7), "Factorial of a number");
console.log(factorialNum(3), "Factorial of a number");

// 14. Write a function to add unlimited numbers
// 15. Write a function to combine unlimited arrays
// 16. Write a function to find the count of a letter in a string
function letter_count(word, alphabet) {
    let count = 0;
    word = word.toLowerCase();
    for (var i=0; i<word.length; i++) {
        if (word[i]==alphabet){
            count++;
        }
    }
    return count;
}
console.log(letter_count("Gayathri", "a"), "The count of a in the word - Gayathri");
console.log(letter_count("Kayalvizhi", "i"), "The count of i in the word - Kayalvizhi");

// 17. Write a function to check if a number is Prime

function primeNum(numbers) {
    if (numbers <=1){
        return false;
    }
    for (var p = 2; p < numbers; p++){
        if (numbers % p === 0){
            return false;
        }
    }
    return true;
}
console.log(primeNum(3), "Check Prime Numbers");
console.log(primeNum(10), "Check Prime Numbers");