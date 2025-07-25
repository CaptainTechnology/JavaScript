

// function hello(){
//     console.log("hello world");
// }
// hello();

// // javascript function === function+object // function work as function as well as object

// console.log(hello.name); // hello
// console.log(hello.length); // 0
// console.log(hello.prototype); // {} it is an empty object which each function has and it is called prototype object

// // function provide a prototype object in which we can add properties and methods
// hello.prototype.greet = function(){
//     console.log("hello");
// }

// hello.prototype.greet()
// hello.prototype.myName = "captain";
// hello.prototype.myAge = 25;

// console.log(hello.prototype.myName);
// console.log(hello.prototype.myAge);

// // only function has prototype object

// if(hello.prototype){
//     console.log("hello has prototype object");
// }else{
// console.log("hello does not have prototype object");

// }




// [[prototype]] and __proto__

// [[prototype]]: javascript object has a property called [[prototype]] which is used to access the prototype of the object
// // when we try to access a property from an object and it is missing then javascript takes the help of [[prototype]] to find the property in the prototype object and it is called prototypal inheritance

// const  person = { 
//     name: "raj",
//     age: 25,
// };

// console.log(person);
// console.log(person.valueOf()); 
// this  method is avalaible in person object [[prototype]] object that is why it is accessible




// [[prototype]] is not accessible directly but we can access it using __proto__ property
// console.log(person.__proto__); 
// shows the prototype object of person
// // __proto__ is a property of javascript object which is used to access the prototype of object 
// // __proto__ is not a standard property but it is used in javascript

// we can set the [[propetrty]] of and object using __proto__ if one object has not a property then it looks in [[prototype]] and takes it from here


// const a={
//     name: "captain",
//     age: 23,     
//     first:function(){
//       console.log("this is from a object");
//     }  ,
//     same:"from first"
// }

// const b={
//     name: "sodi",
//     age: 13 ,
//     same:"from second" 
// }

// b.__proto__=a;
// console.log(b);// in the protototype of b is a and inside a prototype there are default [[prototype]] as well

// console.log(b.first());
// console.log(a.same);
// console.log(b.same);

// a.__proto__.salary=12000;
// b.__proto__.commision=1000;
// console.log(b.salary);//12000
// console.log(b.commision);//1000
// console.log(b);
// console.log(b.__proto__);





// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }

// function createUser(firstName, lastName, email, age, address){
//     // const user=Object.create(userMethods);
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());





// modern javascript class replace the proto and prototyp but still prototype is used  in many places
