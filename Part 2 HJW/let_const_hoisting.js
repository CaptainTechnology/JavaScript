// ✅ Are let and const hoisted?

// Yes, let and const are hoisted.
// BUT they behave differently from var.
// They are NOT initialized at the time of hoisting.
// They are in a "Temporal Dead Zone" (TDZ).
// {

// // TDZ stands for Temporal Dead Zone — a time between the hoisting of a variable and its declaration/initialization where the variable cannot be accessed.

// // TDZ starts here for `a`
// // console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
// // let a = 5;      // TDZ ends here
// // console.log(a); // ✅ Outputs: 5

// }
// Trying to access them before declaration gives ReferenceError.

// ❌ ReferenceError Example with let
// console.log(a); // Cannot access 'a' before initialization
// let a = 10;

// ❌ ReferenceError Example with const
// console.log(b); // Cannot access 'b' before initialization
// const b = 20;

// ✅ Correct Usage: Access AFTER Declaration
// let name = "Ateek";
// console.log(name); // ✅ Outputs: Ateek

// 🔍 Summary Behind the Scenes:
/*
1. During Creation Phase:
   - Variables declared with let/const are hoisted
   - BUT they are not initialized
   - They go into TDZ (Temporal Dead Zone)

2. During Execution Phase:
   - If you access them before declaration, JS throws a ReferenceError
   - Once declared, the TDZ ends, and the variable is usable
*/


// ✅ Difference between var vs let/const

// console.log(x); // undefined (var is hoisted and initialized with undefined)
// var x = 5;

// console.log(y); // ❌ ReferenceError (let is hoisted but not initialized)
// let y = 10;


/*
📌 Comparison Table:

| Feature            | var           | let           | const         |
|--------------------|---------------|---------------|---------------|
| Hoisted            | ✅ Yes        | ✅ Yes        | ✅ Yes        |
| Initialized Early? | ✅ Yes (undefined) | ❌ No (TDZ)  | ❌ No (TDZ)  |
| TDZ Error?         | ❌ No         | ✅ Yes        | ✅ Yes        |
| Reassignable?      | ✅ Yes        | ✅ Yes        | ❌ No         |
| Must Assign Value? | ❌ No         | ❌ No         | ✅ Yes        |
*/


// ✅ ReferenceError Explanation

// Case 1: Variable not declared
// console.log(z); // ❌ ReferenceError: z is not defined

// Case 2: Variable in TDZ
// {
//   console.log(myAge); // ❌ ReferenceError
//   let myAge = 22;
// }

// ✅ Working Example
// {
//   let city = "Delhi";
//   console.log(city); // ✅ Delhi
// }



