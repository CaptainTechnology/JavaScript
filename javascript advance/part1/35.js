// array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);




// const arr = [5,undefined,43];
// const [a = 10, b = 20] = arr;

// console.log(a); // 5
// console.log(b); // 20 (default)

// let x = 1, y = 2;
// [x, y] = [y];

// console.log(x); // 2
// console.log(y); // 1


// let car = new Object();
// car.brand = "Toyota";
// car.model = "Camry";
// car.year = 2022;

// let car={
//     name:"Toyotoa",
//     "valuesss":true,
//     "123":false
// }



// const obj = {
//     "first name": "Alice",
//     "123abc": "Invalid Key",
//     "class":"BCA"
//   };
  
//   console.log(obj["first name"]); // ❌ Syntax Error
//   console.log(obj["class"]); // ❌ Syntax Error
  
  // const person = {
  //   first: "Alice",
  //   "age-group": "Adult"
  // };
  
  // console.log(person["first"]); // "Alice"
  // console.log(person["age-group"]); // "Adult"
  
//   let person = { name: "John" };
// person.age = 30; // Using dot notation
// person["city"] = "New York"; // Using bracket notation
// // person["gg hh"]=88;
// // console.log(person);
// // delete person["aged"];
// // console.log(person["age"]); // Output: undefined
// console.log(delete person["citys"]);


// const person = { name: "Alice", age: 25, city: "New York",valu:{"hello":"done"} };

// // for (let key in person) {
// //   console.log(`${key}: ${person[key]}`);
// // }
// const values = Object.values(person);
// console.log(values); // ["Alice", 25, "New York"]

// const entries = Object.entries(person);
// console.log(entries);
// // [["name", "Alice"], ["age", 25], ["city", "New York"]]


// const key1 = "firstName";
// const key2 = "age";

// const user = {
//   key1: "Alice",
//   [key2]: 25,
// };

// console.log(user); // { firstName: "Alice", age: 25 }


// const user = { username: "john_doe", email: "john@example.com" };

// // Assign different variable names
// const { username: userName, email: userEmail } = user;

// console.log(username); // Output: john_doe
// console.log(userEmail); // Output: john@example.com


// const user = { username: "john_doe",age:55 };

// const { username, age = 30 } = user;

// console.log(username); // Output: john_doe
// console.log(age);      // Output: 30 (default value)

// const person = { name: "Alice", age: 25, city: "London", country: "UK",global:"universe" };

// const { name, age, ...location } = person;

// console.log(name);     // Output: Alice
// console.log(age);      // Output: 25
// console.log(location); // Output: { city: "London", country: "UK" }


// let obj = { name: "Alice", age: 25 };
// let jsonString = JSON.stringify(obj);
// console.log(typeof jsonString); // Output: '{"name":"Alice","age":25}'
// console.log(typeof obj);


// let parsedObj = JSON.parse('{"name":"Alice","age":25,"jj":66}');
// console.log(parsedObj); // Output: Alice

// function

// // greet();
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("John")); // Hello, John!


// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }
// greet(undefined); // Output: Hello, Guest!


// function sum(...numbers) {
//   console.log(numbers);
  
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10


// console.log("Start");

// setTimeout(hi, 2000);
// function hi() {
//   console.log("This runs after 2 seconds");
// }
// console.log("End");


// function multiply(a, b) {
//   if (b === undefined) {
//       return a * a;  // If only one argument, assume it's square
//   }
//   return a * b;
// }
// console.log(multiply(4));   // Output: 16
// console.log(multiply(4, 5)); // Output: 20


// let total = 0;
// function addToTotal(value) {
//     total += value;
// }
// addToTotal(5);
// addToTotal(5);
// console.log(total); // Changes external state



// function* numberGenerator() {
//   yield 1;
//   yield console.log("helo mr captain") ;
//   yield 3;
// }

// const gen = numberGenerator();
// console.log(gen.next().value); // Output: 1
// console.log(gen.next().value); // Output: 2

// console.log(gen.next().value); // Output: 3
