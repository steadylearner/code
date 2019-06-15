// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
const http = require('http');

const server = http.createServer((request, response) => {
   // magic happens here!
});

// equals

const server = htpp.createServer();
server.on('request', (request, response) => {
   // the same kind of magic happens here!
});

Method, URL, and Headers

const { method, url } = request;
const { headers } = request;
const userAgent = headers['user-agent']; 

let body = [];

request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
});

request.on('error', (err) => {
  console.error(err.stack);
});


Put it all together


const http = require('http');

http.createServer((request, response) => {
   const { headers, method, url } = request;
   let body = [];

   request.on('error', (err) => {
      console.error(err);
   }).on('data', (chunk) => [
      body.push(chunk);
   }).on('end', () => {
      body = Buffer.concat(body).toString();
       
   });
}).listen(8080);

HTTP Status code

response.statusCode = 404;

response.setHeader('Content-Type', 'application/json');

Explicitly Sending Header Data

response.writeHead(200, {
  'Content-Type': 'application/json'
});

sending Response Body

response.write("<h1>You can decide response body contents.</h1>");

.
.
.
.
.
.
.
.
.
.


response.end("End contents here.");

Status and Header should come before body data.


Put it all together

const http = require("http");

http.createServer((request, response) => {
   const { headers, method , url } = request;
   let body = [];

   request.on('error', (err) => {
      console.error(err);
   }).on('data', (chunk) => {
      body.push(chunk);
   }).on('end', () => {
      body = Buffer.concat(body).toString();

      response.on('error', (err) => {
         console.error(err):
      });
     
      response.statusCode = 200;
      response.setHeader('content-type', 'applciation/json');
   
      const responseBody = { headers, method, url, body }; 
 
      response.write(JSON.stringify(responseBody);
      response.end();
    
   });
}).listen(8080);

// -> error hadnling

const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
     console.error(err);
     response.statusCode = 400;
     response.end();
  });
  response.on('error', (err) => {
     console.error(err);
  });

  if(request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
  




