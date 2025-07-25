
// Absolutely! The spread operator in JavaScript is a powerful and versatile feature introduced in ES6 (ECMAScript 2015). It's represented by three dots (...) and is used to "spread" or expand elements of an iterable (like arrays or objects) into individual elements or properties.
// It can be used in arrays, objects, and function arguments.

// Yes — the spread operator (...) always creates a shallow copy, not a deep copy.
// A shallow copy only copies the first level of data. If the original data has nested objects or arrays, those nested references are still shared between the original and the copy.

// 1. Spread in Arrays
// ➤ Example: Expanding arrays
// create a shallow copy

// const nums1 = [1, 2, 3,[44,55],{"name":"shah"}];
// const nums2 = [4, 5, 6];
// const combined = [...nums1, ...nums2];
// console.log(combined);


// combined[4].name="captain"
// console.log(combined[4].name); // [1, 2, 3, 4, 5, 6]
// console.log(nums1[4].name);//captain


// ✅ d. Spreading a String into Characters

// const str = "hello";
// const chars = [...str];
// console.log(...str);
// console.log(chars); // ['h', 'e', 'l', 'l', 'o']


// 2. In Objects (shallow copy)
// The spread operator can also copy or merge plain objects (not instances of classes or objects with prototypes).


// cloning object

// const user = { name: "Alice", age: 25 ,address:{city:"sd"}};
// const clone = { ...user };
// clone.name="captain";
// clone.address.city="Bansi"
// console.log(clone); // { name: "Alice", age: 25 }
// console.log(user.name,user.address.city);

// ✅ b. Merging Objects
// If keys collide, later properties overwrite earlier ones.

// const a = { x: 1, y: 2 };
// const b = { y: 100, z: 3 };
// const merged = { ...a, ...b };

// console.log(merged); // { x: 1, y: 100, z: 3 }

// ✅ c. Adding/Overwriting Properties

// const user = { name: "Bob" };
// const updated = { ...user, age: 30 };

// console.log(updated); // { name: "Bob", age: 30 }




// 🟩 3. In Function Calls
// ✅ a. Expanding Arguments
// Perfect for functions that expect multiple arguments:
// function greet(a, b, c) {
//     console.log(a, b, c);
//   }
  
//   const args = ["Hello", "there", "!"];
//   greet(...args); // Hello there !
  



// ⚠️ Important Notes
// 🔸 1. Shallow Copy Only
// Spread does not deeply clone nested objects/arrays:

// const original = { a: 1, nested: { b: 2 } };
// const copy = { ...original };

// copy.nested.b = 999;

// console.log(original.nested.b); // 999 — ⚠️ affected original

// 2. Order Matters
// const result = { ...{ a: 1 }, ...{ a: 2 } };
// console.log(result); // { a: 2 } — last value wins


// let obj1={"name":"capt","addr":{"city":"sd"}};

// let obj2={
//     // ...obj1,
//     //limitation shallow copy
//     ...JSON.parse(JSON.stringify(obj1)),  // overcome the  problem of shallow copy
//     "course":"BCA"
// }

// obj2.addr.city="hh"
// console.log(obj1.addr.city);

