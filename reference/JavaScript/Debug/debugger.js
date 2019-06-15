const fs = require('fs');
const concat = require('./external.js').concatArray;

const test = 10;
const second = 'test';

for(let i=0; i <= test; i++) {
    debugger;
    second+=i;
}

setTimeout(() => {
    debugger;
    test = 1000;
    console.log(second);
}, 1000);

fs.readFile('./log.txt', 'utf8', (err, data) => {
    err && console.log(err);
    const array = ['apple', 'orange', 'strawberry'];
    const array2 = concat(data, array);
    console.log(array2);
})