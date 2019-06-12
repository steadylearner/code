import http from 'http';
import fs from 'fs';
import url from 'url';
import mime from 'mime';
import path from 'path';

import base from '/home/examples/public_html';

http.createServer((req, res) => {
    const pathanme = path.normalize(base + req.url);
    console.log(pathname);
  
    fs.stat(pathname, (err, stats) => {
        if(err) {
            console.log(err);
            res.writeHead(404);
            res.write('Resource missing 404\n');
            res.end();
        } else {
            res.setHeader('Content-Type', 'text/html');

            const file = fs.createReadStream(pathname);

            file.on('open', () => {
                res.statusCode = 200;
                file.pipe(res);
            });

            file.on('error', (err) => {
                console.log(err);
                res.writeHead(403);
                res.write('file missing or permission problem');
                res.end();
            });
        }
    });  
}).listen(8080);

console.log("Server wevb running at 8080");

// 

const type = mime.lookup(pathname);
console.log(type);
res.setHeader('Content-Type', type);

// use path.normalize -> path.normalize(base + req.url)

