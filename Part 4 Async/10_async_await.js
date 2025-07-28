/*
📘 ASYNC / AWAIT IN JAVASCRIPT

🔹 Introduced in ES2017 (ES8), async/await is syntax sugar over Promises.
🔹 It allows writing asynchronous code that looks synchronous, making it easier to read and debug.

🔸 An `async` function always returns a Promise.
🔸 Inside an async function, we can use `await` to pause execution until the Promise settles.

🧠 async/await = cleaner syntax for .then()/.catch() chaining
*/

// Dummy API for testing
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//-------------------------------------------
// 1️⃣ Basic async/await GET example
//-------------------------------------------

function getData() {
  fetch(BASE_URL)
  .then((resp) => {
    // return resp.text();     // ✅ You need to return this!
    return resp.json();     // ✅ You need to return this!
  })
  .then((data) => {
    console.log("✅ Data received:", data);
  })
  .catch((error) => {
    console.error("❌ Error fetching data:", error.message);
  });
}


async function fetchData() {
  try {
    const response = await fetch(BASE_URL); // Wait for response
    if (!response.ok) {
      throw new Error("❌ Failed to fetch data");
    }

    const data = await response.json(); // Wait for JSON parsing
    console.log("✅ Data fetched:", data);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}
fetchData();
/*
🧾 EXPLANATION:
- `await fetch(...)`: pauses until the fetch Promise resolves.
- `await response.json()`: pauses until data is parsed.
- `try...catch`: handles any network or parsing errors.
*/

//-------------------------------------------
// 2️⃣ POST data with async/await
//-------------------------------------------

async function createPost() {
  const newPost = {
    title: "Hello Async/Await",
    body: "POST using async/await is so readable!",
    userId: 10
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    const result = await response.json();
    console.log("✅ POST success:", result);
  } catch (error) {
    console.error("❌ POST error:", error.message);
  }
}

/*
🧾 EXPLANATION:
- The function sends a POST request with new data.
- Uses JSON.stringify() to convert JS object to JSON.
- Awaits both fetch() and response.json().
*/

//-------------------------------------------
// 3️⃣ PUT (update) using async/await
//-------------------------------------------

async function updatePost(id) {
  const updatedPost = {
    title: "Updated Title (async/await)",
    body: "Updated body content",
    userId: 1
  };

  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPost)
    });

    const result = await response.json();
    console.log(`✅ PUT: Post ${id} updated`, result);
  } catch (error) {
    console.error("❌ PUT error:", error.message);
  }
}

//-------------------------------------------
// 4️⃣ DELETE using async/await
//-------------------------------------------

async function deletePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log(`✅ DELETE: Post ${id} deleted`);
    } else {
      throw new Error("❌ Failed to delete");
    }
  } catch (error) {
    console.error("❌ DELETE error:", error.message);
  }
}

//-------------------------------------------
// USAGE (Uncomment to try)
//-------------------------------------------

// fetchData();       // 🔍 GET all posts
// createPost();      // 📝 Create a new post
// updatePost(1);     // ✏️ Update post with ID 1
// deletePost(1);     // ❌ Delete post with ID 1
