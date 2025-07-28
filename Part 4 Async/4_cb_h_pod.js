/*
=======================================================================
🧠 CALLBACKS in JavaScript (Fundamentals)
=======================================================================

📌 A callback is a function passed as an argument to another function, 
   and it is invoked later after some work is done.

✅ Why use callbacks?
- To run code in a specific order (especially with asynchronous operations)
- To keep our code flexible and reusable

🔧 Basic Example:
*/

// function greetUser(name, callback) {
//   console.log(`👋 Hello, ${name}`);
//   callback(); // invoking the passed function
// }

// function sayBye() {
//   console.log("👋 Goodbye!");
// }

// greetUser("Ateek", sayBye);

/*
🧾 Output:
👋 Hello, Ateek
👋 Goodbye!
*/


/*
=======================================================================
⏳ ASYNCHRONOUS Callback Example: setTimeout
=======================================================================
*/

// function fetchData(callback) {
//   console.log("📡 Fetching data...");
//   setTimeout(() => {
//     console.log("✅ Data received!");
//     callback();
//   }, 2000);
// }

// function processData() {
//   console.log("🔍 Processing data...");
// }

// fetchData(processData);

/*
🧾 Output:
📡 Fetching data...
✅ Data received!
🔍 Processing data...
*/


/*
=======================================================================
🔥 CALLBACK HELL / PYRAMID OF DOOM
=======================================================================

📉 As we start nesting callbacks for sequences of operations, the code 
    becomes hard to read and maintain — this is called "callback hell".

📌 Also known as:
- Pyramid of Doom
- Christmas Tree code
*/

console.log("\n--- Callback Hell Example ---");

setTimeout(() => {
  console.log("⏳ Step 1: Login user");
  setTimeout(() => {
    console.log("📦 Step 2: Fetch user data");
    setTimeout(() => {
      console.log("📈 Step 3: Display dashboard");
      setTimeout(() => {
        console.log("✅ Step 4: Show analytics");
        setTimeout(() => {
          console.log("Task completed")
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*
🧾 Output (delayed):
⏳ Step 1: Login user
📦 Step 2: Fetch user data
📈 Step 3: Display dashboard
✅ Step 4: Show analytics

⚠️ Problem:
- Code is deeply nested
- Hard to debug
- Hard to scale or add error handling
- Cannot re-use functions easily

🔄 This is where Promises and Async/Await help (we’ll learn later)

*/


/*
========================================================================
🧠 Real-World Analogy:
========================================================================

Imagine:
1️⃣ You call a pizza store (async action)
2️⃣ You give your number (callback)
3️⃣ They call you back when pizza is ready (callback gets invoked)

Now imagine:
- Pizza needs sauce (callback)
- Then needs cheese (callback)
- Then toppings (callback)
- Then bake (callback)
➡️ All this nesting = callback hell 🍕

*/


/*
========================================================================
✅ Conclusion:
========================================================================

✔️ Callback: A function passed into another function and called later.
✔️ Useful for async tasks (file read, API call, timer).
✔️ Callback Hell: Nested callbacks that make code messy.
✔️ Solution: Use Promises or async/await for cleaner flow.

🔁 You’ll face this a lot when dealing with real-world async code like:
- APIs (fetch, axios)
- File operations
- User input
- Server responses

Let me know if you want the **Promise version** or **Async/Await** version of this same code!
*/

