const eventEmitter = require('events').EventEmitter;
let counter = 0;

const em = new eventEmitter();

setInterval(() => em.emit('timed', counter++), 1000);

em.on('timed', (data) => console.log('timed ' + data));
