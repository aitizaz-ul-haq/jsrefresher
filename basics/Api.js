
// Basic Fetch Api
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    if(!response) {
      throw new Error('Network Error')
    }

    return response.json();
})

.then(data => {
    console.log(data);
})

.catch(error => {
    console.error('There was an error with your fetch Api', error);
});




// Post Api
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Setting the method to POST
  headers: {
    'Content-Type': 'application/json', // Setting the content type header
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }), // Converting the JavaScript object to a JSON string
})
.then(response => response.json()) // Parsing the JSON response
.then(data => console.log(data)) // Logging the result
.catch(error => console.error('Error:', error));





// Put Api
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1,
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));




// Delete Api
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then(response => response.json()) // Even though there's no content, it's a good practice to process the response
.then(() => console.log('Post deleted'))
.catch(error => console.error('Error:', error));




// Handling Query Parameters
const queryParams = new URLSearchParams({
    userId: 1
  }).toString();
  
  fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));




// Error Handling
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



// Using Async/Await
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();