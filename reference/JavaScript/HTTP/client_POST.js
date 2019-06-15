const http = require("http");
const querystring = require("querystring");

let postData = querystring.stringify({
    'msg': 'Hello World!'
});

const options = {
    hostname: "localhost",
    port: 8080,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    },
    // agent: false
};

const req = http.request(options, (res) => {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log('BODY: ' + chunk);
    });

    res.on('end', () => {
        console.log("No more data in response.");
    });

    req.on('error', (e) => {
        console.log("problem with request: " + e.message);
    });
});

req.write(postData);
req.end();

// http.clientRequest, http.server, http.IncomingMessage, http.ServerResponse