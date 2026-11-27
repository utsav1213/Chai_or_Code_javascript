const name = "utsav";
const repoCount = 50;
// console.log(name+" "+ "has repo count "+repoCount)

// console.log(`${name} has a repo count of ${repoCount}`)

const gameName = new String("utsav-the-don"); //paste this into browser console. u will get to know about that this is an object means string is internally converted into the object

// console.log(name)
// console.log(gameName.__proto__)
// // console.log(name[0])
// console.log(gameName.__proto__ === String.prototype);
// // true

// console.log(gameName.__proto__.toUpperCase);
// // [Function: toUpperCase]

// console.log(gameName.__proto__.length);
// // undefined
// console.log(Object.getPrototypeOf(gameName));

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

//---------------diff-substring and slice----------------
// 1. Basic syntax
// string.slice(start, end);

// string.substring(start, end);

// - start: Index from where extraction begins (inclusive).
// - end: Index where extraction stops (exclusive).
// 2. Basic example
// let str = "JavaScript";

// console.log(str.slice(0, 4));
// console.log(str.substring(0, 4));

// Output for both:
// Java

// So far, both behave the same.
// 3. Difference 1: Negative indexes
// This is one of the biggest differences.

// slice() supports negative indexes.
// let str = "JavaScript";

// console.log(str.slice(-6));
// // Script

// Negative indexes count from the end of the string.

// substring() treats negative indexes as 0.
// let str = "JavaScript";

// console.log(str.substring(-6));
// // JavaScript

// 4. Difference 2: Start greater than end
// Consider:
// let str = "JavaScript";

// console.log(str.slice(4, 0));
// // ""

// console.log(str.substring(4, 0));
// // Java

// Why?
// - slice() returns an empty string when the start position is greater than the end position.
// - substring() automatically swaps the two positions.
// 5. Difference 3: Negative values combined with end index
// let str = "JavaScript";

// console.log(str.slice(-6, -1));
// // Scrip

// console.log(str.substring(-6, -1));
// // ""

// Because substring() converts both negative indexes to 0.

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
