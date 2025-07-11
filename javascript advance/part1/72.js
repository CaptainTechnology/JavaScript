// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();

// console.log(this);

// "use strict";
// function showThis() {
//     console.log(this);  // In a browser, this refers to the `window` object
// }
  
// showThis();
  
// window.showThis();

window.value=343;


// let obj = {
//     value: 42,
//     arrowFunction: () => {
//       console.log(this.value);  // `this` refers to the global object, not `obj`
//     },
//     regularFunction: function() {
//       console.log(this.value);  // `this` refers to `obj`
//     }
//   };
  
//   obj.arrowFunction();  // Undefined (or the global value if set)
//   obj.regularFunction();  // Output: 42
  



//   let obj = {
//     value: 42,
//     regularMethod: function() {
//       console.log("Inside regular method:", this.value);  // `this` refers to `obj`

//       const arrowFunc = () => {
//         console.log("Inside arrow function:", this.value);  // `this` refers to `obj` (inherited from `regularMethod`)
//       };
  
//       arrowFunc();
//     }
//   };
  
//   obj.regularMethod();
  


// call method 

// function allInfo(hobby,income){
//     console.log(this.fName," last age is ",this.age);
//     console.log(hobby," income is ",income);
// }
// const user1={
//     fName:"user1",
//     age:23,
//     getInfo:function (hobby,income){
//         console.log(this.fName," last age is ",this.age);
//         console.log(hobby," income is ",income);
//     }
// }
// const user2={
//     fName:"user2",
//     age:55,
// }



// let fName="shah";
// allInfo.call();

// const usr3={}
// user1.getInfo.call(user1,33,44);
// allInfo.call(user2,"yes","no");

// // apply

// allInfo.apply(user2,["yes","no"]);



// const fun=allInfo.bind({fistName:"shah"},"yes","no")();



// apply

// const person = {
//     firstName: "Alice",
//     lastName: "Johnson"
//   };
  
//   function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
//   }
  
//   // Using apply() to pass arguments as an array
//   greet.apply(person, ["Hello", "!"]);  // Output: Hello, Alice Johnson!
//  greet.apply({},[]);  // Output: Hello, Alice Johnson!
  

  
// const person = {
//     firstName: "Alice",
//     lastName: "Johnson"
//   };
  
//   function greet(age,prosion) {
//     console.log(`${this.firstName} ${this.lastName} ${age} ${prosion}`);
//   }
  
//   // Bind the `this` value to the `person` object
// //   const greetPerson = greet.bind(person,44,"doctor");
//   const greetPerson = greet.bind(person,12);
  
//   // Call the new function
//   greetPerson(23,"engineer");  // Output: Hello, Alice Johnson
  

// let tt=()=>{
//     console.log(this.fName);
// }

// tt.apply({fName:"shah"});

// [[prototype]] and __proto__
const animal = {
    species: 'Dog',
    speak() {
      console.log('Woof!');
    }
  };
  
  // Create another object 'dog' that inherits from 'animal'
  const dog = Object.create(animal);
  dog.name = 'Buddy';
  
  // Accessing properties of 'dog'
  console.log(dog.name);  // Output: Buddy (own property)
  console.log(dog.species);  // Output: Dog (inherited from 'animal')
  dog.speak();