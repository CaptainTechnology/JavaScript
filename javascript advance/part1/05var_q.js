// declare constants 

// const pi = 3.14;
// console.log(pi);


// output based question using variable (let,cont and var)

// function scopeTest() {
//     var x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x); // ?
//         const y = 3;
//         console.log(y); // ?
//     }
//     console.log(x); // ?
// }
// scopeTest();

// console.log(a); // ?
// var a = 5;
// console.log(a); // ?

// const a = 10;
// {
//     a=43;// assignment to constant variable
// }
// try {
//     a = 20;
// } catch (e) {
//     console.log(e.message); // ?
// }

// let num = 10;
// if (num > 5) {
//     let num = 20;
//     console.log(num); // ?
// }
// console.log(num); // ?

// try {
//     console.log(b); // ?
//     let b = 10;
// } catch (e) {
//     console.log(e.message); // ?
// }

// var foo = 1;
// function updateFoo() {
//     var foo = 2;
//     console.log(foo); // ?
// }
// updateFoo();
// console.log(foo); // ?
// // each foo has it's own function scope 

// (function() {
//     var a = 5;
//     (function() {
//         var a = 10;
//         console.log(a); // ?
//     })();
//     console.log(a); // ?
// })();

// let x = 1;
// function outer() {
//     let x = 2;
//     function inner() {
//         let x = 3;
//         console.log(x); // ?
//     }
//     inner();
//     console.log(x); // ?
// }
// outer();
// console.log(x); // ?

// console.log(foo()); // ?
// function foo() {
//     return 1;
// }

// var bar = function() {
//     return 2;
// };
// console.log(bar()); // ?

// console.log(a); // ?
// let a = 5;

// const person = {
//     name: 'Raj',
//     age: 25
// };
// person.age = 26;
// console.log(person.age); // ?
// person = {}; // ?

// var arr = [1, 2, 3];
// function modifyArray() {
//     arr.push(4);
//     console.log(arr); // ?
//     arr = [5, 6, 7];
// }
// modifyArray();
// console.log(arr); // ?

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // ?
//     }, 100);
// }
// var is function-scoped, so i retains its final value (3) during each iteration.

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // ?
//     }, 100);
// }

// let is block-scoped, so a new i is created for each loop iteration.


// function test(a = 1, b = 2) {
//     console.log(a + b); // ?
// }
// test(3); // ?
// test(); // ?

// const obj = { p: 42, q: true };
// const { p: foo, q: bar } = obj;
// console.log(foo); // ?
// console.log(bar); // ?

// {
//     var foo = 1;
//     let bar = 2;
//     const baz = 3;
// }
//   console.log(foo); // ?
//   console.log(bar); // ?
//   console.log(baz); // ?


// var a = 5;
// function changeA() {
//   a = 10;
//   console.log(a); // ?
// }
// changeA();
// console.log(a); // ?
// Changing a inside changeA affects the global variable a because var is function-scoped.

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // ?
// arr = [5, 6, 7]; // ?

// const obj = { name: 'Raj' };
// obj.age = 25;
// console.log(obj); // ?
// obj = {}; // ?

// You can modify the contents of const arrays and objects, but you cannot reassign them to new arrays or objects.

// console.log(a); // ?
// let a = 10;
// console.log(b); // ?
// var b = 20;
// console.log(c); // ?
// const c = 30;

// var a = 100;
// function test() {
//   console.log(a); // ?
//   var a = 10;
//   console.log(a); // ?
// }
// test();
// console.log(a); // ?

// function outer() {
//     var a = 5;
//     function inner() {
//       let a = 10;
//       console.log(a); // ?
//     }
//     inner();
//     console.log(a); // ?
//   }
//   outer();


// console.log(a); // ?
// if (true) {
//   var a = 1;
// }
// console.log(b); // ?
// if (true) {
//   let b = 2;
// }


// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//         setTimeout(() => {
//             console.log(`${i},${j}`); // ?
//         }, 100);
//     }
// }


// var a = 10;
// function test(num = a) {
//     var a = 20;
//     console.log(num); // ?
// }
// test();

// function foo() {
//     bar();//bar is not a function
//     console.log(bar);// undefined

//     var bar = function() {
//         console.log('Inside bar'); // ?
//     };
//     bar();
// }
// foo();

// let x = 1;
// async function testAsync() {
//     let x = 2;
//     console.log(x); // ?
//     setTimeout(() => {
//         console.log(x); // ?
//     }, 100);
//     Promise.resolve().then(() => {
//         console.log(x); // ?
//     });
//     await sleep(50);
//     console.log(x); // ?
// }
// testAsync();

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// console.log(x); // ?


// const arr = [];
// for (const i of [1, 2, 3]) {
//     arr.push(i);
//     console.log(arr); // ?
// }


// console.log(foo()); // ?
// function foo() {
//     return 'Hello';
// }


// console.log(bar)//undefined
// console.log(bar()); // ?
// var bar = function () {
//     return 'World';
// };
// console.log(bar()); // ?


// var val = 7;
// function outer() {
//     val = 5;
//     function inner() {
//         var val = 3;
//         console.log(val); // ?
//     }
//     inner();
//     console.log(val); // ?
// }
// outer();
// console.log(val); // ?


// difficult questions


// console.log(foo); // ?
// var foo = 42;
// console.log(foo); // ?
// function test() {
//     console.log(bar); // ?
//     var bar = 21;
//     console.log(bar); // ?
// }
// test();
// console.log(foo); // ?


// console.log(a); // ?
// {
//     let a = 10;
//     console.log(a); // ?
// }
// console.log(a); // ?

// (function() {
//     var a = 5;
//     (function() {
//         let a = 10;
//         console.log(a); // ?
//     })();
//     console.log(a); // ?
// })();


// var a = 10;
// function show(a, b = a) {
//     console.log(b); // ?
// }
// show(30);
// show();

// var x = 10;
// function foo() {
//     var x = 20;
//     console.log(x); // ?
// }
// foo();
// console.log(x); // ?

// const obj = {a: 1};
// obj.a = 2;
// console.log(obj.a); // ?
// obj = {a: 3}; // ?

// var a = 10;
// function outer() {
//     var a = 20;
//     function inner() {
//         let a = 30;
//         console.log(a); // ?
//     }
//     inner();
//     console.log(a); // ?
// }
// outer();
// console.log(a); // ?


// const obj = {p: 42, q: true};
// const {p, q: r} = obj;
// console.log(p); // ?
// console.log(r); // ?

// let x = 3;
// {
//     let x = 4;
//     console.log(x); // ?
// }
// console.log(x); // ?

// let a = 5;
// if (true) {
//     let a = 10;
//     console.log(a); // ?
// }
// console.log(a); // ?


// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // ?
// arr = [5, 6, 7]; // ?

// console.log(x); // ?
// let x = 5;
// console.log(y); // ?
// var y = 10;

// console.log(foo); // ?
// const foo = 42;
// console.log(foo); // ?

// let a = 1;
// function x() {
//     a = 10;
//     function y() {
//         let a = 100;
//         console.log(a); // ?
//     }
//     y();
//     console.log(a); // ?
// }
// x();
// console.log(a); // ?


// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);  // ?
//     }, i * 100);
// } 

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);  // ?
//     }, i * 100);
// }


// const user = {name: 'John'};
// user.age = 30;
// console.log(user); // ?
// user = {name: 'Doe'}; // ?


// {
//     console.log(foo); // ?
//     const foo = 10;
//     console.log(foo); // ?
// }
