// ===============================================
// 🔍 Understanding the `new` keyword in JavaScript
// ===============================================

// ✅ The `new` keyword is used to create an instance of an object from a constructor function or class.
// It does 5 key things.
// 1️⃣ Creates an empty object: {}
// 2️⃣ Sets the prototype of the that object to Constructor.prototype
// 3️⃣ Binds `this` inside the constructor to the new object
//    - So when you assign properties like `this.name = name`, they get attached to the new object.
// 4️⃣ Executes the constructor code
// 5️⃣ Returns the new object automatically (unless another object is explicitly returned)

// -------------------------------------------------------
// 🚫 Object Creation WITHOUT using `new` keyword
// -------------------------------------------------------



function createUser(name, age) {
    const user = Object.create(createUser.prototype); // Manually set the prototype 
    user.name = name;
    user.age = age;
    return user;
}


// Add shared method to the prototype
createUser.prototype.about = function () {
    return `${this.name} is ${this.age} years old.`;
};


// Create user without `new`
const user1 = createUser('Harshit', 18);

// Test output
console.log(user1.about()); // Output: "Harshit is 18 years old."
console.log(user1 instanceof createUser); // true

// -------------------------------------------------------
// ✅ Object Creation USING the `new` keyword
// -------------------------------------------------------

function CreateUser(name, age) {
    // When called with `new`, `this` refers to the newly created object
    this.name = name;
    this.age = age;
    // No need to return explicitly
}

// Add shared method to the prototype
CreateUser.prototype.about = function () {
    return `${this.name} is ${this.age} years old.`;
};

// Create user using `new`
const userB = new CreateUser('Mohit', 20);

// Test output
console.log(userB.about());               // Output: "Mohit is 20 years old."
console.log(userB instanceof CreateUser); // true (correct prototype chain)





/*
Detailed explanation of what happens behind the scenes when you use the `new` keyword:

1️⃣ Creates an empty object: {}
   - JavaScript internally creates a fresh, empty object. Think of it like:
     const obj = {};

2️⃣ Sets the prototype of the new object to Constructor.prototype
   - The newly created object's internal prototype (__proto__) is set to point to the constructor function’s prototype.
   - This is why the new object can access methods defined on ConstructorFunction.prototype, like `about()` in this example.

3️⃣ Binds `this` inside the constructor to the new object
   - The constructor function is called with `this` bound to the new object.
   - So when you assign properties like `this.name = name`, they get attached to the new object.

4️⃣ Executes the constructor code with the provided arguments
   - All the lines inside the constructor function run, initializing the object’s properties with the values passed.

5️⃣ Returns the new object automatically (unless the constructor explicitly returns a different object)
   - If the constructor doesn't explicitly return an object, the newly created object (`this`) is returned by default.
*/
