// =====================================================
// 📘 this and window in Global Execution Context
// =====================================================

/*
🔍 What is `this`?
- `this` refers to the object that is currently executing the code.
- In the global context, its value depends on the environment:
  - In browsers → `window`
  - In Node.js → module.exports ({} by default)
*/

// =====================================================
// 🌐 In Browser Environment
// =====================================================

// Uncomment and run in browser console:


// console.log(this);              // 👉 window
// console.log(window);            // 👉 window
// console.log(this === window);   // 👉 true


// ✅ Global variables with var become properties of window

// var username = "Ateek";
// console.log(window.username);  // 👉 "Ateek"
// console.log(this.username);    // 👉 "Ateek"

// window.greet()
// function greet(){
//   console.log("this is greet function")
// }

// console.log(simple);
// window.simple()
// simple()

// var simple=function (){
//   console.log("This is var testing function");
// }
// window.simple()

// ❌ let and const are NOT added to window

// let age = 25;
// console.log(window.age);        // 👉 undefined
// console.log(this.age)


// =====================================================
// 🔄 Inside a Function (Browser, non-strict mode)
// =====================================================

// Uncomment and test in browser:

// function showThis() {
//   console.log(this); // 👉 window
// }
// showThis();


// 🔒 Strict mode changes the behavior:

// "use strict";
// function strictFunc() {
//   console.log(this); // 👉 undefined
// }
// strictFunc();



// =====================================================
// 🟢 Arrow Function in Global Scope (Browser)
// =====================================================

// const arrow = () => {
//   console.log(this); // 👉 window (inherits from global scope)
// };
// arrow();


// =====================================================
// 🖥️ In Node.js Environment
// =====================================================

// Run in Node.js terminal:

// console.log(this);              // 👉 Outputs: {} (empty object)
// console.log(global);            // 👉 Node's global object
// console.log(this === global);   // 👉 false

// // var is scoped to module, not added to global
// var course = "NodeJS";
// console.log(global.course);     // 👉 undefined


// =====================================================
// 📌 Summary Table:
// =====================================================

/*
| Environment     | Context           | `this` refers to      |
|-----------------|-------------------|-----------------------|
| Browser         | Global scope      | `window`              |
| Browser         | Function call     | `window` (non-strict) |
| Browser         | Function (strict) | `undefined`           |
| Node.js         | Global scope      | `{}` (empty object)   |
| Node.js         | global object     | `global`              |
| Arrow function  | Always inherits   | From outer scope      |
*/

