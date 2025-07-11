// In JavaScript, a class is a blueprint for creating objects with shared properties and methods. It was introduced in ES6 (ECMAScript 2015) and provides a cleaner, more concise syntax compared to traditional prototype-based object creation.

// Basic Syntax

// class ClassName {
//   constructor(param1, param2) {
//     this.prop1 = param1;
//     this.prop2 = param2;
//   }

//   method1() {
//     // code
//   }

//   method2() {
//     // code
//   }
// }

// example


// class Person {
//   salary=32000; //public property

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person1 = new Person("Alice", 30);
// console.log(Person.salary);// undefined
// console.log(person1.salary);// undefined

// const person2 =  Person("Alice", 30); without new error will be show new is compulsary for calling constructor
// person1.greet();  // Output: Hello, my name is Alice

// 🔹 Constructor Method
// constructor() is a special method used to initialize object properties.
// Automatically called when a new object is created using the new keyword
// 
// 🔹 Adding Methods
// Methods defined inside a class are added to its prototype.
// They are shared among all instances of the class.


// 🔹 Inheritance (Extending a Class)
// Use the extends keyword to create a subclass (child class).


// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // Call parent constructor
//     this.grade = grade;
//   }

//   study() {
//     console.log(`${this.name} is studying in grade ${this.grade}`);
//   }
// }

// const student1 = new Student("Bob", 18, 12);
// student1.greet(); // From parent class
// student1.study(); // From child class


// 🔹 The super() Keyword
// Used inside a child class to call the constructor or methods of the parent class.

// 🔹 Getters and Setters
// They allow you to define computed properties or control access to properties.
// Getters and Setters are special methods used to access and modify the properties of an object or class safely and efficiently.
// They look like normal properties but actually run a function behind the scenes.


// getter and setters 

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }


// const person1 = new Person("harshit", "sharma", 5);
// // console.log(person1.fullName());// error it  is not a function becouse it works as property
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";// set the property directly 
// // console.log(person1);



// 🔹 Static Methods
// Static methods are called on the class itself, not on instances.


// 🔹 Private Fields (# syntax – ES2022+)
// JavaScript supports private class fields using #.



// // static methods and properties
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     static classInfo(){
//         return 'this is person class';
//     }
//     static desc = "static property";
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     eat(){
//         return `${this.firstName} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());

// console.log(person1.desc);// static property undefined becouse it relates to the class itself not the instances of the class
// const info = Person.classInfo();
// console.log(info);
// // person1.classInfo();//erro it is not a function





// class Circle {
//     #radius=333; // private field
//     static names="captain jack";
//     constructor(radius) {
//         this.#radius = radius;
//     }

//     #calculateArea() { // private method
//         return Math.PI * this.#radius * this.#radius;
//     }

//     getArea() {
//         return this.#calculateArea();
//     }
// }

// const circle = new Circle(5);
// console.log(circle.getArea()); // Accessing through public method
// // console.log(circle.#radius); // SyntaxError: Private field '#radius' must be declared in an enclosing class
// console.log(Circle.names);
// console.log(Circle.password);
// console.log(Circle);




// 🔹 Class Expressions
// Classes can also be defined as expressions, not just declarations.

const Animal = class {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};




// ✅ Benefits of Using Classes
// Clear and organized code.

// Follows object-oriented principles.

// Reusable and scalable.

// Easier inheritance with extends.


// all in one 
// all in one 
// all in one 
// all in one 
// all in one 
// all in one 
// all in one 
// all in one 




// Base class
class Person {
  // Public field (ES2022+)
  country = "India";

  // Private field (ES2022+)
  #ssn = "123-45-6789";

  // Constructor: initialize properties
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age;
  }

  // Getter: computed property
  get info() {
    return `${this.name}, ${this.age} years old`;
  }

  // Setter: validate and set new name
  set info(newName) {
    if (newName.length > 0) this.name = newName;
  }

  // Instance method
  greet() {
    console.log(`Hello, I am ${this.name} from ${this.country}`);
  }

  // Private method using # (optional modern syntax)
  #getSSN() {
    return this.#ssn;
  }

  // Public method to access private field
  showSSN() {
    console.log(`Private SSN: ${this.#getSSN()}`);
  }

  // Static method (called on class, not instance)
  static sayWelcome() {
    console.log("Welcome to the Person class!");
  }
}

// Subclass using inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }

  // Overriding method
  greet() {
    console.log(`Hi, I'm ${this.name}, a student in grade ${this.grade}`);
  }
}

// Create an instance of Person
const person1 = new Person("Alice", 30);
person1.greet();              // Hello, I am Alice from India
console.log(person1.info);    // Alice, 30 years old
person1.info = "Alicia";      // Using setter
console.log(person1.info);    // Alicia, 30 years old
person1.showSSN();            // Private SSN: 123-45-6789

// Call static method
Person.sayWelcome();          // Welcome to the Person class!

// Create an instance of Student
const student1 = new Student("Bob", 18, 12);
student1.greet();             // Hi, I'm Bob, a student in grade 12
console.log(student1.info);   // Bob, 18 years old
