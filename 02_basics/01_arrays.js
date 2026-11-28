//array
//An array is a special type of object that allows us to store multiple values inside a single variable.
const myArr = [1, 2, 3, 4, 5, 6];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[1])
// console.log(myArr)

//Array methods
// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// console.log(myArr)

myArr.unshift(8);
myArr.shift();

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join("-")
// console.log(typeof newArr)

// const copyArr = myArr
// copyArr.push(10)
// console.log(myArr)

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

//note->>>>>>>>>>>>>>> slice will not make the changes in the original array but splice will remove that particular range from that array and in original array only the remaining element will be stayed
