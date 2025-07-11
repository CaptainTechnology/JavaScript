// 2015 / es6 
// class keyword 
// class are fake

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la ";
//     }

// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// // console.log(Object.getPrototypeOf(user1));





// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la ";
//     }
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));







// const car={
//     name:"fortuner"
// }

// car.__proto__.model="toyota";// working
// car.prototype.brand=true;
// // Uncaught TypeError: Cannot set properties of undefined (setting 'brand')

// const c1=car;

// console.log(c1.model);


// class Car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model;
//     }

//     about(){
//         console.log(this.name,this.model);
//     }
//     speed0=542;
    

// }

// Car.prototype.speed=334;
// Car.isBrand=true;// part of Car only not work on car1
// console.log(new Car);


// const car1=new Car("fortuner","Toyota");
// car1.price=3300000;
// console.log(car1.price);
// console.log(car1.speed0);


// car1.about();
// console.log(car1.isBrand);

// console.log(car1.speed);



// class Car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model;
//     }

//     about(){
//         console.log(this.name,this.model);
//     }
//     speed=542;
    

// }

// const c1=new Car("forturneer","toyota");
// const c2=new Car("xuv","swift");
// console.log(c1.speed);
// c1.speed=0;
// console.log(c2.speed);



// class Car {
//     constructor(name, model) {
//         this.name = name;  // Instance property
//         this.model = model;  // Instance property
//     }

    
//     about() {
//         console.log(this.name, this.model);
//     }
// }
// console.log(n,m);

// const mc= Car("f","t");
// mc.about();
// const myCar = new Car("Toyota", "Camry");
// const anotherCar = new Car("Honda", "Civic");
// console.log(myCar.model+"yes");

// myCar.about();  // Outputs: Toyota Camry
// anotherCar.about();  // Outputs: Honda Civic


class Person {
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
        console.log(this);
        
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
person1.greet();  
person2.greet();
