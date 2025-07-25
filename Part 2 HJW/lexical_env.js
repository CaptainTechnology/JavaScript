// 📘 Scope Chain & Lexical Environment in JavaScript

/*
🔍 What is a Lexical Environment?

A Lexical Environment is a structure where JavaScript stores variable and function declarations.

Each Lexical Environment has two parts:
1. Environment Record → stores variables/functions.
2. Outer Lexical Environment Reference → links to the parent.

💡 Lexical = location in code where you define things.

JavaScript uses **Lexical Scoping**, so the scope is decided by where the code is **written**, not where it’s **called**.
*/
/*
🧠 Lexical Environment:
------------------------
- It's a structure where variables and functions are physically placed in the code.
- Created each time code runs or a function is called.
- Each environment has:
  1. Environment Record (holds variables/functions)
  2. Outer Reference (points to the parent environment)
*/

// 🧪 Example: Lexical Environment

let globalVar = "🌍 I'm Global";

function outerFunc() {
  let outerVar = "🔹 I'm Outer";

  function innerFunc() {
    let innerVar = "🔸 I'm Inner";

    // Accessing variables
    console.log(globalVar); // ✅ From Global
    console.log(outerVar);  // ✅ From Outer
    console.log(innerVar);  // ✅ Own Variable
  }

  innerFunc();
}

outerFunc();


/*
📚 Lexical Environment Tree:

Global Environment:
- globalVar
- outerFunc

outerFunc Environment:
- outerVar
- innerFunc

innerFunc Environment:
- innerVar

innerFunc() → can access everything up the chain using Scope Chain.
*/


// ❌ What if we try to access innerVar from outer?

function testScope() {
  let outer = "🔵 Outside";

  function inside() {
    let inner = "🟢 Inside";
    console.log(outer); // ✅ Can access outer
  }

  inside();
  // console.log(inner); ❌ ReferenceError: inner is not defined
}

testScope();

/*
🧠 Summary:
- Inner functions can access outer variables (Scope Chain)
- Outer functions CANNOT access inner variables
*/


// 🔗 Scope Chain Explained:

/*
JavaScript uses Scope Chain to resolve variable access:

1. Looks inside current function.
2. If not found, looks in the outer function.
3. Keeps going up until it reaches the Global scope.
*/


// 🔁 Practice Example

let color = "Red";

function printColor() {
  let color = "Blue";

  function showColor() {
    console.log(color); // ❓ Output?
  }

  showColor();
}

printColor(); // 👉 Output: "Blue"


/*
✔️ Because of Lexical Scope:
- showColor is defined inside printColor
- So it uses printColor’s color variable
*/


// 🧠 Rule to Remember:

/*
Scope Chain = Series of Lexical Environments linked together
JavaScript always looks from inner → outer → global
*/


// 🎯 Conclusion:

/*
📌 Lexical Environment:
   Where variables/functions are stored.
📌 Scope Chain:
   How JS searches for variables (through nested environments).
📌 Lexical Scope:
   Scope is defined by code structure, not call location.
*/
