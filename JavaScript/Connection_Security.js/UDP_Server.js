const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log('Message: ' + msg + " from" + rinfo.address + ":" + rinfo.post);
});

server.bind(8080);