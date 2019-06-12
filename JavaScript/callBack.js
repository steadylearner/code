// callback -> Decide what to do after event completion with that informaiton.

// const http = require("http");

// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end("Hello World\n");
// }).listen(8180);

// console.log("Server running at http://127.0.0.1:8124");

// ->

const http = require("http");
const server = http.createServer();

server.on('request', (request, response) => {
   
    console.log("request event");
   
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World\n');
});

server.on('connection', function(){
    console.log('connection event');
});

server.listen(8180, () => console.log("listening event"));

console.log('Server running on port 8180');