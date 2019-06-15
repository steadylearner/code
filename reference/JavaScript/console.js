// You can measrue how much time taken for each process.

const http = require('http');

console.time('hello-timer');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/plain'});
    response.end('Hello World\n');
    console.timeEnd('hello-timer');
    console.time('hello-timer');
}).listen(8080);

// call -> stop -> call -> stop ............... for same thing and It recurs everytime

console.log('Server runnig at http://127.0.0.1:8080/');

// You can use node REPL to test simpel javascript instead of Brower console(.editor), Regular expression testing(make regular expression -> Y.test('X'); 

// 0 - stdin
// 1 - stdout
// 2 - stderr

// node app.js 1 > app.log 2 > error.log

// use console.log or console.error with output(1)

// use console.error or console.warn with error(2) 

// console.dir() to show directory(folder) ; - util.inspect(), util.format()

// The printf() family of functions uses % character as a placeholder. When a % is encountered, printf reads the characters following the % to determine what to do:

// %s - Take the next argument and print it as a string
// %d - Take the next argument and print it as an int

// > var val = 10.5;

// > var str = 'a string';

// > console.log('The %d and %s', val, str);
// The 10.5 and a string


// %s string
// %d number(integer or float)
// %j JSON
// %% %

// synchrnous 

// console.time('the-loop');
// for(let i=0; i < 10000; i++) {
// ;
// }

// console.timeEnd('the-loop'); 

// You can measure how much time take executing syncronous or asyncronous process.