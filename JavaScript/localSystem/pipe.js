// node -> process.stdin.resume(); , process.stdin.pipe(process.stdout);

// readline -> iniciate a endless communication thread 

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(">> What is the meaning of life? ", (answer) => {
    console.log("About the meaning of life, you said " + answer);
    rl.setPrompt(">> ");
    rl.prompt();
});

function closeInterface() {
    rl.close();
    console.log('Leaving Readline');
}

rl.on('line', (cmd) => {
    cmd.trim() == '.leave' && closeInterface();
    console.log("repeating command: " + cmd);
    rl.prompt();
});

rl.on('close', () => {
    closeInterface();
});