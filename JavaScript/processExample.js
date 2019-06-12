process.stdin.setEncoding("utf8") // -> make data(buffer) to string and you can use trim() method.

process.stdin.on("readable", () => {
  let input = process.stdin.read();
  
  if(input !==null) {
      process.stdout.write(input);

      let command = input.trim(); // removes white space from start and end
      if(command == 'exit')
        process.exit(0);
  } 
});

// process.stdin.on('readable', () => {
//     let input = process.stdin.read();

//     if (input !== null) {
//         process.stdout.write(input);
//     }
// });

// function out () {
//     process.exit()
// }

// setTimeout(out, 10000);

// Use node -p "X" to know what is X
// 
// -> 
// readable stream -> process.stdin.read(), writable stream -> process.stdout.write();
// global, process.env, process.argv[2]
// process.release, process.[stdin, stdout, stderr].${setEncoding("utf8")}
// process.exit()