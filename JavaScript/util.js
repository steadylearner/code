import { setMaxListeners } from 'cluster';

const util = require('util');
const eventEmitter = require("events").EventEmitter;
const fs = require('fs');

function InputChecker(name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + './txt', 
    {
        'flags': 'a',
        'encoding': 'utf8',
        'mode' : 0o666
    });
}

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
    let command = input.trim.substr(0, 3);
    if(command = 'wr:') {
        this.emit('write', input.substr(3, input.length));
    } else if(command == 'en:') {
        this.emit('end');
    } else {
        this.emit('echo', input);
    }
};

let ic = new InputChecker('Shelley', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
    process.stdout.write(ic.name + ' wrote' + data);
})

ic.on('end', () => process.exit());

process.stdin.on('readable', function() {
    let input = process.stdin.read();
    if(input !== null)
      ic.check(input);
})


// const util = require('util');

// util.inherits(Someobj, EventEmitter);

// someobj.prototype.someMethod = function(){ this.emit('event');};

// Someobjinstanceon('event', function(){});

// ic.on("echo", (data) => console.log(this.name + ' wrote ' + data)); === ic.addListener("echo", (data) => console.log(this.name + ' wrote ' + data));

// ic.once(event, function); -> To listen to the next event

// setMaxListeners(0); -> No limit

ic.on('echo', callback);

ic.removeListener('echo', callback);