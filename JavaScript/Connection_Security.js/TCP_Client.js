// It can have multiple clients because it is asyncronous.

const net = require('net');
const client = new net.Socket();
client.setEncoding('utf8');

client.connect('8080', 'localhost', () => {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

process.stdin.on('data', (data) => client.write(data));

client.on('data', (data) => console.log(data));

client.on('close', () => console.log("connection is closed"));