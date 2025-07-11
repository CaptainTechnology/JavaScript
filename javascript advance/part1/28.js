// primitve vs reference data types


console.log('primitive and refrence type');

// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);

// const a=[1,2,3]
// a[0]=32;
// console.log(a);



// reference types 
// array 
const array1 = ["item1", "item2"];
const array2 = array1;
array2.push("new value")
// array2=["new"]// it is reasinging
console.log("array1", array1);
console.log("array2", array2);
// array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

let arr3=["item1","item2","item3"]
console.log(array1===arr3);
