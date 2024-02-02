/*
a. Schreiben Sie den Text „Hallo“ in die Datei hallo.txt r
b. Lesen Sie Datei wieder und geben Sie den Text aus. Verwenden Sie hierfür die Funktion
readfileSync. 
*/

const fs = require('fs');

// Schreiben Sie den Text "Hallo" in die Datei "hallo.txt"
fs.writeFileSync('hallo.txt', 'Hallo', 'utf-8');

// Lesen Sie die Datei "hallo.txt" wieder
const content = fs.readFileSync('hallo.txt', 'utf-8');

// Geben Sie den gelesenen Text aus
console.log(content);
