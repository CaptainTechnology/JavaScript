// how to clone array 

// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// // let array2 = ["item1", "item2"];
// // let array2 = array1.slice(0).concat(["item3", "item4"]);
// // let array2 = [].concat(array1,["item3", "item4"]);
// // new way 
// // spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2)


// cloining a array

// spread operator
// let original = [1, 2, 3];
// let clone = [...original]; // Spread operator creates a copy
// console.log(..."hello");


// console.log(...original);

// let o={name:'captin',"village":"pach"};
// let original = [1, 2, 3,{...o}];

// console.log(original);

// let newo={
//     ...o,
//     n:{shah:"bhai",num:3}
// }

// console.log(newo);



// clone[0] = 99; // Modifying clone does not affect original
// console.log(original); // [1, 2, 3] ✅ (Unchanged)
// console.log(clone); // [99, 2, 3] ✅ (Modified copy)
// console.log(original===clone);


// let originalObject = { a: 1, b: 2 };
// let shadowCopy = originalObject;  // Shadow copy (reference)

// shadowCopy.a = 10;

// console.log(originalObject.a); // 10 (original is also modified)
// console.log(shadowCopy.a);     // 10 (same object referenced)
// // console.log(originalObject===shadowCopy);


// let org=[1,2,[3,4]];
// let copy=org;
// copy[2][0]=55;
// console.log(org,copy);



// let numbers = [1, 2, 3, 4,5];

// function sum(a, b, c, d,e) {
//   return a + b + c + d + e;
// //   return a +undefined;
// }

// let result = sum(...numbers);  // Spread the array elements as individual arguments

// console.log(result);  // 15



// using slice method


// let arr = [1, 2, 3, 4,[44,33]];
// let clonedArr = arr.slice();
// console.log(clonedArr); // Output: [1, 2, 3, 4]
// console.log(arr === clonedArr); // Output: false (Different references)

// let arr = [1, 2, 3, 4,[55,66]];
// let clonedArr = [...arr];
// clonedArr[4][0]=7777;

// console.log(arr,clonedArr); // Output: [1, 2, 3, 4]
// console.log(arr === clonedArr); // Output: false


// let arr = [1, 2, 3, 4];
// let clonedArr = Array.from(arr);

// clonedArr[0]=5456;// it will not effect the original array

// console.log(clonedArr); // Output: [1, 2, 3, 4]
// console.log(arr === clonedArr); // Output: false

// console.log(arr,clonedArr);


// let arr = [1, 2, 3, 4];
// let clonedArr = arr.concat();

// clonedArr[0]=544;

// let newc=arr.concat(11,22)

// // console.log(clonedArr); // Output: [1, 2, 3, 4]
// // console.log(arr === clonedArr); // Output: false



// console.log(arr,clonedArr,newc);


// let arr = [1, 2, { a: 10, b: 20 }];
// let clonedArr = arr.concat();

// console.log(arr,clonedArr);
// console.log(arr[2].a===arr[2].a);




// using JSON.parse(JSON.stringfy(arr))


// let arr = [1, 2, { a: 10, b: 20 },function f(){console.log("Hello"); 
//     return "hello captain"
// }];
// let clonedArr = JSON.parse(JSON.stringify(arr));

// // clonedArr[0]=543;
// // clonedArr[2].c=88;

// console.log(arr,clonedArr);
// console.log(arr===clonedArr);
// console.log(arr[2]===clonedArr[2]);



// let arr = [1, 2, { a: 10, b: 20 }];
// let clonedArr = structuredClone(arr);

// console.log(clonedArr); // Output: [1, 2, { a: 10, b: 20 }]
// console.log(arr === clonedArr); // Output: false
// console.log(arr[2] === clonedArr[2]); // Output: false (Deep cloned)



// let fruits = ["Apple", "Banana", "Cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);  // Output: Apple, Banana, Cherry
// }


// for of loop

// for (const element of fruits) {
//     console.log(element);
       
// }


// const a=32;



// const fruits = ["Apple", "Banana", "Cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     let fruit = fruits[i];
//     console.log(`i: ${i}, fruit: ${fruit}`);
//     console.log('Scope ID:', Symbol());
// }


// const fruits = ["Apple", "Banana", "Cherry"];

// for (const fruit of fruits) {
//     console.log('fruit:', fruit);
//     console.log('Scope ID:', Symbol());
// }


// const fruits = ["Apple", "Banana", "Cherry"];

// for (const fruit of fruits) {
//    console.log(fruit);
   
// }


// let person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
//   for (const key in person) {
//     console.log(key);        // Outputs: 'name', 'age', 'city'
//     // console.log(person[key]); // Outputs: 'John', 30, 'New York'
//   }
  

let arr = ["first", 20,{"Name":"captain",age:32}, 30];

for (let index of arr) {
  console.log(index);      // Outputs: '0', '1', '2' (indexes)
//   console.log(arr[index]); // Outputs: 10, 20, 30 (values)
}
