// const fs = require('fs');
// const path = require('path');

// fs.readdir('./', (err, files) => {
//     for(let file of files) {
//         let ext = path.extname(file);
//         let base = path.basename(file,ext);
//         console.log('file ' + base + ' with extension of' + ext);
//     }
// });

const path = require('path');

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

// pathname = path.normalize(base + req.url);
// path.parse();