/*
==========================================
🧠 What is setInterval() in JavaScript?
==========================================

📌 setInterval() is a built-in JavaScript function used to:
→ Repeatedly execute a function at specified time intervals.

📌 Syntax:
setInterval(callback, delayInMilliseconds, arg1, arg2, ...);

🔁 It keeps calling the function again and again after every delay,
until we manually stop it using clearInterval().

🧠 It’s **asynchronous** — it doesn’t block the main thread.
*/

// ============================================================
// ✅ Example 1: Basic Counter that runs every 1 second
// ============================================================

// let counter = 0;

// let intervalId = setInterval(() => {
//   counter++;
//   console.log("🧮 Counter:", counter);

//   if (counter === 5) {
//     clearInterval(intervalId);  // stop the loop after 5 counts
//     console.log("✅ Interval stopped after 5 counts.");
//   }
// }, 1000); // runs every 1000ms (1 second)

// ============================================================
// ✅ Example 2: Greet user with name every 2 seconds (with arguments)
// ============================================================

// function greet(name) {
//   console.log(`👋 Hello, ${name}!`);
// }

// let greetInterval = setInterval(greet, 2000, "Ateek");

// Stop greeting after 6 seconds using setTimeout
// setTimeout(() => {
//   clearInterval(greetInterval);
//   console.log("🛑 Stopped greeting after 6 seconds.");
// }, 6000);

// const id=setTimeout(() => {
//   clearInterval(greetInterval);
//   console.log("🛑 Stopped greeting after 6 seconds.");
// }, 6000);
// clearTimeout(id)


/*
====================================================
📝 Summary of setInterval():
====================================================

✅ setInterval(callback, delay, args...):
→ Calls the callback repeatedly after every delay (in ms).

✅ clearInterval(id):
→ Used to stop the interval.

📦 Use Cases:
- Repeated animations
- Real-time clocks
- Timers or counters
- Polling API data
- Notifications, alerts, etc.

🚫 Note:
- setInterval does NOT wait for the previous function to complete.
- It just runs on intervals; be careful with long tasks inside.
*/

