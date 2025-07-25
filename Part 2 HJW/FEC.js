// 📘 Function Execution Context (FEC)

// 🧠 What is it?
/*
Every time a function is called, JavaScript creates a new environment — 
called the Function Execution Context (FEC) — to run that function.

Like the Global Execution Context, it has 2 phases:
1️⃣ Creation Phase → Memory allocation
2️⃣ Execution Phase → Code runs
*/

// ✅ Example 1: Basic FEC
function greet(name) {
  console.log("Hello", name);
}

greet("Ateek"); // 👉 Output: Hello Ateek

/*
🔍 What happens inside greet("Ateek")?

🧠 Creation Phase:
- Memory is set up
- Variable name = undefined
- arguments object = {0: "Ateek"}

⚙️ Execution Phase:
- name = "Ateek"
- Runs console.log ➜ Hello Ateek
*/



// ✅ Example 2: Nested Function Calls & Call Stack
function first() {
  console.log("Inside first()");
  second(); // Calls second()
}

function second() {
  console.log("Inside second()");
}

first();

/*
📊 Call Stack Behavior:

1. Global Execution Context created
2. first() is called → new FEC is created for first()
3. second() is called inside first() → new FEC for second()
4. second() finishes → removed from stack
5. first() finishes → removed from stack
6. Back to global context
*/



// ✅ Example 3: Hoisting with var inside function
function hoistExample() {
  console.log(x); // 👉 undefined (hoisted)
  var x = 10;
  console.log(x); // 👉 10
}

hoistExample();

/*
🧠 Creation Phase:
- var x is hoisted → x = undefined

⚙️ Execution Phase:
- x = 10
- console.log runs
*/



// ✅ Example 4: Temporal Dead Zone (TDZ) with let/const
function testTDZ() {
  // console.log(y); ❌ ReferenceError (TDZ)
  let y = 5;
  console.log(y); // 👉 5
}

testTDZ();

/*
ℹ️ Explanation:
- let/const are hoisted but not initialized
- They are in the "Temporal Dead Zone" (TDZ)
- Accessing them before declaration → ReferenceError
*/



// 🎯 Summary:
/*
- Function Execution Context is created every time a function runs.
- It has its own memory and code execution phases.
- Managed using Call Stack (LIFO).
- var is hoisted → undefined
- let/const are hoisted → but not accessible until declared (TDZ)
*/
