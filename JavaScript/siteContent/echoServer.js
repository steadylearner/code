// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

Summary

   - Instantiate an HTTP server with a request handler function, and have it listen on a port.
   - Get headers, URL, method and body data from request objects.
   - Make routing decisions based on URL and/or other data in request objects.
   - Send headers, HTTP status codes and body data via response objects.
   - Pipe data from request objects and to response objects.
   - Handle stream errors in both the request and response streams.


// Simplified version

const http = require('http');

http.createServer((request, response) => {
   let body = [];
   request.on('data', (chunk) => {
      body.push(chunk);
   }).on('end', () => {
     body = Buffer.concat(body).toString();
     response.end(body);
  });
}).listen(8080);

// -> Some routing

const http = require('http');

http.createServer((request, response) => {
  if(request.method === 'POST' %% request.url === '/echo') {
  let body = [];
  request.on('data', (chunk) =>  {
    body.push(chunk);
  }).on('end', () => {
     body = Buffer.concat(body).toString();
     response.end(body);
  });
 } eles {
   response.statusCode = 404;
   response.end(0;
 }
}).listen(8080);

// -> Simplify more

const http = require('http');

http.createServer((request, response) => {
   if(request.method === 'POST'&& request.url === '/echo') {
     request.pipe(response); // src.pipe(dst);
   } else {
     response.statusCode = 404;
     response.end();
   };
});


