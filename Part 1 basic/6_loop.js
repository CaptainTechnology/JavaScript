
//while loop execute code as long as given condition is true used when you don't know how many times you want to loop but want to continue as long as condition is true

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// console.log(i);


// let password;
// let correctPassword = "abc123";

// while (password !== correctPassword) {
//   password = prompt("Enter your password:");
// }

// alert("Access granted!");


// for loop repeat the code a set number of time, usedful wen you know advance how many times you want to execute a block of code

// for(let i=0; i<=10; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }


// const cartItems = [
//     { name: "T-shirt", price: 20 },
//     { name: "Jeans", price: 40 },
//     { name: "Sneakers", price: 60 },
//     { name: "Shoes", price: 300 }
//   ];

//   let total = 0;
// //   console.log(cartItems.length);
  

//   for (let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price;
//   }

//   console.log("Total cost: $" + total);


// do while loop similar to while but execute code at least one even if the condition is false


// let i = 5;
// while(i<5){
//     console.log("this won't run."); 
// }

// do {
//   console.log("This will run once.");
// } while (i < 5);


// let correctPassword = "jsRocks123";
// let userInput;
// let attempts = 0;

// do {
//   userInput = prompt("Enter your password:");
//   attempts++;
// } while (userInput !== correctPassword && attempts < 3);

// if (userInput === correctPassword) {
//   console.log("Access granted!");
// } else {
//   console.log("Too many attempts. Access denied.");
// }



// break continue


// for(let i=0;i<=10; i++){

//     console.log("log i is : ",i);
//     for(let j=0;j<20;j++){
//         if(j==2){
//             break;
//         }
//         console.log(j);
//     } 

//     console.log("done");

// }

// for (let i = 0; i <= 10; i++) {

//     console.log("log i is : ", i);
//     for (let j = 0; j < 5; j++) {
//         if (j == 2) {
//             continue;
//         }
//         console.log(j);
//     }

//     console.log("done");

// }