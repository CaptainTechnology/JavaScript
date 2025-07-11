
// function hello(){
//     console.log("hello");
    
// }
// hello.prototype.Fname="captain";
// hello.prototype.isTrue=function (){
//     return true;
// }

// console.log(hello.prototype.Fname);
// console.log(hello.prototype.isTrue());
// // console.log(hello.isTrue());//error becouse isTrue added to the prototype not in function
// // but if we will use new keyword and make instance then prototyp automatically set and we can access using hello.isTrue


// const hello1=new hello();
// hello1.isTrue();


// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());



// new keyword


// function createUser(firstName, lastName, email, age, address){
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

// createUser.prototype.h=function h(){
//     console.log("hello");
    
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(this.name + " makes a sound");
// };

// const dog =new Animal("Dog");
// // dog.speak(); // "Dog makes a sound"
// console.log(dog.speak());


// function createUser(fn,age){
//     this.fn=fn;this.age=age;
// }

// createUser.prototype.about=function (){
//     console.log(this.fn,this.age);
// }

// const user1=new createUser("captan",32)
// const user12=new createUser("captan",32)

// console.log(user1.about());
// // console.log(user2.about());
// createUser.prototype.about();
// createUser.about();



// function Car(model){
//     this.model=model;
// }

// Car.prototype.word=function (){
//     console.log("Car is going...");
// }

// const car1=new Car("fortuner");
// Car.prototype.speed=223;

// console.log(car1.model);
// // console.log(car1.prototype.word());// error 

// console.log(car1.speed);


// function Car(model){
//     const obj=Object.create(Car.prototype);
//     obj.model=model;
//     return obj;
// }

// Car.prototype.word=function (){
//     console.log("Car is going...");
// }

// Car.prototype.speed=223;

// const car1=Car("fortuner");

// console.log(car1.speed);
// console.log(car1.word());


// new


function Car(model){
 this.model=model;
 const kk="kk"
}

Car.prototype.work=function (){
    console.log("Car is going...");
}

Car.prototype.speed=223;

const car1=new Car("fortuner");
const car2=new Car("XVW");


Car.prototype.extra="extra furtuner";

console.log(car2.extra);
console.log(car2.model);
console.log(Car.extra);







