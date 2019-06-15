// ps ax | grep --line-buffered apache2

const {spawn} = require('child_process'),
       ps = spawn('ps', ['ax']),
       grep = spawn('grep', ['--line-buffered', 'apache2']);


ps.stdout.pipe(grep.stdin);

ps.stderr.on('data', (data) => console.log('ps stderr ' + data))

ps.on('close', (code) => console.log('ps process exited with code ' + code))

grep.stdout.on('data', (data) => console.log('' + data));

grep.stderr.on('data', (data) => console.error('grep stderr: ' + data));

grep.on('close', (code) => code !==0 ? console.log('grep process exited with code ' + code) : null);



