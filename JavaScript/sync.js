

const fs = require('fs');

try {
    let data = fs.readFileSync('./apples.txt', 'utf8');
    console.log(data);
    let adjData = data.replace(/[A|a]pple/g, 'computer');


    fs.writeFileSync('./computers.txt', adjData);
} catch (error) {
    console.log(error);
}