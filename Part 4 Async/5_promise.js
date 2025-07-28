// =====================================
// 🔹 1. What is a Promise?
// =====================================

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
/**
 * 
A Promise in JavaScript is an object that represents the future result of an asynchronous operation. It can be in one of three states:
Pending (in progress)
Fulfilled (successful)
Rejected (failed)

🔹 Usage of Promise:
Promises are used to handle asynchronous tasks like:
Fetching data from a server
Reading files
Delaying execution
API calls

🔹 Advantages of Promises:
✅ Avoids callback hell
✅ Cleaner and more readable code
✅ Easy error handling using .catch()
✅ Supports chaining of async operations
✅ Works seamlessly with async/await
 */
// It has three states:
// 1️⃣ Pending: Operation not completed yet
// 2️⃣ Fulfilled: Operation completed successfully (resolve)
// 3️⃣ Rejected: Operation failed (reject)


// =====================================
// 🔹 2. Creating a Basic Promise
// =====================================

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("✅ Promise resolved successfully!");
//   } else {
//     reject("❌ Promise was rejected!");
//   }
// });

// myPromise
//   .then((msg) => {
//     console.log("THEN:", msg);
//   })
//   .catch((err) => {
//     console.log("CATCH:", err);
//   })
//   .finally(() => {
//     console.log("FINALLY: Promise completed");
//   });


// =====================================
// 🔹 3. Simulating Async Operation
// =====================================

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("⏳ Fetching data...");
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve({ user: "Ateek", age: 22 });
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log("✅ Data received:", data);
//   })
//   .catch((error) => {
//     console.log("❌ Error:", error);
//   })
//   .finally(() => {
//     console.log("📦 fetchData completed.");
//   });


// =====================================
// 🔹 4. Chaining Promises
// =====================================
// 🔹 Step 1: Wait 5 seconds and return a message
console.log("🌟 Promise Start");

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔹 Step 1 done");
      resolve();
    }, 2000); // 2 seconds
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔹 Step 2 done");
      resolve();
    }, 1000); // 1 second
  });
}

// Start
step1()
  .then(step2)
  .then(() => {
    console.log("✅ All steps finished");
  });

console.log("🔚 End of Script");
