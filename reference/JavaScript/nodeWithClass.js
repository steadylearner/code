import util from 'util'
import { EventEmitter as eventEmitter } from 'events'
import fs from 'fs'

class InputChecker extends eventEmitter {
    constructor(name, file) {
        super(); // Bring mehtods from parent class and use them.
        this.name = name;

        this.writeStream = fs.createWriteStream('/' + file + '.txt', {
            "flags" : "a",
            "encoding": "utf8",
            "mode": 0o666
        });
    }

    check (input) {
        let command = input.toString().trim().substr(0,3);
        if(command == 'wr:') {
            this.emit('write', input.substr(3, input.length));
        } else if (command ==  'em:') {
            this.emit('end');
        } else {
            this.emit('echo', input);
        }
    }
};

export default InputChecker;

// ->

import { InputChecker } from 'InputChecker.js'

const ic = new InputChecker('Shelley', 'output');

ic.on('write', (data) => {
    this.writeSteam.write(data, 'utf8');
});

ic.addListener('echo', (data) => {
    console.log(this.name + ' wrote' + data);
});

ic.on('end', () => process.exit());

process.stdin.setEncoidng('utf8');
process.stdin.on('data', (input) => ic.check(input))
