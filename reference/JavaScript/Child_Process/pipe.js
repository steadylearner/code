// find . -ls | grep test

const {spawn}  =  require('child_process'),
       find    =  spawn('find', ['.', '-ls']),
       grep    =  spawn('grep', ['test']);

grep.stdout.setEncodindg('utf8');

find.stdout.pipe(grep.stdin);

grep.stdout.on('data', (data) => console.log(data));

find.stderr.on('data', (data) => console.log('grep stderr: ' + err ));

grep.stderr.on('data', (data) => console.log('grep stderr: ' + err ));

find.on('close', (code) => {
    code !==0 ? console.log('find process exited with code ' +  code) : null
})

grep.on('close', (code) => {
    code !==0 ? console.log('grep process exited with code ' +  code) : null
})

