// =====================================================
// 📘 Hoisting in JavaScript
// =====================================================

/*
🔍 What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations
(var, let, const, function) to the top of their scope (global or function)
during the Creation Phase of the Execution Context.

💡 Only declarations are hoisted — NOT initializations.
*/


// =====================================================
// ✅ Example: var Hoisting
// =====================================================

console.log(a); // 👉 undefined (not ReferenceError)
var a = 10;

/*
Internally:
var a;           // Hoisted
console.log(a);  // undefined
a = 10;          // Assigned later
*/


// =====================================================
// ❌ let and const are Hoisted but Not Initialized (TDZ)
// =====================================================

/*
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization, it mean it is hoisted becouse if it is not hoisted then it show the b is not defined that mean b is still in memory but can't access before initialization
let b = 20;
*/

/*
Explanation:
- b is hoisted into the "Temporal Dead Zone" (TDZ)
- It exists, but cannot be accessed until the actual declaration line
*/


// =====================================================
// ✅ Function Declaration is Fully Hoisted
// =====================================================

// greet(); // 👉 "Hello!"

// function greet() {
//   console.log("Hello!");
// }

/*
Function declarations are hoisted along with their definitions.
So you can call them even before they appear in the code.
*/


// =====================================================
// ❌ Function Expression is NOT Fully Hoisted
// =====================================================

/*
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
*/

/*
Only `var sayHi` is hoisted → undefined
The function itself is NOT hoisted
*/


// =====================================================
// 🔁 Summary Comparison Table (Comment Reference)
// =====================================================

/*
| Type                 | Declaration Hoisted? | Initialized at Hoist? |
|----------------------|----------------------|------------------------|
| var                  | ✅ Yes               | ✅ yes  (undefined)       |
| let / const          | ✅ Yes (in TDZ)      | ❌ No (ReferenceError)  |
| function declaration | ✅ Yes               | ✅ Yes (fully hoisted)  |
| function expression  | ✅ var only          | ❌ No                   |
*/


// =====================================================
// 🧪 Final Example Recap
// =====================================================

/*
console.log(x); // 👉 undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;

greetAgain(); // 👉 "Hello again"
function greetAgain() {
  console.log("Hello again");
}

sayBye(); // ❌ TypeError: sayBye is not a function
var sayBye = function () {
  console.log("Bye");
};
*/


// =====================================================
// ✅ Summary (In Plain Words)
// =====================================================

/*
1. Variables declared with var are hoisted and initialized as undefined.
2. let and const are hoisted but kept in the Temporal Dead Zone (TDZ) and not initialized.
3. Function declarations are hoisted with their definitions.
4. Function expressions behave like vars: the variable is hoisted, but not the function body.
*/

