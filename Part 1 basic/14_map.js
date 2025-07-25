// A Map object is a collection of key-value pairs, where each key is unique, and you can store values associated with keys. Unlike objects, where the keys are always strings (or symbols), in a Map, the keys can be any value (including objects, arrays, functions, and primitive types).


// let map = new Map();
// map.set("name","captain")
// map.set('a', 1); // Adds the key 'a' with value 1
// map.set(42, 'answer'); // Adds the key 42 with value 'answer'

// let value = map.get('a'); // Returns 1
// let unknown = map.get('b'); // Returns undefined, since 'b' is not a key
// // we can not get direct value of set using index but we can access using key in map
// console.log(value,unknown);


// console.log(map.has('a')); // true
// console.log(map.has('b')); // false

// console.log(map.delete('a')); // true (removes the 'a' key-value pair)
// console.log(map.delete('b')); // false (no such key 'b')

// map.clear(); // Removes all key-value pairs from the map

// console.log(map);


// let keys = map.keys();
// for (let key of keys) {
//   console.log(key); // Logs all the keys
// }

// let values=map.values();
// for(let val of values){
//   console.log(val);
// }

// let entries = map.entries();
// for (let [key, value] of entries) {
//   console.log(key, value); // Logs all keys and values as [key, value] pairs
// }

// map.forEach((value, key) => {
//   console.log(key, value); // Logs each key-value pair
// });

// console.log(map.size); // Returns the number of entries in the map


// // usage

// const person = { name: "John" };
// const metadata = new Map();
// metadata.set(person, { age: 30, occupation: "developer" });

// console.log(metadata.get(person)); // { age: 30, occupation: "developer" }


// downfall

// const obj = {};
// obj[42] = "value";  // key is implicitly converted to string
// console.log(obj["42"]); // "value"

// const map = new Map();
// map.set(42, "value");  // key is kept as number
// console.log(map.get(42)); // "value"

// const obj={
//   "name":'captain',
//   "age":23
// }

// const map=new Map(obj)//object is not iterable error

// const map = new Map([['a', "Apple"], ['b', "boll"], ['c', 3],['c',36]]);
// console.log(map); //c 36

// map.forEach((item,index)=>{
//   console.log(item,index);
// })




// const methodAndReturn={
//   "methods": {
//     "set(key, value)": "Map",
//     "get(key)": "any",
//     "has(key)": "boolean",
//     "delete(key)": "boolean",
//     "clear()": "undefined",
//     "keys()": "MapIterator",
//     "values()": "MapIterator",
//     "entries()": "MapIterator",
//     "forEach(callbackFn, thisArg)": "undefined"
//   },
//   "property": {
//     "size": "number"
//   }
// }


// const comparisonObjMap={
//   "Feature": {
//     "Key types": {
//       "Object": "Only strings or symbols",
//       "Map": "Any type (object, function, primitive)"
//     },
//     "Order": {
//       "Object": "Not guaranteed",
//       "Map": "Insertion order preserved"
//     },
//     "Size": {
//       "Object": "Not available directly",
//       "Map": ".size property available"
//     },
//     "Performance": {
//       "Object": "Slower for dynamic operations",
//       "Map": "Optimized for frequent additions/removals"
//     },
//     "Iteration": {
//       "Object": "Requires Object.keys() or for...in loop",
//       "Map": "Directly iterable (e.g., for...of)"
//     },
//     "Methods for iteration": {
//       "Object": "Not built-in",
//       "Map": ".forEach(), .keys(), .values(), .entries()"
//     }
//   }
// }




// all in one


// const map = new Map();

// map.set('name', 'John');
// map.set(42, 'Answer');
// map.set(true, 'Boolean');

// console.log(map.get('name'));     // "John"
// console.log(map.has(42));         // true
// console.log(map.size);            // 3

// map.delete(true);                 // removes the entry with key `true`
// map.forEach((val, key) => {
//   console.log(`${key}: ${val}`);
// });

// for (let key of map.keys()) console.log(key);
// for (let val of map.values()) console.log(val);
// for (let [k, v] of map.entries()) console.log(k, v);

// map.clear();                      // empties the map
// console.log(map.size);           // 0


