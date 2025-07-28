/*
🔹 XMLHttpRequest (XHR) is an old built-in JavaScript object used to send HTTP requests 
   to servers without reloading the webpage.

🔸 It's the core of AJAX (Asynchronous JavaScript and XML), 
   but today we mostly use JSON instead of XML.

✅ Why use XMLHttpRequest?
- To send or receive data from a server in the background.
- To update parts of a webpage without refreshing it.
- To improve user experience with dynamic content loading.

📦 Example use-cases:
- Live search suggestions (like Google).
- Submitting forms without reloading.
- Loading content on scroll (like Instagram or Facebook feed).
*/

const URL = "https://jsonplaceholder.typicode.com/posts"; // Dummy API endpoint

// 🔹 GET REQUEST
function sendGetRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true); // Method: GET

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log("✅ GET response:", data);
    } else {
      console.error("❌ GET failed. Status:", xhr.status);
    }
  };

  xhr.send();
  console.log("📡 GET Request sent...");
}

// 🔹 POST REQUEST
function sendPostRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL, true); // Method: POST
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  // Sample data to send
  const postData = {
    title: "Hello World",
    body: "This is a test post via XHR",
    userId: 1
  };

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const responseData = JSON.parse(xhr.responseText);
      console.log("✅ POST response:", responseData);
    } else {
      console.error("❌ POST failed. Status:", xhr.status);
    }
  };

  xhr.send(JSON.stringify(postData));
  console.log("📨 POST Request sent with data:", postData);
}

// 🔹 Call both functions
sendGetRequest();
sendPostRequest();
