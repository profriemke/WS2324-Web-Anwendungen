const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 's23wdb'
});
connection.execute(
    'SELECT * FROM kunde LIMIT 20',
    function (err, results, fields) {
        for (let i = 0; i < results.length; i++) {
            console.log(results[i].nachname);
        }
        console.log(results);
        // console.log(fields); Datenbank-Felder
    }

);