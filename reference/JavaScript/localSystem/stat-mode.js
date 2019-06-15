const fs = require('fs');
const Mode = require('stat-mode');

fs.stat('fs.js', (err, stats) => {
    if (err) return console.log(err);

    const mode = new Mode(stats);

    console.log(mode.toString());
    console.log('Group execute '+ mode.group.execute);
    console.log('Others write ' + mode.others.write);
    console.log('Owner read ' + mode.owner.read);
})

// It didn't work with message "Can't find stat-mode module"