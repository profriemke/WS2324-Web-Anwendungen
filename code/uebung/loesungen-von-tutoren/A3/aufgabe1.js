let array = ['Hund', 'Katze', 'Maus', 'Niko', 'Laus'];

// a. Lassen Sie sich ausgeben, wie viele Elemente das Array enthält.
console.log(array.length)

// b. Geben Sie den Inhalt des Arrays mit console.log() aus (ohne Schleife).
console.log(array)

// c. Geben Sie den Inhalt in einer for-Schleife aus.
for (let i=0; i < array.length; i++) {
    console.log(array[i])
}

// d. Ergänzen Sie die Schleife so, dass die Einträge bei der Ausgabe von der Zahl 1. startend durchnummeriert werden.
for (let i=0; i < array.length; i++) {
    console.log(i+1 + '. ' + array[i])
}

/* Alternative
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num + '. ' + array[num-1]);
}
*/

// e. Entfernen Sie das erste Element des Arrays
array.shift()
console.log(array)

// f. Fügen Sie am Anfang des Arrays einen „Elefant“ hinzu und lassen Sie sich das Array wieder ausgeben. 
array.unshift('Elefant')
console.log(array)

// g. Fügen Sie am Ende den Eintrag „Ende“ hinzu.
array.push('Ende')
console.log(array)
