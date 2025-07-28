/*
🎯 Using Promises to avoid Callback Hell
Each async task returns a Promise that resolves after a delay
*/

// 🔁 Callback Hell Example (for reference only - commented out)
/*
setTimeout(() => {
  console.log("⏳ Step 1: Login user");
  setTimeout(() => {
    console.log("📦 Step 2: Fetch user data");
    setTimeout(() => {
      console.log("📈 Step 3: Display dashboard");
      setTimeout(() => {
        console.log("✅ Step 4: Show analytics");
        setTimeout(() => {
          console.log("🏁 Task completed");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// ✅ Promise-based async flow

// Step 1: Connect to server
function connectToServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📶 Connected to server");
      resolve();
    }, 1000); // 1 sec delay
  });
}

// Step 2: Authenticate user
function authenticateUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔐 User authenticated");
      resolve();
    }, 1000); // 1 sec delay
  });
}

// Step 3: Fetch user profile
function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("📦 User profile fetched");
      resolve(); // simulate success
      // reject("❌ Failed to fetch user profile"); // simulate error
    }, 1000); // 1 sec delay
  });
}

// Step 4: Load dashboard
function loadDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🎯 Dashboard loaded");
      resolve();
    }, 5000); // 5 sec delay to simulate heavy load
  });
}

// Step 5: Fetch analytics
function fetchAnalytics() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📊 Analytics fetched");
      resolve();
    }, 1000); // 1 sec delay
  });
}

// 🚀 Execution starts here
console.log("🟢 Start");

// 🔗 Chaining Promises for clean async flow
connectToServer()
  .then(authenticateUser)
  .then(fetchUserProfile)
  .then(loadDashboard)
  .then(fetchAnalytics)
  .then(() => {
    console.log("✅ All operations completed successfully!");
  })
  .catch((error) => {
    console.error("❌ An error occurred:", error);
  });

console.log("🔚 End of script (async operations continue in background)");
