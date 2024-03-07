

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    if(!response) {
        throw new Error ('Network error')
    }

    return response.json();
})

.then(data => {
    console.log(data)
})

.catch(error => {
    console.error('There was a problem with your fetch operation:', error);
});

