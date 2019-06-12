// Fetch - Replacement for XMLHTTPRequest

// following itstructions of https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// It doesn't work because of network problem. But give an importance in learning how to use it.

// fetch() -> Default value GET(HTTP)

const ul = document.getElementById('authors'); 
const url = 'https://randomuser.me/api/?results=10'; 

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.results;
return authors.map(function(author) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});  

// POST with fetch, set object to pass for second argument of the fetch function

const url = 'https://randomuser.me/api';

// Data to send in POST request

let data = {
    name: "SomeName"
}

// Parameter to pass with fetch function

let request = new Request(url, {
    method: 'POST', 
    body: data, 
    headers: new Headers()
});

fetch(request)
.then(function() {
    // What to do with response received from API
})


