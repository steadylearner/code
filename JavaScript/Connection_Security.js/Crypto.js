// Use MySQL with this example

const mysql = require('mysql'),
      crypto = require('crypto');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'userpass'
});

connection.connect();

connection.query('USE nodedatabase');

const username = process.argv[2];
const password = process.argv[3];

const randomValueForPassword = Math.round(Date.now() * Math.random()) + '';

// const hashpassword = crypto.createHash('sha1').update(password, 'utf8').digest('hex');

connection.query('INSERT INTO user ' + 'SET username = ?, passwordash = ?, randomValueForPassword = ?'
    [username, hashpassword, randomValueForPassword], function(err, result) {
        err ? console.error(err) : connection.end;
});