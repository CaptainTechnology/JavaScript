
// // The this keyword in JavaScript refers to the object that is currently executing the function.
// // Its value depends on how and where the function is called — not where it is written.

{
  /**✅ Definition of this in JavaScript (For Interview):
In JavaScript, this is a keyword that refers to the object that is currently executing the function.
Its value is determined at the time of function invocation, depending on how the function is called, not where it's defined.

🔹 You can also say:
"this represents the execution context of a function — i.e., the object to which the function belongs when it is invoked."

🔹 Optional Add-on (if asked further):
In regular functions, this refers to the global object (window in browsers) or undefined in strict mode.

In object methods, this refers to the object itself.

In arrow functions, this is lexically scoped — it inherits this from the surrounding code.

In constructor functions, this refers to the newly created object.

Using .call(), .apply(), or .bind() can manually set the value of this. */
}
// /**************************************************
//  * 1. GLOBAL CONTEXT
//  * -----------------------------------------------
//  * In the global scope, `this` refers to the global object:
//  * - In browsers: `window`
//  * - In Node.js: `global` or an empty object
//  **************************************************/
// console.log("1. Global Context:");
// console.log(this); // Browser: Window | Node.js: global or {}


// /**************************************************
//  * 2. REGULAR FUNCTION CONTEXT
//  * -----------------------------------------------
//  * In a normal function:
//  * - In non-strict mode: `this` = global object
//  * - In strict mode: `this` = undefined
//  **************************************************/
// "use strict"
// console.log("\n2. Regular Function:");

// function regularFunction() {
//   console.log(this);
// }
// regularFunction(); // Window or undefined


// /**************************************************
//  * 3. OBJECT METHOD CONTEXT
//  * -----------------------------------------------
//  * When a function is called as a method of an object,
//  * `this` refers to the object the method was called on.
//  **************************************************/
// console.log("\n3. Object Method:");

// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log("Hi, I'm " + this.name);
//   }
// };

// person.greet(); // "Hi, I'm Alice"


// /**************************************************
//  * 4. ARROW FUNCTION CONTEXT
//  * -----------------------------------------------
//  * Arrow functions don't have their own `this`.
//  * They inherit `this` from the enclosing context.
//  **************************************************/
// console.log("\n4. Arrow Function:");

// const arrowExample = {
//   name: "Bob",
//   greet: function () {
//     const arrow = () => {
//       console.log("Hi, I'm " + this.name);
//     };
//     arrow(); // inherits `this` from greet()
//   }
// };

// arrowExample.greet(); // "Hi, I'm Bob"


// /**************************************************
//  * 5. DETACHED FUNCTION
//  * -----------------------------------------------
//  * When a function is assigned to multiple objects,
//  * `this` is determined by the calling object.
//  **************************************************/
// console.log("\n5. Detached Function:");

// function sayName() {
//   console.log(this.name);
// }

// const user1 =  { name: "Charlie", speak: sayName };
// const user2 =  { name: "Diana", speak: sayName };

// user1.speak(); // "Charlie"
// user2.speak(); // "Diana"


// /**************************************************
//  * 6. CONSTRUCTOR FUNCTION
//  * -----------------------------------------------
//  * When using `new`, `this` refers to the new object created.
//  **************************************************/
// console.log("\n6. Constructor Function:");

// function Car(make) {
//   this.make = make;
//   this.display = function () {
//     console.log("Car make: " + this.make);
//   };
// }

// const car1 = new Car("Toyota");
// car1.display(); // "Car make: Toyota"

// const car2=new Car("Fortuner");
// car2.display();

// /**************************************************
//  * 7. CLASS CONTEXT (ES6)
//  * -----------------------------------------------
//  * Same as constructor functions. Inside a class method,
//  * `this` refers to the instance of the class.
//  **************************************************/
// console.log("\n7. Class Context:");

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   speak() {
//     console.log("Animal type: " + this.type);
//   }
// }

// const dog = new Animal("Dog");
// dog.speak(); // "Animal type: Dog"

// const cat = new Animal("Cat");
// cat.speak(); // "Animal type: Cat"


// /**************************************************
//  * 8. this with CALL, APPLY, BIND
//  * -----------------------------------------------
//  * Use these methods to explicitly set `this` inside a function.
//  **************************************************/
// console.log("\n8. call, apply, bind:");

// function showInfo() {
//   console.log("Name: " + this.name);
// }

// const user = { name: "Eve" };

// showInfo.call(user);    // "Name: Eve"
// showInfo.apply(user);   // "Name: Eve"
// const boundFunc = showInfo.bind(user);
// boundFunc();            // "Name: Eve"


// /**************************************************
//  * 9. DOM EVENT HANDLER CONTEXT (Browser only)
//  * -----------------------------------------------
//  * In event handlers, `this` refers to the HTML element
//  * that triggered the event (if using regular functions).
//  **************************************************/
// console.log("\n9. DOM Event Listener Context (Browser only):");

// // Browser only example:
// // document.getElementById("btn").addEventListener("click", function () {
// //   console.log(this); // <button> element
// // });


// /**************************************************
//  * 10. ARROW FUNCTION IN EVENT HANDLER (Browser)
//  * -----------------------------------------------
//  * In arrow functions used as event handlers, `this`
//  * does NOT refer to the DOM element, but to the outer scope.
//  **************************************************/

// // document.getElementById("btn").addEventListener("click", () => {
// //   console.log(this); // `this` from outer scope (likely window)
// // });


// /**************************************************
//  * 11. STRICT MODE
//  * -----------------------------------------------
//  * In strict mode, `this` inside a regular function is `undefined`
//  * instead of defaulting to the global object.
//  **************************************************/
// console.log("\n11. Strict Mode:");

// "use strict";
// function strictFunc() {
//   console.log(this); // undefined
// }
// strictFunc();
