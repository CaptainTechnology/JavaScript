// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0


// usage of truty and falsy values

// let userInput = ""; // Falsy value
// if (!userInput) {
//     console.log("No input provided");
// }

// let userName = "Alice"; // Truthy value
// if (userName) {
//     console.log("Hello, " + userName);
// }



// let providedName = ""; // Falsy value
// let defaultName = "Guest";
// let Name = providedName || defaultName; 
// console.log(Name); // Output: "Guest"

// let providedValue = "Hello"; // Truthy value
// let defaultValue = "Default";
// let value = providedValue || defaultValue; 
// console.log(value); // Output: "Hello"

// let isLoggedIn = true; // Truthy value
// let isAdmin = false; // Falsy value
// if (isLoggedIn && isAdmin) {
//     console.log("Welcome, admin!");
// } else {
//     console.log("Access denied");
// }


// let age = 0; // Falsy value
// let message = age ? "You are " + age + " years old" : "Age is not provided";
// console.log(message); // Output: "Age is not provided"

// let quantity = 5; // Truthy value
// let quantityMessage = quantity ? "Quantity: " + quantity : "No quantity available";
// console.log(quantityMessage); // Output: "Quantity: 5"

// console.log({}?"it's if":"it's else");

// let showMessage = true; // Truthy value
// showMessage && console.log("This will be shown");

// let hideMessage = false; // Falsy value
// hideMessage && console.log("This will not be shown");

// let myArray = [1, 2, 3];

// if (myArray.length) {
//     console.log("Array is not empty"); // Truthy value (length is 3)
// }

// let emptyArray = [];
// if (!emptyArray.length) {
//     console.log("Array is empty"); // Falsy value (length is 0)
// }


// let user = null; // Falsy value
// let username = user?.name || "Guest";
// console.log(username); // Output: "Guest"

// user = { name: "Alice" }; // Truthy value
// username = user?.name || "Guest";
// console.log(username); // Output: "Alice"

true ? (console.log("hello"), console.log("my name is captain")) : (console.log("kaise ho"),console.log("yes boss"));
;
