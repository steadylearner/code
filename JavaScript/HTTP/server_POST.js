const http = require("http");
const querystring = require("querystring");

const server = http.createServer().listen(8080);

server.on('request', (request, response) => {
    if(request.method == 'POST') {
        let body = '';

        request.on('data', (data) => body += data);

        request.on('end', () => {
            let post = querystring.parse(body);
            console.log(post);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello World\n');
        });
    }
});
console.log('server listening on 8080');