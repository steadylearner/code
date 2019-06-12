// using child.process.spawn

const { spawn } = require('child_process');
const pwd = spawn('pwd'); // no error -> code 0
// const pwd = spawn('pwd', ['-g']); // error -> code 1

pwd.stdout.on('data', (data) => console.log('stdout: ' + data));

pwd.stderr.on('data', (data) => console.error('stderr: ' + data));

pwd.on('close', (code) => console.log('child process exited with code: ' + code));