const fs = require('fs');
const util = require('util');

fs.stat(path, (err, stats) => {
    if(err) return console.error(err);
    console.log((uitl.inspect(stats)));
})

equal to stat filepath in linux






// const fs = require('fs');

// const file = fs.createReadStream(pathname);
// file.on('open', () => file.pipe(res));

// const gzip = zlib.createGzip();
// const fs = require('fs');
// const inp = fs.createReadStream('input.txt');
// const out = fs.createWriteStream('input.txt.gz');

// inp.pipe(gzip).pipe(out);

// pipe(X) -> | X in linux 

// os part

// const os = require('os');
// console.log("Using end of line" + os.EOL + 'To insert a new line');
// console.log(os.endianness);
// console.log(os.tmpdir());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.loadavg());
// console.log(os.totalmem());
// console.log(os.cpus());