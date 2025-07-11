
// console.log("Function in javaScript");

// function declairation define a function with name and can be used before it's defination becouse of hoisting, it is also called function statement


// greet();

// function greet(){
//     console.log("function declairation");
// }



// What Is a Function Expression?
// A function expression is when a function is assigned to a variable. Unlike function declarations, function expressions are not hoisted, and they can be anonymous (no name required).



// const greet = function (name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet("Alice")); // Output: Hello, Alice!

// // anonymouse function

// const sayHi = function() {
//     console.log("Hi!");
//   };

//   sayHi(); // Output: Hi!


// arrow function

// An arrow function is a shorter way to write function expressions in JavaScript.
// Introduced in ES6 (2015), arrow functions are more concise and come with different behavior, especially when it comes to this, arguments, and constructors.


// Traditional function
// function add(a, b) {
//     return a + b;
//   }

  // Arrow function version
//   const add = (a, b) => {
//     return a + b;
//   };

  // Even shorter (implicit return)
//   const add = (a, b) => a + b;


// Arrow functions do not bind their own this. They inherit this from the parent scope (called lexical this). This is one of the most important differences. one level up


// const square = x => x * x;
// console.log(square(5)); // Output: 25

// No need for parentheses () if there's only one parameter.
// For zero or more than one parameter, use parentheses.

// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); // Output: 6


// const sayHello = () => console.log("Hello!");
// sayHello(); // Output: Hello!'

// const divide = (a, b) => {
//     console.log("Division");
//     return a / b;
//   };
//   console.log(divide(10, 2)); // Output: 5



// 2. No own this
// Arrow functions do not have their own this. They capture the this value of the enclosing context.


// const obj = {
//     name: "Sam",
//     regular: function () {
//       console.log("Regular:", this.name);
//     },
//     arrow: () => {
//       console.log("Arrow:", this.name);
//     }
//   };

//   obj.regular(); // Regular: Sam
//   obj.arrow();   // Arrow: undefined (or window in browsers)


// function showArgs() {
//     console.log(arguments);
//     console.log(arguments[1]);
    
// }

// showArgs(1, 2, 3); // [1, 2, 3]

// const showArgsArrow = () => {
//     console.log(arguments); // ❌ ReferenceError: arguments is not defined
//   };

//   showArgsArrow(1, 2, 3);


// const showArgsArrow = (...args) => {
//     console.log(args); // ✅ [1, 2, 3]
//   };
//   showArgsArrow(1, 2, 3);


// 🔍 3. Constructor Usage

// function Person(name) {
//     this.name = name;
// }

// console.log(Person);

// const p1 = new Person("John");
// console.log(p1.name); // John

// const Person = (name) => {
//     this.name = name;
// };

// console.log(Person);

// const p1 = new Person("John"); // ❌ TypeError: Person is not a constructor

// 4. Object Methods

// const user = {
//     name: "Luna",
//     greet() {
//       console.log("Hi, I'm " + this.name);
//     }
//   };

//   user.greet(); // Hi, I'm Luna

//   const user = {
//     name: "Luna",
//     greet: () => {
//       console.log("Hi, I'm " + this.name); // `this` not bound to object
//     }
//   };
// //   this.name="captain"

//   user.greet(); // Hi, I'm undefined



// const arrowFunction={
//     "ArrowVsRegularFunction": {
//       "Overview": {
//         "ArrowFunction": {
//           "Description": "A shorter syntax introduced in ES6 for writing functions. Inherits 'this' from parent scope.",
//           "Syntax": "const fn = (params) => expression;",
//           "UseWhen": [
//             "Simple one-liners",
//             "Callbacks (map, filter, reduce)",
//             "Maintain parent scope 'this'"
//           ]
//         },
//         "RegularFunction": {
//           "Description": "The traditional way of defining functions in JavaScript. Has its own 'this', 'arguments', and can be used as constructor.",
//           "Syntax": "function fn(params) { return result; }",
//           "UseWhen": [
//             "You need your own 'this'",
//             "You need 'arguments' object",
//             "You want to use 'new' (constructor)",
//             "Defining object methods"
//           ]
//         }
//       },

//       "FeatureComparison": [
//         {
//           "Feature": "Syntax",
//           "ArrowFunction": "Shorter, concise",
//           "RegularFunction": "More verbose"
//         },
//         {
//           "Feature": "this",
//           "ArrowFunction": "Lexical (inherits from parent)",
//           "RegularFunction": "Dynamic (based on caller)"
//         },
//         {
//           "Feature": "arguments object",
//           "ArrowFunction": "❌ Not available",
//           "RegularFunction": "✅ Available"
//         },
//         {
//           "Feature": "Used as constructor",
//           "ArrowFunction": "❌ No (throws error)",
//           "RegularFunction": "✅ Yes (can use 'new')"
//         },
//         {
//           "Feature": "Object method with 'this'",
//           "ArrowFunction": "❌ Fails, 'this' is not the object",
//           "RegularFunction": "✅ Works correctly"
//         }
//       ],

//       "UseCases": [
//         {
//           "Title": "Simple callback or one-liner",
//           "ArrowFunction": {
//             "Recommended": true,
//             "Example": "const nums = [1,2,3]; const squared = nums.map(n => n * n);"
//           },
//           "RegularFunction": {
//             "Recommended": false,
//             "Example": "const squared = nums.map(function(n) { return n * n; });"
//           }
//         },
//         {
//           "Title": "Needs 'this' (methods, classes)",
//           "ArrowFunction": {
//             "Recommended": false,
//             "Example": "const obj = { name: 'Luna', greet: () => console.log(this.name) };"
//           },
//           "RegularFunction": {
//             "Recommended": true,
//             "Example": "const obj = { name: 'Luna', greet() { console.log(this.name); } };"
//           }
//         },
//         {
//           "Title": "Constructor function",
//           "ArrowFunction": {
//             "Recommended": false,
//             "Example": "const Person = (name) => { this.name = name; }; new Person('Alex'); // ❌ Error"
//           },
//           "RegularFunction": {
//             "Recommended": true,
//             "Example": "function Person(name) { this.name = name; } const p = new Person('Alex');"
//           }
//         },
//         {
//           "Title": "Need 'arguments' object",
//           "ArrowFunction": {
//             "Recommended": false,
//             "Example": "const show = () => { console.log(arguments); }; // ❌ Error"
//           },
//           "RegularFunction": {
//             "Recommended": true,
//             "Example": "function show() { console.log(arguments); } show(1, 2, 3);"
//           }
//         },
//         {
//           "Title": "Object method with 'this'",
//           "ArrowFunction": {
//             "Recommended": false,
//             "Example": "const user = { name: 'Eva', greet: () => console.log(this.name) };"
//           },
//           "RegularFunction": {
//             "Recommended": true,
//             "Example": "const user = { name: 'Eva', greet() { console.log(this.name); } };"
//           }
//         }
//       ],

//       "ExtraTips": [
//         {
//           "Tip": "Use arrow functions for short, anonymous callbacks like in map, filter, reduce."
//         },
//         {
//           "Tip": "Avoid arrow functions when you need to access 'this', especially in object methods."
//         },
//         {
//           "Tip": "Use rest parameters (...args) in arrow functions instead of 'arguments' object."
//         },
//         {
//           "Tip": "Arrow functions do not work as constructors; avoid using 'new' with them."
//         },
//         {
//           "Tip": "Arrow functions inherit 'this' from the surrounding lexical context."
//         }
//       ]
//     }
//   }



// function inside function

// function outer() {
//     function inner() {
//         console.log("inner");

//     }
//     inner()
// }


// 🧠 What Is Lexical Scope?
// 🔹 Lexical Scope (also called Static Scope) means:
// A function can access variables from the scope in which it was physically written in the source code — not from where it’s called.

// Think of "lexical" as "location in the code".

// const globalVar = "🌍 Global";

// function outer() {
//   const outerVar = "🔹 Outer";

//   function inner() {
//     const innerVar = "🔸 Inner";
//     console.log(globalVar);  // ✅ from global scope
//     console.log(outerVar);   // ✅ from outer function scope
//     console.log(innerVar);   // ✅ from own scope
//   }

//   inner();
// }

// let outerVar="it will not work"
// outer();


// Example: Lexical Scope with Closure

// function outerFunction() {
//     const secret = "🔒 Secret message";

//     return function innerFunction() {
//       console.log(secret); // ✅ Lexically scoped
//     };
//   }

//   const showSecret = outerFunction();
//   showSecret(); // 🔒 Secret message

// //   Even though outerFunction() has finished executing, innerFunction still remembers secret. This is possible because of lexical scope, which enables closures.


// const language = "JavaScript";

// function logLanguage() {
//   console.log("Language:", language);
// }

// function execute(fn) {
//   const language = "Python";
//   fn(); // Will print: JavaScript (not Python)
// }

// execute(logLanguage); // Output: Language: JavaScript


// Function Scope
// Variables declared with var are function-scoped — they are accessible anywhere inside the function in which they are declared.


// function testVar() {
//     if (true) {
//       var x = 10;
//     }
//     function newest(){
//         console.log(x,"in another function");
//     }
//     console.log(x); // ✅ 10 — still accessible!
//     newest()// 10 in another function
//   }

//   testVar();


// 🔒 Block Scope
// Variables declared with let and const are block-scoped — they are only accessible within the curly braces {} where they are defined.

// function testLetConst() {
//     if (true) {
//       let y = 20;
//       const z = 30;
//       console.log(y); // ✅ 20
//       console.log(z); // ✅ 30
//     }
//     // console.log(y); //❌ ReferenceError
//     // console.log(z); //❌ ReferenceError
//   }

//   testLetConst();

// 🧠 Why This Matters
// When you use var, it's easy to accidentally overwrite or leak variables because it doesn’t respect blocks.

// for (var i = 0; i < 3; i++) {
//     const secret = "🔒 Secret message";

//     return function innerFunction() {
//       console.log(secret); // ✅ Lexically scoped
//     };
//   }

//   const showSecret = outerFunction();
//   showSecret(); // 🔒 Secret message
//     setTimeout(() => console.log(i), 100);
// }
// // Output: 3 3 3 — all same, due to function scope

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }
// Output: 0 1 2 — each iteration gets its own block scope


// default parameters

// function greet(name = "Guest") {
//     console.log("Hello, " + name + "!");
//   }

//   greet("Luna"); // Output: Hello, Luna!
//   greet();       // Output: Hello, Guest!


// ⚠️ Only undefined Triggers the Default

// function showMessage(msg = "No message") {
//     console.log(msg);
//   }

//   showMessage(undefined); // ✅ No message (default used)
//   showMessage(null);      // ❌ null (no default used)
//   showMessage("");        // ❌ (empty string, still counts as a value)

//   old way before exma script
//   function greet(name) {
//     name = name || "Guest";
//     console.log("Hello, " + name);
//   }


// collect multiple arguments into an array// rest parameter should be at last

// function greet(first, ...others) {
//     console.log("Hello", first);
//     console.log("Others:", others);
// }

// greet("Luna", "Alice", "Bob");

// // Hello Luna
// // Others: [ 'Alice', 'Bob' ]


/**
 * 🧠 What is Parameter Destructuring?
Parameter destructuring means:

Extracting values from an object or array right inside the function parameter list.

This works with:

✅ Objects

✅ Arrays
 */

// function printUser({ name, age,salary }) {
//     console.log(name); // Only 'name' is available
//     console.log(age);  // Only 'age' is available
//     console.log(salary);
    
//   }

//   const user = { name: "Luna", age: 22, email: "luna@example.com" };
//   printUser(user); // ✅ Output: Luna, 22 undefined


// function showFirstTwo([first, second]) {
//     console.log("First:", first);
//     console.log("Second:", second);
//   }

//   showFirstTwo(["JavaScript", "Python", "Rust"]); 
//   // First: JavaScript
//   // Second: Python

// function skipOne([ ,second]) {
//     console.log("Second is:", second);
//   }
//   skipOne(["A", "B", "C"]); // B

// function setupUser({ name, role = "user", isActive = true }) {
//     console.log(`Name: ${name}, Role: ${role}, Active: ${isActive}`);
//   }

//   setupUser({ name: "Luna", role: "admin" }); // ✅
//   setupUser({ name: "Zara" }); // ✅ role: user, isActive: true

// 🔁 What is a Callback Function?
// A callback function is:

// A function passed as an argument to another function, which is then called (invoked) inside that function.

// In simpler terms:

// It’s a way to say: "Do this, then do that."

// function greet(name, callback) {
//     console.log("Hi " + name);
//     callback(); // invoke the callback
//   }

//   function sayBye() {
//     console.log("Bye!");
//   }

//   greet("Luna", sayBye);

//   Here, sayBye is passed into greet — then greet calls it later. That’s a callback.


// function greet(a, b, sum) {
//     let result = a + b;
//     sum(result);
// }

// // function sum(result){
// //     console.log("Result is :",result);
// // }

// let sum = function (result) {
//     console.log("Result is :", result);
// }
// greet(3, 4, sum)


// function returning a function

/**
🧠 What Does “Function Returning Function” Mean?
In JavaScript:

✅ A function can return another function — this is a powerful feature in functional programming.

This allows us to:

Create customizable functions

Use closures (remember values even after the outer function ends)

Create reusable logic

Write clean, modular code
// */

// function greet(name) {
//     return function(message) {
//       console.log(`${message}, ${name}!`);
//     };
//   }

//   const greetLuna = greet("Luna"); // returns a new function
//   greetLuna("Hello"); // Output: Hello, Luna!
//   greetLuna("Good morning"); // Output: Good morning, Luna!

// function allowRole(role) {
//     return function(userRole) {
//       return userRole === role;
//     };
//   }

//   const isAdmin = allowRole("admin");
//   console.log(isAdmin("admin")); // true
//   console.log(isAdmin("user"));  // false
//   console.log(allowRole("admin")("admin"));
//   console.log(allowRole("admin")("captain"));






/**
 * 💡 What Are First-Class Functions?
In JavaScript:

✅ Functions are first-class citizens — they can be:

Assigned to variables (function expression)

Passed as arguments to other functions (callback)

Returned from other functions

Stored in arrays, objects, etc.

work as value

This means functions are treated like values (just like numbers, strings, or objects).
 */

// const greet = function () {
//     console.log("Hello!");
//   };

//   greet(); // ✅ Output: Hello!


// function sayHi() {
//     console.log("Hi there!");
// }

// function runCallback(callback) {
//     callback(); // calling the function passed in
// }

// runCallback(sayHi); // ✅ Output: Hi there!

// function outer() {
//     return function inner() {
//       console.log("I was returned!");
//     };
//   }
  
//   const fn = outer();
//   fn(); // ✅ Output: I was returned!
  

// const actions = [
//     function () { console.log("Jump"); },
//     function () { console.log("Run"); },
//   ];
  
//   actions[0](); // ✅ Output: Jump
//   actions[1](); // ✅ Output: Run
  

// const calculator = {
//     add: (a, b) => a + b,
//     sub: (a, b) => a - b,
//   };
  
//   console.log(calculator.add(5, 3)); // ✅ 8
  

//  What is a Higher-Order Function?
// A Higher-Order Function is a function that either:
// ✅ Takes another function as an argument, or
//  Returns a function as its result
// Sometimes, it does both!

// HOF that takes a function as a parameter

// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   function processUser(callback) {//HOF
//     const username = "Luna";
//     callback(username); // passing value to the function
//   }
  
//   processUser(greet); // Output: Hello, Luna!

  
//   function multiplier(factor) {//HOF
//     return function (number) {
//       return number * factor;
//     };
//   }
  
//   const double = multiplier(2);
//   console.log(double(5)); // Output: 10

// function operate(a,b,operation){
//     operation(a,b);
// }

// const sum=(a,b)=>{console.log(a+b);
// }
// const sub=(a,b)=>{console.log(a-b)}

// operate(3,4,sum);
// operate(5,4,sub);

  
  
// ✅ 3. HOFs in Arrays (map, filter, reduce) these are inbuild hof in javascript

// let arr=[1,2,3,4]
// arr.map((item,index)=>{//HOF becouse it takes another function  as argument at this time we uses arrow function inside HOF
//     console.log(item);
// })

// arr.map();// error undefined is not a funtion

// IIFE (immidiatly invoked funciton expression)

// this function immidiatly invoked (run,called) ofter it's defination useful for avoiding global varible pollution


// (function (){console.log("without name")})();
// let sm=new (function (){console.log("without name")})();
// sm.name="hello"
// console.log(sm.name);



// (function print(){console.log("with name")})();
// let c=new (function print(){console.log("with name")})();
// c.game="he"
// console.log(c.game);

// (()=>{console.log("hello arrow function");})
// let ar=new (()=>{console.log("hello arrow function");})// intermedia value is not a constructor


// const f1=new print();// print is not a constructor


// pure and impure function

// pure function always gives the same output for same input

// const pure=(a,b)=>{
// console.log("addition using pure function :",a+b);
// }
// pure(3,4)
// pure(3,4)
// pure(3,4)
// // 7 7 7 


// let prev=0;

// const impure=(a,b)=>{
//     console.log("total using impure function:  ",a+b+prev);
//     prev++;
// }

// impure(2,3)
// impure(2,3)
// impure(2,3)
// 5 6 7


// recursive function 
// a fuction called itself to solve a problem is called recursive function

// const factorial=(num)=>{
//     if(num==0){
//         return 1;
//     }
//     return num*factorial(num-1);
// }

// let fact=factorial(5);
// console.log(fact);


// genrative function : it is function which can be pause and resume using yield

// function* traficLight(){

//         yield "Red"
//         yield "Yellow"
//         yield "Green" 
       
// }

// const Singnal=traficLight();
// Singnal()// error sinlgnal is not a function
// console.log(Singnal.next().value);
// console.log(Singnal.next().value);
// console.log(Singnal.next().value);





// 🔹 What is a Constructor Function?
// A constructor function acts like a blueprint for creating multiple similar objects.

// In simple terms:

// It’s a function used to create new object instances with the same structure and behavior.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 30);



// in simple term

// Explanation:
// A constructor function in JavaScript is a regular function (not an arrow function) that uses the this keyword to assign properties or methods to the newly created object, and it must be called with the new keyword to create and return that new object.

// function Person(name, age) {    // Regular function acting as constructor
//   this.name = name;            // Assign property to the new object
//   this.age = age;              // Assign another property
//   this.greet = function() {    // Assign method to the new object
//     console.log("Hi, I'm " + this.name);
//   };
// }

// let person1 = new Person("Alice", 25);  // 'new' creates a new object
// person1.greet();                        // Output: Hi, I'm Alice

// Key points:

// Must use function keyword (not arrow functions)

// Use this inside to set properties/methods

// Call it with new to create a new object

// Naming convention: Start with capital letter