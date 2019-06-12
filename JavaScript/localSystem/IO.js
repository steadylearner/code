


// const fs = require('fs');

// let readable = fs.createReadStream('./working.txt').setEncoding('utf8');
// let data = '';
// readable.on('data', (chunk) => data += chunk);
// readable.on('end', () => console.log(data));


// const fs = require('fs');

// fs.open('./working.txt', 'r+', (err, fd) => {
//     err && console.error(err);

//     let writable = fs.createWriteStream(null, {fd, start: 10, defaultEncoding: 'utf8'});
//     writable.write(' inserting this text ');
// })

// const fs = require('fs');
// const path = require('path');

// fs.readdir('./', (err,files) => {
//     for(let file of files) {
//         console.log(file);
//         path.extname(file) == '.gz' && fs.unlink('./' + file, (err) => console.error(err));
//     }
// })


// const fs = require('fs');

// fs.writeFile('./some.txt', 'Wirte to a file', (err) => {
//     if(err) return console.error(err);
//     fs.readFile('./some.txt', 'utf-8', (data,err) => {
//         err ? console.error(err) : console.log(data);
//     })
// })