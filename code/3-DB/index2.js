const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 's23wdb'
});
let name = 'Nolting';
let vorname = 'Meta';
connection.execute(
    'SELECT * FROM kunde WHERE nachname = ? AND vorname = ?', [name, vorname],
    function (err, results, fields) {
        console.log(results);
        // console.log(fields); Datenbank-Felder
        process.exit(0);
    }

);
