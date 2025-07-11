// important array methods 

//  const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }



// for each

// let obj = {
//     message: "Hello",
//     greet: function(names) {
//         names.forEach(function(name) {
//             console.log(this.message + " " + name);
//         },this); // Using thisArg to refer to obj
//     }
// };

// let names = ["Alice", "Bob", "Charlie"];
// obj.greet(names);


// let person = { greeting: "Hi" };

// let names = ["Alice", "Bob"];

// names.forEach(function(name) {
//     console.log(this.greeting + " " + name);
// }, person); // Using person as thisArg



// window.Object.prototype.role="Yes"
// let user = {
//     role: "Admin",
//     showUsers: function(users) {
//         users.forEach(function(user) {
//             console.log(`${this.role}: ${user}`);
//         });
//     }
// };

// user.showUsers(["Alice", "Bob", "Charlie"]);

// const users = [1,2,3,4,,,4];
// let data=users.map(element => {
//     console.log('hello');
// });
// console.log(data);


// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];
  
//   const names = users.map((user)=>(user.name));
//   console.log(names); // ["Alice", "Bob", "Charlie"]
  
// const numbers = [1, 2, 3, 4];

// const squaredObjects = numbers.map(num => ({ number: num, square: num ** 2 }));
// console.log(squaredObjects);
// /*
// [
//   { number: 1, square: 1 },
//   { number: 2, square: 4 },
//   { number: 3, square: 9 },
//   { number: 4, square: 16 }
// ]
// */



// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((item)=>item>2);
// console.log(evenNumbers); // Output: [2, 4, 6]


// let values = [0, "Hello", "", null, 42, false, undefined, "JavaScript"];

// let truthyValues = values.filter(Boolean); 
// // or
// // let truthyValues = values.filter((elm)=>Boolean(elm)); 

// console.log(truthyValues); // ["Hello", 42, "JavaScript"]



// let array=[10,2,3,4,5]
// let result=array.reduce((acc,crtval)=>{console.log(acc+" ");
// ;return acc+crtval})

// console.log(result);


// let numbers = [40, 100, 1, 5, 25, 10];
// // numbers.sort((a, b) => a - b);

// numbers.sort(function (a,b){return a-b});

// console.log(numbers); 
// // Output: [1, 5, 10, 25, 40, 100]


// let fruits = ["Banana", "orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); 
// // Output: ["Apple", "Banana", "Mango", "orange"]


// fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(fruits); 
// // Output: ["Apple", "Banana", "Mango", "orange"]


// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 30 }
//   ];
  
//   users.sort((a, b) => a.age - b.age);
//   console.log(users);
//   // Output: [{name: "Bob", age: 22}, {name: "Alice", age: 25}, {name: "Charlie", age: 30}]

  
//   users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(users);
// // Output: [{name: "Alice", age: 25}, {name: "Bob", age: 22}, {name: "Charlie", age: 30}]


// let numbers = [3, 8, 1, 6, 5, 2, 7, 4];

// numbers.sort((a, b) => (a % 2) - (b % 2) || a - b);
// console.log(numbers);
// // Output: [2, 4, 6, 8, 1, 3, 5, 7]


// let items = [
//     { name: "item1", price: 10 },
//     { name: "item2", price: 5 },
//     { name: "item3", price: 10 },
//     { name: "item4", price: 5 }
//   ];
  
//   items.sort((a, b) => a.price - b.price);
//   console.log(items);
//   // Output: 
//   // [{name: "item2", price: 5}, {name: "item4", price: 5}, {name: "item1", price: 10}, {name: "item3", price: 10}]

  
//   let numbers = [4, 2, 9, 1, 5];
//   let sortedNumbers = numbers.slice().sort((a, b) => a - b);
//   console.log(sortedNumbers); // [1, 2, 4, 5, 9]
//   console.log(numbers); // [4, 2, 9, 1, 5] (original array remains unchanged)

  
//   let numbers = [4, 2, 9, 1, 5];
// let sortedNumbers = numbers.slice().sort((a, b) => a - b);
// console.log(sortedNumbers); // [1, 2, 4, 5, 9]
// console.log(numbers); // [4, 2, 9, 1, 5] (original array remains unchanged)


// let numbers = [4, 2, 9, 1, 5];
// let sortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log(sortedNumbers); // [1, 2, 4, 5, 9]
// console.log(numbers); // [4, 2, 9, 1, 5] (original array remains unchanged)



// let numbers = [10, 20, 30, 40, 50];
// // let result = numbers.find((elem)=>elem>25);
// // let result = numbers.find((elem)=>elem>25);
// let result = numbers.find(function (elem){console.log("hello captain",elem);
// });

// console.log(result); 
// // Output: 30 (first number greater than 25)


// let numbers = [10, 20, 30, 40];


// let condition = {
//   min: 25
// };

// let result = numbers.find(function(num) {
//   return num > this.min;
// }, condition);

// console.log(result); 
// // Output: 30


// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex());
// // Expected output: 3


// let numbers = [10, 20, 30, 40];

// let allPositive = numbers.every(()=>{return true});

// console.log(allPositive); // true (because all numbers are > 0)


// let emptyArr = [];

// console.log(emptyArr.every(num => num > 10)); // true
// console.log(emptyArr.some(num => num > 10)); // true


// let arr4 = new Array(5).fill(1);
// console.log(arr4);


// let arr3 = [1, 2, 3, 4, 5];
// arr3.fill(100);
// console.log(arr3); // [1, 2, 100, 100, 100, 6, 7]


// let objArr = new Array(3).fill({ name: "John" });
// objArr[0].name = "Doe";

// console.log(objArr);
// // [{ name: "Doe" }, { name: "Doe" }, { name: "Doe" }]

// let objArr2 = new Array(3).fill(null).map(() => ({ name: "John" }));
// objArr2[0].name = "Doe";

// console.log(objArr2);
// // [{ name: "Doe" }, { name: "John" }, { name: "John" }]


// let colors = ["red", "green", "blue"];

// // Insert "yellow" and "pink" at index 1
// colors.splice(1, 0, "yellow", "pink");

// // console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
// let colors = ["red", "green", "blue"];

// // Insert "yellow" and "pink" at index 1
// colors.splice(1, , "yellow", "pink");

// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]







// let arr = [1, 2, 3, 4, 5,undefined];
// // let a=arr.copyWithin(0, 3,5); // Copies elements from index 3 to the start
// // console.log(arr);  // [4, 5, 3, 4, 5]

// // console.log(arr.includes(undefined));
// console.log(Symbol.iterator);


// let arr = [1,2,3];

// let iterator = arr[Symbol.iterator]();
// console.log(iterator);
