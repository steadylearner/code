const fs = require("fs");

// fs.readFile('./apples.txt', 'utf8', function(err, data){
//    if(err) throw err;
//    console.log(data);
//    let adjData = data.replace(/[A|a]pple/g, 'orange' );

//    fs.writeFile('./computers.txt', adjData);
// });

fs.readFile('./apples.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
    let adjData = data.replace(/[A|a]pple/g, 'orange' );
 
    fs.writeFile('./computers.txt', adjData, err => {
        if(err) console.error(err);
        // if(err) console.error(err.stack);
    });
 });

//  readFile <-> writeFile 