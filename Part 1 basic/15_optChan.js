
// Optional Chaining (?.) is a JavaScript operator introduced in ES2020 that allows you to safely access deeply nested object properties or call functions without having to manually check for null or undefined at each level.
// without optional channing access deep property can couse error

// const user  = {
//   name: "captain",
//   age:23
// }

// // console.log(user.address);//undefined
// // console.log(user.address.city);//error

// // fist way to handle
// // if(user.address){
// //   console.log(user.address.city);
// // }

// // second way
// // console.log(user.address &&  user.address.city);


// // optional channing control error in short
// // it is the solution and it is a sort to access nested property and handle error if nested property is undefined or null 

// console.log(user.adress?.city);
// //now if adress is available then it will check city

// console.log(user?.adress?.city);
// // // if user is a property of another  object then error handles


// const user  = {
//   name: "captain",
//   age:23,
//   address:{
//     city:"siddhartha nagar",
//     street:{
//       line2:"belouha"
//     }
//   },
//   getFullName:()=>{
//     return "captain "+" jack";
//   }
// }


// console.log(user.address?.city);
// console.log(user.address?.street?.line1);//undefined
// console.log(user.address?.street?.line2);


// // with function
// console.log(user.getFullName());
// // console.log(user.noFunction());
// //is  not function error

// console.log(user.noFunction?.());



// solution

// const key = "name";
// const person = { name: "John" };
// console.log(person?.[key]); // John


// Optional chaining only checks if the value before ?. is null or undefined. For all other values (even falsy ones like 0 or false), it proceeds as normal and can throw an error if the property doesn't exist or isn’t valid on that type.

