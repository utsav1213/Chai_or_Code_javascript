// let score = "33Noc" //--> print-> NaN
// let score2 = undefined;//--> print-> NaN
// let score3 = true; //--> print-> 1
// let conver = Number(score3)
// console.log(typeof conver)
// console.log(conver)


// ------------------------------------hitesh sir---------------------------------
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log(+true) //-> 1
// console.log(-true) //-> -1
console.log(+"") //-> 0 bcz ""-> false
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// Why do these outputs happen?
// 1. "1" + 2 → "12"

// String + Number = String concatenation.

// 2. 1 + "2" → "12"

// Number + String = String concatenation.

// 3. "1" + 2 + 2 → "122"

// JavaScript evaluates from left to right:
// - "1" + 2 → "12"
// - "12" + 2 → "122"
// 4. 1 + 2 + "2" → "32"

// Again, left to right:
// - 1 + 2 → 3 (numeric addition)
// - 3 + "2" → "32" (string concatenation)
// The most important rule
// JavaScript's + operator behaves differently depending on operand types:
// - If string concatenation is involved, it converts the other operand to a string.
// - If both operands are numbers, it performs numerical addition.
// - Expressions are evaluated left to right because + is left-associative.
// Interview tip: The position of a string in an addition expression can completely change the output.
// // console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion