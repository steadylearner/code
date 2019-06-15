const http = require('http'),
      zlib = require('zlib'),
      fs = require('fs');

const server = http.createServer.listen(8080);

server.on('request', (request, response) => {
    if(request.method == 'POST') {
        let chunks = [];

        request.on('data', (chunk) => chunks.push(chunk));
    };

    request.on('end', () => {
        let buf = Buffer.concat(chunks);
        zlib.unzip(buf, (err, result) => {
            if(err) {
                response.writeHead(500);
                response.end();
                return console.error('error ' + err);
            }

            let timestamp = Date.now();
            let filename = './done' + timestamp + '.png';
            fs.createWriteStream(filename).write(result);
        });
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Received and undecompressed file\n');
    })
})

console.log("Server listening on 8080");