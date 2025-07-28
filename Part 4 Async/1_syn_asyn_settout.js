


// JavaScript is single-threaded, meaning it executes one line of code at a time in a specific order. But with asynchronous features, JavaScript can also handle tasks without blocking the main thread.

// ==========================
// 🧠 Synchronous JavaScript
// ==========================

// Synchronous code runs line by line.
// Each line must finish before the next one runs.
// If one line takes time, it will block everything else.

// console.log("1: Start");

// function blockFor2Sec() {
//  for(let i=0; i<=100000; i++){
//    console.log("bloked for sometime")
//  }
// }

// blockFor2Sec();
// console.log("2: End");


/* 
------------------------------------------
🧠 2. Asynchronous JavaScript (Non-Blocking)
------------------------------------------

📌 What it is:
- JS can run tasks in the background.
- While waiting (e.g., 2 sec), it continues running the next lines.
- Once background task is ready, it's handled later via the Event Loop.
*/

// console.log("🟢 Async Start");

// setTimeout(() => {
//   console.log("🟡 Inside setTimeout - runs after 2 seconds");
// }, 2000); // 2 second delay (2000 ms)

// console.log("🟢 Async End");

/*
🧾 Output:
🟢 Async Start
🟢 Async End
🟡 Inside setTimeout - runs after 2 seconds

💡 Explanation:
- setTimeout is asynchronous.
- It runs the callback AFTER the specified delay.
- Meanwhile, the program continues running.
*/


/* 
------------------------
🧠 3. setTimeout() in JS
------------------------

📌 What is setTimeout?
- Built-in JS function to delay a task.
- Takes a function and a delay in milliseconds.
- Runs after the main execution stack is clear.

🔧 Syntax:
setTimeout(callbackFunction, delayInMilliseconds, arg1, arg2, ...);

*/
// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// passing argument
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// setTimeout(greet, 1000, "Ateek");

// cancel timout
// console.log("start")
// let id = setTimeout(() => {
//   console.log("You won't see me!");
// }, 3000);

// clearTimeout(id); // Cancels it
// console.log("end")


/*
🧾 Output:
🧊 start
🧊 End



💡 setTimeout is useful for:
- Creating delays
- Animations
- Simulating waiting for data (like from APIs)

🚫 Misconception:
setTimeout does NOT pause or delay the script — it just schedules the callback.
*/


// ==========================================================
// ✅ Summary:
// ==========================================================

/*
🔹 Synchronous JS:
   - Line-by-line execution.
   - Blocks the flow until the current task completes.

🔹 Asynchronous JS:
   - Runs in the background.
   - Uses setTimeout, fetch, promises, etc.
   - Helps avoid freezing UI  or app.

🔹 setTimeout():
   - Schedules a task to run later.
   - Useful for non-blocking delays.

🧠 Interview Tip:
JavaScript is single-threaded, but asynchronous tasks (like setTimeout or API calls) use the browser's background Web APIs and event loop mechanism.
*/

