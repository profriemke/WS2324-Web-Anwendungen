const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'webtutorium'
});
connection.connect((err) => {
    if (err) {
      console.error('Fehler bei der Verbindung zur Datenbank: ' + err.stack);
      return;}
  
    console.log('Erfolgreich zur Datenbank verbunden.');})

//a

/*
connection.execute(
    "SELECT * FROM `kunde` LIMIT 10",
    function (err, results, fields) {
    console.log(results);
    console.log(fields);
    console.table(results[0]);
    }
    );
*/
//b
/*
connection.execute(
"SELECT COUNT (*) FROM `kunde` WHERE `ort`='Berlin'",
function (err, results, fields) {
console.table(results);
}
);
*/ //ergebnis = 214

//c
let stadt = 'Stuttgart';
let position = 'Architect';
connection.execute(
"SELECT COUNT(*) FROM `kunde` WHERE `ort`='" + stadt +  "'" + "AND `position` ='" + position + "'",
    function (err,results,fields) {
        console.table(results);
    }
) 
// ergebnis=35; // ergebnis=2;
