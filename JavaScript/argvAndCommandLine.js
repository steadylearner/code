const fs = require('fs');

let { argv } = process;
let firstParam = argv[2];
let baseBefore = firstParam.split('=');
let base = firstParam.split('=')[1]; // Now command line input becomes parameter directly

console.log(argv);
console.log(firstParam);
console.log(base);

let data = '';

for(let i = 1; i <= 10; i++) {
    data += `${base} * ${ i } = ${ base * i}\n`
}

fs.writeFile(`tables/message-${base}.txt`, data , (err) => {
    if (err) throw err;
    console.log(`The file-${base} has been saved!`);
});

// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

// console.log(module);
// console.log(process.argv);
// console.log(process.argv[2]);



// const makeFIle = () => {

// }

// module.exports = {
//     makeFile: makeFile 
// }

// // Exports just part of the function

// module.exports = {
//     makeFile 
//     makeFile 
//     makeFile 
//     makeFile 
//     // You can export multiple files

// module.expots.makeFile = () => {

// }

// // https://stackoverflow.com/questions/38340500/export-multiple-classes-in-es6-modules

// const { makeFIle } = require('./multiply/muliply') -> You can use it as makeFile