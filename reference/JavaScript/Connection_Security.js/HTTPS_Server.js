const fs = require('fs'),
      https = require('http');

const privateKey = fs.readFileSync('site.key').toString();
const certificate = fs.readFileSync('final.crt').toString();

const options = {
    key: privateKey,
    cert: certificate
}

https.createServer(options, function(req, res){
    res.writeHead(200);
    res.end('Hello Secure World \n');
}).listen(443); // HTTPS Default Number