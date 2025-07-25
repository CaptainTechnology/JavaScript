// =====================================================
// 📘 Execution Context in JavaScript
// =====================================================

/*
An Execution Context is the environment where JavaScript code runs.
Every time JavaScript code is executed, it is done inside an execution context.
*/

// ✅ Types of Execution Context:
/*
1. Global Execution Context (GEC) – Created by default when your script runs.
2. Function Execution Context (FEC) – Created when a function is called.
3. Eval Execution Context – Created inside eval() (rarely used and discouraged).
*/


// =====================================================
// 🌀 Global Execution Context (GEC)
// =====================================================

/*
🔍 What Happens When JavaScript Starts Executing?

When a script begins, JavaScript creates a GEC that does two main things:

1. Creates a Global Object:
   - In Browsers: `window`
   - In Node.js: `global`

2. Sets the `this` keyword to refer to the Global Object
*/


// =====================================================
// 🌐 Behavior in Browser
// =====================================================

// Uncomment and run this section in the browser console:


// console.log(this);               // 👉 Outputs: window object
// console.log(window);            // 👉 Outputs: window object
// console.log(this === window);   // 👉 true

// // ✅ Global variables declared with var are attached to window
// var name = "Ateek";
// console.log(window.name);       // 👉 "Ateek"
// console.log(this.name)          // ateek

// // ❌ Variables declared with let and const are NOT attached to window
// let age = 25;
// console.log(window.age);        // 👉 undefined



// =====================================================
// 🌐 Behavior in Node.js
// =====================================================

// Run this in a Node.js environment:

// console.log(this);               // 👉 Outputs: {}
// console.log(global);            // 👉 The global object in Node.js
// console.log(this === global);   // 👉 false
//// console.log(this===window);//window is not define in nodejs


// // 🔍 var is scoped to module, not added to global object
// var name = "Ateek";
// console.log(global.name);       // 👉 undefined (not attached in Node.js)


// =====================================================
// 🧠 Phases of Global Execution Context
// =====================================================

/*
JavaScript code runs in two phases during Execution Context creation:

1. Creation Phase:
   - `this` is set to the global object (window/global)
   - Memory is allocated for variables and functions
   - Variables declared with var are hoisted with value `undefined`
   - Functions are hoisted with full definitions

2. Execution Phase:
   - Code is executed line-by-line
   - Values are assigned to variables
   - Functions are invoked
*/


// =====================================================
// 🔹 Example: Understanding Execution Context Flow
// =====================================================
// console.log(course);

// var course = "JavaScript";

// function greet() {
//   console.log("Welcome to", course);
// }

// greet();  // 👉 Outputs: Welcome to JavaScript

/*
Behind the scenes:

➡ Creation Phase:
   - var course → undefined
   - function greet → stored in memory

➡ Execution Phase:
   - course = "JavaScript"
   - greet() is called, uses course value
*/
