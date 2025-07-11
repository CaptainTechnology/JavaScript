// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// // console.log(fruits);
// // fruits[1] = "banana";
// // console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));


// array indexing 


// // let arr=[1,2,3,{name:"shah"}]
// // console.log(arr[-5]);
// console.log([].length);

// let arr = [1, 2, 3, 4, 5,6,7,8];

// // push() - Add element at the end
// let ar=arr.push(6);
// console.log(ar);

// console.log(arr); // [1, 2, 3, 4, 5, 6]

// pop() - Remove last element
// arr.pop()


// console.log(arr); // [1, 2, 3, 4, 5]

// // shift() - Remove first element
// arr.shift();
// console.log(arr); // [2, 3, 4, 5]

// unshift() - Add element at the beginning
// arr.unshift(1);
// console.log(arr); // [1, 2, 3, 4, 5]

// // slice() - Extract part of an array (does not modify original array)
// let newArr = arr.slice(1, 3);
// console.log(newArr); // [2, 3]

// // splice() - Modify an array (add/remove elements)
// arr.splice(2, 1, 10);
// console.log(arr); // [1, 2, 10, 4, 5]


let arr=[1,2,3,5,4]
// console.log(arr);
// let reversed = arr.reverse();
// console.log(reversed); // [3, 10, 1]
arr[100]=32;
console.log(arr);

console.log(arr[88]);
