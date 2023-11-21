const mysql = require('mysql2')
const fs = require('fs')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 's23wdb'
})
const stadt = 'Stuttgart';
let csvString = "";

connection.execute('SELECT nachname, vorname, email, ort FROM kunde WHERE ort=?', [stadt],
    (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rows)
        for (let i = 0; i < rows.length; i++) {
            csvString = csvString + rows[i].nachname + ', ' + rows[i].vorname + ', ' + rows[i].email + '\n';
        }
        console.log(csvString);
        fs.writeFileSync('kunden.csv', csvString);
    })