const fs = require('fs');

const data = fs.readFileSync('/Users/celinalausch/Documents/GitHub/weban_tut/A4/aufgabe4.csv', 'utf8');
const rows = data.split('\n');
