const dgram = require('dgram');

const client = dgram.createSocket('udp4');

process.stdin.on('data', (data) => {
    console.log(data.toString('utf8'));
    client.send(data, 0, data.length, 8080, "examples.someURL.net", function(err, bytes) {
       err ? console.error("error: " + err) : console.log("successful");
    })
})