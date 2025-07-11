/*
============================================
  ✅ JavaScript Truthy & Falsy Values Guide
============================================
*/

// ❌ Falsy values: evaluate to false in boolean/conditional context
// (Only these 8 values are falsy, everything else is truthy)
console.log("\n--- Falsy Values ---");
console.log("Boolean(false):", Boolean(false));         // false
console.log("Boolean(0):", Boolean(0));                 // false
console.log("Boolean(-0):", Boolean(-0));               // false
console.log("Boolean(0n):", Boolean(0n));               // false (BigInt zero)
console.log("Boolean(\"\"):", Boolean(""));               // false (empty string)
console.log("Boolean(null):", Boolean(null));           // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN));             // false

// Note: [] (empty array) and {} (empty object) are truthy!
console.log("Boolean([]):", Boolean([]), "// truthy");
console.log("Boolean({}):", Boolean({}), "// truthy");

// Demo: All falsy values in a conditional
if (!(false || 0 || -0 || 0n || "" || null || undefined || NaN)) {
    console.log("All are falsy values!");
} else {
    console.log("Not all values are falsy");
}

// Checking falsy with NOT (!) operator
if (!"") {
    console.log("Empty string is falsy");
}
if (!null) {
    console.log("null is falsy");
}

// ✅ Everything else is truthy
console.log("\n--- Truthy Values ---");
console.log("Boolean([]):", Boolean([]));                // true
console.log("Boolean(1):", Boolean(1));                  // true
console.log("Boolean({}):", Boolean({}));                // true
console.log("Boolean('hello'):", Boolean('hello'));      // true

// Example: using truthy/falsy in a real check
let name = "";
if (name) {
    console.log("Name is available");
} else {
    console.log("Name is not available");
}