const path = require('path');
const {
   readdir: read,
   readFile,
   writeFile,
   mkdir: makedir,
} = require('fs');

// Refer to command below for this file.

// $node convertdir.js <withshorcut> <withoutshortcut>;
// $node convertdir.js posts GitHub
// $node convertdir.js posts posts_c

const set = [
  ["s-", "https://www.steadylearner.com"],
  ["n-", "https://www.npmjs.com"],
]; // Use your set for markdown link instead

// equivalent to useShortcut in main function
const substitute = (set = [["s-", "https://"]]) => (draft = "") => {
   let text = draft;
   set.forEach(value => {
     let regex = new RegExp(`: ${value[0]}`, 'g');
     text = text.replace(regex, `: ${value[1]}`);
      regex = new RegExp(`\[(]` + value[0], 'g');
     text = text.replace(regex, "(" + value[1]);
   });
   return text;
};

const param = process.argv.slice(2);

const before = param[0] || "posts";
const after = param[1] || "GitHub";

const directoryPath = path.join(__dirname, before);
const compareDirectoryPath = path.join(__dirname, after);

makedir(compareDirectoryPath, { recursive: true }, (err) => {
   if (err) throw err;
});

read(directoryPath, function (err, files) {
   if (err) throw err;

   console.log(`\n${files.length} posts will be converted.\n`)

   files.forEach(function (file) {
      readFile(`${directoryPath}/${file}`, 'utf8', (err, data) => {
         if (err) throw err;
         const substituted = substitute(set)(data);
         const draft = new Uint8Array(Buffer.from(substituted));

         writeFile(`${compareDirectoryPath}/${file}`, draft, 'utf8', (err) => {
            if (err) throw err;
         });
      });
   });
});
