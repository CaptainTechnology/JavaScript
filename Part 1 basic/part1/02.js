
// use strict

{

// "use strict" :- // strict save us to not make mistake,if we will declare "use strict" at the top it will be applicable for evey function and code for whole program


// Strict Mode in Variable
// Strict Mode in Variable
// Strict Mode in Variable

// "use strict"

// x=32; // x is not defined

// Note: You need to declare strict mode at the beginning of the program. If you declare strict mode below some code, it won't work.

// console.log("some code");
// // 'use strict' is ignored
// // must be at the top
// "use strict";

// x = 21; // does not throw an error


// Strict mode in function
// Strict mode in function
// Strict mode in function

// You can also use strict mode inside a function.
// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

//  For example,

// myVariable = 9;
// // console.log(myVariable); // 9

// function hello() {
//     // applicable only for this function
//     'use strict';
//     str = 'hello'; // throws an error
// }

// hello();// str will show error str is not defined when we will call hello function , but in the case of x (at top declairation)it will show error without call


// Things Not Allowed in Strict Mode
// Things Not Allowed in Strict Mode
// Things Not Allowed in Strict Mode


// 1. Undeclared variable is not allowed.

// 'use strict';

// a = 'hello'; // throws an error

// 2. Undeclared objects are not allowed.

// 'use strict';

// person = {name: 'Carla', age: 25}; // throws an error

// 3. Deleting an object is not allowed.

// 'use strict';

// let person = {name: 'Carla'};

// delete person; // throws an error

// console.log(person);

// 4. Duplicating a parameter name is not allowed.

// "use strict";

// function hello(p1, p1) { console.log('hello',p1+p1)}; // throws an error

// hello(1,2);

// 5. Assigning to a non-writable property is not allowed.

// 'use strict';

// let obj1 = {};

// Object.defineProperty(obj1, 'x', { value: 42, writable: false });

// // assignment to a non-writable property
// obj1.x = 9; // throws an error
// console.log(obj1);


// 7. Assigning to a new property on a non-extensible object is not allowed.

// 'use strict';

// let obj = {};
// Object.preventExtensions(obj);

// // Assignment to a new property on a non-extensible object
// obj.newValue = 'new value'; // throws an error

// 8. Octal syntax is not allowed.

// 'use strict';

// let a = 010; // throws an error


// 9. The variable name arguments and eval are not allowed.

// 'use strict';

// let arguments = 'hello'; // throws an error

//  10. interface, let, package, private, protected, public, static, and yield. these key words are not allowed in strict mode

// let eval = 44;
// "use strict"
// var let=332;

//11. Deleting Variables, Functions, or Function Parameters: You can't delete a variable, function, or parameter.

// "use strict";
// var x = 5;
// delete x; // Throws an error

//12. Duplicate Object Property Names: Object literals cannot have properties with the same name.

// "use strict"; 

// const obj = { 
//     p1: 1, p1: 2 // i have to learn it  becouse it  is not showing  error
//  };

//13. Strict this: Binds this to undefined if not explicitly set.

// "use strict";
// function logThis() {
//     console.log(this); // Logs undefined instead of global object/window
// }

// logThis();

// 14. With Statement: The with statement is not allowed.

// "use strict";
// with (Math) { // Throws an error
//     let x = cos(3);
//     console.log(x);
//     console.log("hello");
    
// }



// Practice set using "use strict" interview based question

// "use strict";

// function test() {
//     undeclaredVariable = 5;
//     return undeclaredVariable;
// }

// console.log(test()); 

// "use strict";

// function checkOctalLiteral() {
//     let num = 015; // Octal 15
//     return num;
// }

// console.log(checkOctalLiteral());//octal leterals not allowed

// "use strict";

// function evalAssign() {
//     let eval = 10;
//     return eval;
// }

// console.log(evalAssign());// unexpected eval 

// "use strict";

// function duplicateParam(a, a, b) {
//     return a + b;
// }

// console.log(duplicateParam(1, 2, 3));// duplicate parameters name is not allowed

// "use strict";

// function usingWith() {
//     with (Math) {
//         let x = cos(3);
//     }
//     return x;
// }

// console.log(usingWith());// strict mode code many not include a with statement



// with  statement  in short
{

    // with statment 
    
    // The with statement in JavaScript is used to extend the scope chain for a statement, effectively providing shorthand access to properties of an object. When you use with, you can write less code by omitting the object reference each time you access one of its members.
    
    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // };
    
    // // Without 'with' statement
    // // console.log(obj.a);
    // // console.log(obj.b);
    // // console.log(obj.c);
    
    // // With 'with' statement
    // with (obj) {
    //     // console.log(a);
    //     // console.log(b);
    //     // console.log(c);
    // }
    }
    
    
}







// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

// var firstName = "captain";

// // use a variable 
// console.log(firstName);

// // change value 

// firstName = "jack";

// console.log(firstName);





