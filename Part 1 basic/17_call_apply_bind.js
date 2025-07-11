

// call method 
// call() is a built-in JavaScript method that allows you to call a function and explicitly set the value of this inside that function.
// syntax : functionName.call(thisArg, arg1, arg2, ...);


// function allInfo(hobby,income){
//     console.log(this.fName," last age is ",this.age);
//     // console.log(hobby," income is ",income);
// }

// const user1={
//     fName:"user1",
//     age:23,
//     getInfo:function (hobby,income){
//         console.log(this.fName," last age is ",this.age);
//         // console.log(hobby," income is ",income);
//     }
// }
// const user2={
//     fName:"user2",
//     age:55,
// }

// user1.getInfo();
// user1.getInfo.call(user2);
// user1.getInfo.call(user1,"Software Engineer",12000)

// allInfo.call();
// allInfo.call(user1)
// allInfo.call(user2)

// allInfo.call(user1,"Corporate Employee",12999)




// // apply : func.apply(thisArg, [arg1, arg2, ...]);
// The apply() method is a built-in JavaScript method used to call a function immediately and set the value of this manually.
// The main difference from call() is that apply() takes arguments as an array.


// function allInfo(hobby,income){
//   console.log(this.fName," last age is ",this.age);
//   // console.log(hobby," income is ",income);
// }

// const user1={
//   fName:"user1",
//   age:23,
//   getInfo:function (hobby,income){
//       console.log(this.fName," last age is ",this.age);
//       // console.log(hobby," income is ",income);
//   }
// }
// const user2={
//   fName:"user2",
//   age:55,
// }

// user1.getInfo();
// user1.getInfo.apply(user2);
// user1.getInfo.apply(user1,["Software Engineer",12000])

// allInfo.apply();
// allInfo.apply(user1)
// allInfo.apply(user2)
// // allInfo.apply(user1,"Corporate Employee",12999)//error paass argument as an array
// allInfo.apply(user1,["Corporate Employee",12999])//error




// bind
// The bind() method creates a new function that, when called, has its this keyword set to a specific value.
// Unlike call() and apply(), it does not call the function immediately — it just returns a new copy of the function with a bound this.

// syntax : const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);



// function allInfo(hobby,income){
//   console.log(this.fName," last age is ",this.age);
//   console.log(hobby," income is ",income);
// }

// const user1={
//   fName:"user1",
//   age:23,
//   getInfo:function (hobby,income){
//       console.log(this.fName," last age is ",this.age);
//       console.log(hobby," income is ",income);
//   }
// }
// const user2={
//   fName:"user2",
//   age:55,
// }

// const user1Obje=user1.getInfo.bind(user2);
// const user2Obje=user1.getInfo.bind(user1,["Software Engineer",12000])

// user1Obje()
// user2Obje();


// // allInfo.bind();


// const u1All=allInfo.bind(user1)
// const u2All=allInfo.bind(user2)
// u1All();
// u2All();
// // allInfo.apply(user1,"Corporate Employee",12999)//error paass argument as an array
// const uAllArg=allInfo.bind(user1,["Corporate Employee",12999])//error
// uAllArg();




// comparisosn

const comparison={
  "methods": {
    "call": {
      "definition": "Calls a function immediately with a specified `this` value and arguments provided one by one.",
      "syntax": "function.call(thisArg, arg1, arg2, ...)",
      "parameters": {
        "thisArg": "The object to use as `this` inside the function.",
        "arg1, arg2, ...": "Optional arguments passed individually to the function."
      },
      "callsImmediately": true,
      "returns": "The result of the function call.",
      "example": "greet.call(user, 'Hello'); // Output: 'Hello, Alice'",
      "useCases": [
        "Call a function with a different `this`",
        "Method borrowing",
        "Constructor chaining"
      ]
    },
    "apply": {
      "definition": "Calls a function immediately with a specified `this` value and arguments provided as an array.",
      "syntax": "function.apply(thisArg, [argsArray])",
      "parameters": {
        "thisArg": "The object to use as `this` inside the function.",
        "argsArray": "An array or array-like object of arguments."
      },
      "callsImmediately": true,
      "returns": "The result of the function call.",
      "example": "greet.apply(user, ['Hi', '!']); // Output: 'Hi, Alice!'",
      "useCases": [
        "Same as call(), but when arguments are in array form",
        "Math.max.apply(null, [1, 2, 3])",
        "Working with array-like objects like arguments or NodeLists"
      ]
    },
    "bind": {
      "definition": "Creates and returns a new function with a specified `this` value and optional pre-filled arguments. It does NOT call the function immediately.",
      "syntax": "const newFunction = function.bind(thisArg, arg1, arg2, ...)",
      "parameters": {
        "thisArg": "The object to bind as `this`.",
        "arg1, arg2, ...": "Optional arguments that are pre-set for the new function."
      },
      "callsImmediately": false,
      "returns": "A new function with `this` and optionally arguments fixed.",
      "example": "const greetAlice = greet.bind(user, 'Hello'); greetAlice(); // Output: 'Hello, Alice'",
      "useCases": [
        "Preserve `this` in callbacks or event handlers",
        "Partial function application",
        "Delayed execution with bound context"
      ]
    }
  },
  "comparison": {
    "call": {
      "callsImmediately": true,
      "argumentFormat": "Comma-separated values",
      "returns": "Function result"
    },
    "apply": {
      "callsImmediately": true,
      "argumentFormat": "Array of values",
      "returns": "Function result"
    },
    "bind": {
      "callsImmediately": false,
      "argumentFormat": "Comma-separated values",
      "returns": "New function"
    }
  }
}
