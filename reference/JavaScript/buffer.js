let buf1 = new Buffer("1 is number one");
let buf2 = new Buffer("2 is number two");

let buf3 = Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2));
console.log(buf2.compare(buf1));
console.log(buf3.compare(buf1));

// let buf1 = new Buffer("This is to test This is to test");

// let buf2 = new Buffer(10);
// buf1.copy(buf2);

// console.log(buf2.toString());

// let buf = new Buffer(4);

//  buf[0] = 0x61;
//  buf[1] = 0x63;
//  buf[2] = 0x76;
//  buf[3] = 0x70;

// console.log(buf.toString());

// let buf = new Buffer("This is simple example.")
// let json = JSON.stringify(buf);
// let buf2 = new Buffer(JSON.parse(json).data);

// console.log(buf2.toString('utf8', 0,15));

// let { StringDecoder } = require('string_decoder');
// let decoder = new StringDecoder('utf8');

// let euro = new Buffer([0xE2, 0x82]);
// let euro2 = new Buffer([0xAC]);

// console.log(decoder.write(euro));
// console.log(decoder.write(euro2));

// console.log(euro.toString());
// console.log(euro2.toString());

// let buf1 = new Buffer(3);
// buf1.write('€', 'utf-8');
// console.log(buf1.length);

