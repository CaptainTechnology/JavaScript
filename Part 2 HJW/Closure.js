// closures.js

// ==========================
// 📘 INTRO TO CLOSURES
// ==========================

// 🧠 What is a Closure?
// A closure is when a function REMEMBERS and CAN USE variables from its outer function,
// even after the outer function has finished running.
// Closure = Function + Outer Variables (Remembered even after outer is gone)

// ✅ Why is this useful?
// - It keeps data private
// - It helps build reusable functions
// - It's used in async tasks like setTimeout, APIs, etc.

// =================================================================
// 📗 EXAMPLE 1: BASIC CLOSURE - function remembers outer variable
// =================================================================

function outerFunction() {
  let name = "Ateek"; // outer function's variable

  function innerFunction() {
    // inner function using outer variable
    console.log("Hello", name); // 👉 it remembers 'name'
  }

  return innerFunction; // return the inner function (not run yet)
}

// Now run it:
const greet = outerFunction(); // outerFunction runs and returns innerFunction
greet(); // 👉 Output: Hello Ateek

// 🧠 Explanation:
// - outerFunction runs and creates variable 'name'
// - innerFunction is returned
// - Even after outerFunction is done, innerFunction REMEMBERS 'name' due to CLOSURE



// ==========================================================
// 📗 EXAMPLE 2: COUNTER FUNCTION USING CLOSURE (DATA PRIVATE)
// ==========================================================

function createCounter() {
  let count = 0; // This variable is private, only inside createCounter()

  function increment() {
    count++; // update private count
    console.log("Current count:", count);
  }

  return increment; // return the inner function
}

// Create a counter
const counter1 = createCounter();
counter1(); // 👉 Current count: 1
counter1(); // 👉 Current count: 2

// Create another counter
const counter2 = createCounter();
counter2(); // 👉 Current count: 1

// 🧠 Explanation:
// Each call to createCounter creates a NEW 'count'
// counter1 and counter2 have their OWN separate memory (closure scope)



// ==================================================
// 📗 EXAMPLE 3: setTimeout WITH CLOSURE (ASYNC TASK)
// ==================================================

function delayedGreeting() {
  let message = "Hi after 2 seconds!";

  // This function will run later (after 2 seconds)
  setTimeout(function () {
    console.log(message); // closure remembers 'message'
  }, 2000);
}

delayedGreeting(); // 👉 Output after 2 sec: Hi after 2 seconds!

// 🧠 Explanation:
// - setTimeout runs later
// - But it still remembers 'message' due to CLOSURE



// ============================================================
// 📗 EXAMPLE 4: PRIVATE DATA USING CLOSURE (like password)
// ============================================================

function secretManager() {
  let password = "abc@123"; // private variable

  return {
    getPassword: function () {
      return password; // access the private variable
    },
    setPassword: function (newPass) {
      password = newPass; // update the private variable
    }
  };
}

const user = secretManager();
console.log(user.getPassword()); // 👉 abc@123
user.setPassword("xyz@456");
console.log(user.getPassword()); // 👉 xyz@456

// 🧠 Explanation:
// - password is not directly accessible
// - But functions inside can still access it (closure)
// - Helps hide private data (like in real-life apps)



// =======================
// ✅ FINAL SUMMARY NOTES:
// =======================

/*
🔹 Closure = function + remembered variables

🔹 A closure is created:
   - Whenever a function is returned or passed around
   - It remembers the variables from where it was originally created

🔹 Used for:
   - Data privacy (e.g. password, counter)
   - Async tasks (e.g. setTimeout, API)
   - Creating function factories

🔐 Think of closure like a magic box 🧙‍♂️:
   - You put data inside it
   - Only the inner function can see or change it
   - Outsiders can't touch that data directly!
*/

// ==========================
// 🍱 Bonus Real-Life Analogy:
// ==========================

/*
Imagine your mom packed you lunch (food = variables).
She gave you the box (function), and left (outer function is gone).
You can STILL eat the food anytime — that's closure! 🤗
*/

