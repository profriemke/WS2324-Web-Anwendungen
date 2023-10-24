const a = ['Baum', 'Haus']

console.log(a[1]);

a[0] = 'Auto';

console.log(a[0]);

console.log(a.length);
for (let i = 0; i < a.length; i++) {
    console.log(i + ':' + a[i]);

}
a.push('Hund');
console.table(a);