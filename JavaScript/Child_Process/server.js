const cp = require('child_process'),
      cp1 = cp.fork('child2.js'),
      http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('handled by parent\n');
});

server.on('listening', () => cp1.send('server', server));

server.listen(3000);