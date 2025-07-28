/*
=================================================
🧠 What is a Callback Function in JavaScript?
=================================================

📌 A callback is a function passed **as an argument** to another function.
📌 It is **called back** (invoked) later by the outer function.
📌 This allows you to control the **order of execution**, especially with **asynchronous code**.

🔧 Syntax:

function outerFunction(callback) {
  // Do something...
  callback(); // call the function passed in
}

function innerFunction() {
  console.log("I am the callback!");
}

outerFunction(innerFunction);

⚠️ DO NOT write callback() like innerFunction() while passing.
That would **execute** it immediately instead of passing the function.

*/

// =======================================================
// ✅ Example 1: Basic callback example
// =======================================================

// function greet(name, callback) {
//   console.log("👋 Hello, " + name);
//   callback(); // invoking the passed function
// }

// function sayBye() {
//   console.log("👋 Goodbye!");
// }

// greet("Ateek", sayBye);

/*
🧾 Output:
👋 Hello, Ateek
👋 Goodbye!
*/


// =======================================================
// ✅ Example 2: Using callback to run code after a delay
// =======================================================

// function waitAndRun(callback) {
//   console.log("⏳ Please wait 2 seconds...");

//   setTimeout(() => {
//     console.log("⏰ 2 seconds passed!");
//     callback();
//   }, 2000);
//   console.log("wait run ended")
// }

// waitAndRun(() => {
//   console.log("🚀 This runs AFTER the wait.");
// });

/*
🧾 Output:
⏳ Please wait 2 seconds...
⏰ 2 seconds passed!
🚀 This runs AFTER the wait.
*/


// =======================================================
// ✅ Example 3: Array methods using callback (e.g., map, forEach)
// =======================================================

// const numbers = [1, 2, 3, 4, 5];

// // // map() takes a callback function
// const doubled = numbers.map(function (num) {
//   return num * 2;
// });

// console.log("🧮 Doubled:", doubled); // [2, 4, 6, 8, 10]


// =======================================================
// ✅ Example 4: Custom function with callback to perform any operation
// =======================================================

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log("➕ Add:", calculate(4, 2, add));         // 6
// console.log("✖️ Multiply:", calculate(4, 2, multiply)); // 8


/*
====================================================
🧠 Why are Callbacks Important?
====================================================

✅ Helps us run code **after** something finishes (especially async tasks like setTimeout, file loading, APIs).
✅ Adds **flexibility** — function behavior can be customized via parameters.
✅ Foundation of Promises and Async/Await.

🚫 Common Mistakes:
- Don't write callback() when passing; just use callback
- Be careful with nested callbacks → can lead to "callback hell"

*/

// =======================================================
// ✅ Example 5: Callback Hell (nested callbacks - bad practice)
// =======================================================

// setTimeout(() => {
//   console.log("⏱ 1st Task");
//   setTimeout(() => {
//     console.log("⏱ 2nd Task");
//     setTimeout(() => {
//       console.log("⏱ 3rd Task");
//     }, 1000);
//   }, 1000);
// }, 1000);

// Callback hell can be avoided using Promises or async/await (next topics)


// =======================================================
// 🧾 Summary:
// =======================================================
/*

🔹 Callback = Function passed as argument, executed later
🔹 Helps in async programming (like setTimeout, fetch, etc.)
🔹 Built-in array methods (map, filter, forEach) use callbacks
🔹 Enables cleaner code reusability and control flow

🧠 Real-Life Analogy:
"You order food (main task) and give your phone number (callback).
When the food is ready, the restaurant calls you (invokes callback)."

*/

