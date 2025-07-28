/*
📘 FETCH API IN JAVASCRIPT

🔹 fetch() lets us make requests to APIs without reloading the page.
🔹 It returns a Promise.
🔹 You can use it to send or receive data from a server.

Basic Syntax:
fetch(url, {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  headers: {},
  body: JSON.stringify(data) // only for POST/PUT
})
*/

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts"; // Dummy API for testing

//-----------------------------------------
// 1️⃣ GET Request - Read data
//-----------------------------------------

// function getData() {
//   fetch(BASE_URL)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("❌ Failed to fetch data");
//       }
//       return response.json(); // Convert response to JSON ,// ✅ You need to return this!
//     })
//     .then(data => {
//       console.log("✅ GET: Data fetched successfully", data);
//     })
//     .catch(error => {
//       console.error("GET Error:", error.message);
//     });
// }

// function getData() {
//   fetch(BASE_URL, {
//     method: 'GET'
//   })
//   .then((resp) => {
//     // return resp.text();     // ✅ You need to return this!
//     return resp.json();     // ✅ You need to return this!
//   })
//   .then((data) => {
//     console.log("✅ Data received:", data);
//   })
//   .catch((error) => {
//     console.error("❌ Error fetching data:", error.message);
//   });
// }


/*
🧾 EXPLANATION:
- fetch(BASE_URL) sends a GET request to the API.
- .then(response => response.json()) parses JSON from response.
- .then(data => ...) gives you actual JS object (array of posts).
- .catch(...) catches any error like network issues or wrong URL.
*/

//-----------------------------------------
// 2️⃣ POST Request - Create data
//-----------------------------------------
// function postData() {
//   const newPost = {
//     title: "Fetch is awesome",
//     body: "This post was made using fetch POST",
//     userId: 12
//   };

//   fetch(BASE_URL, {
//     method: "POST", // Sending new data
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newPost)
//   })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error("❌ Failed to post data");
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log("✅ POST: Data submitted", data);
    // })
    // .catch(error => {
    //   console.error("POST Error:", error.message);
    // });
// }

/*
🧾 EXPLANATION:
- POST creates new data on server.
- We send a JS object (newPost), and stringify it.
- Headers tell server the format is JSON.
- We log the response, which includes the posted data.
*/

//-----------------------------------------
// 3️⃣ PUT Request - Update data
//-----------------------------------------
// function updateData(id) {
//   const updatedPost = {
//     title: "Updated Title",
//     body: "Updated body using PUT",
//     userId: 1
//   };

//   fetch(`${BASE_URL}/${id}`, {
//     method: "PUT", // Replaces entire resource
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(updatedPost)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("❌ Failed to update data");
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(`✅ PUT: Post ${id} updated`, data);
//     })
//     .catch(error => {
//       console.error("PUT Error:", error.message);
//     });
// }

/*
🧾 EXPLANATION:
- PUT updates a full post resource.
- `${BASE_URL}/${id}` targets a specific post by ID.
- We send a full object to replace existing one.
*/

//-----------------------------------------
// 4️⃣ DELETE Request - Remove data
//-----------------------------------------
// function deleteData(id) {
//   fetch(`${BASE_URL}/${id}`, {
//     method: "DELETE"
//   })
//     .then(response => {
//       if (response.ok) {
//         console.log(`✅ DELETE: Post ${id} deleted`);
//       } else {
//         throw new Error("❌ Failed to delete data");
//       }
//     })
//     .catch(error => {
//       console.error("DELETE Error:", error.message);
//     });
// }

/*
🧾 EXPLANATION:
- DELETE removes a post by ID.
- We don't need headers or body.
- We just check if response is OK.
*/

//-----------------------------------------
// USAGE
//-----------------------------------------

// Uncomment one at a time to test:
// getData();        // ✅ Read all posts
// postData();    // ✅ Create a post
// updateData(1); // ✅ Update post with ID 1
// deleteData(1); // ✅ Delete post with ID 1
