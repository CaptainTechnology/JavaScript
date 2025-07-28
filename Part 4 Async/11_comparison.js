// ====== Callback Hell Example ======
function getUserCB(callback) {
  setTimeout(() => {
    console.log("Step 1 👤 [Callback] Got user");
    callback();
  }, 1000);
}

function getPostsCB(callback) {
  setTimeout(() => {
    console.log("Step 2 📝 [Callback] Got posts");
    callback();
  }, 1000);
}

function getCommentsCB(callback) {
  setTimeout(() => {
    console.log("Step 3 💬 [Callback] Got comments");
    callback();
  }, 1000);
}

function runCallbackHell() {
  console.log("▶️ Running Callback Hell...");
  getUserCB(() => {
    getPostsCB(() => {
      getCommentsCB(() => {
        console.log("✅ [Callback] All done\n");
      });
    });
  });
}
runCallbackHell();


// ====== Promises Example ======
function getUserPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 👤 [Promise] Got user");
      resolve();
    }, 1000);
  });
}

function getPostsPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 📝 [Promise] Got posts");
      resolve();
    }, 1000);
  });
}

function getCommentsPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 💬 [Promise] Got comments");
      resolve();
    }, 1000);
  });
}

function runPromiseChain() {
  console.log("▶️ Running Promises...");
  getUserPromise()
    .then(() => getPostsPromise())
    .then(() => getCommentsPromise())
    .then(() => {
      console.log("✅ [Promise] All done\n");
    });
}

runPromiseChain();


// ====== Async/Await Example ======
function wait(ms, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms);
  });
}

async function runAsyncAwait() {
  console.log("▶️ Running Async/Await...");
  await wait(1000, "Step 1 👤 [Async] Got user");
  await wait(1000, "Step 2 📝 [Async] Got posts");
  await wait(1000, "Step 3 💬 [Async] Got comments");
  console.log("✅ [Async] All done\n");
}

runAsyncAwait();


// ====== 🧠 Final Comparison ======

console.log("===== 📊 Comparison Summary =====");
console.log(`
1️⃣ Callback Hell:
   - Nested functions.
   - Difficult to read/maintain.
   - Used before Promises.

2️⃣ Promises:
   - Cleaner than callbacks.
   - Uses .then() chaining.
   - Easier error handling with .catch().

3️⃣ Async/Await:
   - Most modern & readable.
   - Code looks synchronous.
   - Use try/catch for error handling.
`);
