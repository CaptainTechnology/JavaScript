// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length)// using an array

// let s1 = new Set([10, 30, 30, 40, 40]);
// console.log(s1);
// console.log(s1.values());

// let s2 = new Set(["gfg", "gfg", "geeks"]);
// console.log(s2);

// // using string
// let s3 = new Set("fooooooood");
// console.log(s3);

// // an empty set
// let s4 = new Set();
// console.log(s4);

// const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers); // Output: Set {1, 2, 3, 4, 5}
// let n=numbers.delete(1)

// console.log(numbers); // Output: Set {20}
// console.log(numbers.has(1)); // Output: false

// const mySet = new Set(["apple", "banana", "mango","apple","banana"]);

// for (const element of mySet) {
//     console.log(element);
// }
// mySet.forEach((elem,index)=>{
//     console.log(elem,index); 
// })

// console.log(mySet.entries());

// Output:
// apple
// banana
// mango
// const mySet = new Set([1, 2, 3]);
// const iterator = mySet.values();

// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2
// console.log(iterator.next().value); // Output: 3

// const mySet = new Set([1, 2, 3]);
// const entriesIterator = mySet.entries();

// console.log(entriesIterator.next().value); // Output: [1, 1]
// console.log(entriesIterator.next().value); // Output: [2, 2]
// console.log(entriesIterator.next().value); // Output: [3, 3]
let myMap = new Map();
// let anotherMap = new Map([
//     ['name', 'GFG'],
//     ['age', 30],
//     ['city', 'Noida'],
//     [{id:100},"yes object"]
// ]);

// myMap.set("name","captain")
// myMap.set("k","captain")
// console.log(myMap);

// console.log(myMap.size);
myMap.set('name', 'Alice').set('age', 25);

// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// Output:
// name: Alice
// age: 25
const keys = myMap.keys();
// console.log(keys); // Output: [Map Iterator] { 'name', 'age' }
// console.log(keys.next().value);

// console.log([...keys]); // Output: ['name', 'age']


// let entr=myMap.entries();
// console.log(entr);
// // for(let k of entr){
// //     console.log(k);
// // }



// let user = {}; // No "address" property

// console.log(user.name.address); 
// // ❌ ERROR: Cannot read properties of undefined (reading 'street')

// let usr={
//     name:{fName:"captain",lName:"Jack"},
//     age:32,
//     adr:{city:"SN",resident:true}
// }
// console.log(usr?.k?.n.o.p.d.e);


// let h=console.log("hello");

let car = {
    brand: "Tesla",
    start: function() {
      return "Car is starting..."+this.brand;
    }
  };
  
  console.log(car.start()); // ✅ "Car is starting..."
  


