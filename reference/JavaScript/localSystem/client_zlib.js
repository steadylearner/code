import { Readable } from 'stream';

const http = require('http'),
      fs = require('fs'),
      zlib = require('zlib');

const gzip = zlib.createGzip();

const options = {
    hostname: 'localhost',
    port: 8080,
    method: 'POST',
    headers: {
        'Content-Type': 'application/javascript',
        'Content-Encoding': 'gzip,deflate'
    }
};

const req = http.request(options, (res) => {
    res.setEndcoding('utf8');
    let data = '';
    res.on('data', (chunk) => data+=chunk);
    res.on('end', () => console.log(data));
});

req.on('error', (e) => console.error('problem with request: ' + e.message));

Readable.pipe(gzip).pipe(req);