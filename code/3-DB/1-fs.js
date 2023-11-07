const fs = require('fs');

let data = fs.readFileSync('./beispiel.txt', 'utf8');
console.log(data);