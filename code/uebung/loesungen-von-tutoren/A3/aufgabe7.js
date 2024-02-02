/* a.  Erstellen Sie zwei Funktionen, die genau das machen, was der Name verspricht:
plus und multipliziere. Diese Funktionen bekommen jeweils zwei Werte übergeben und geben einen Wert zurück. 
Definieren Sie die Funktionen aus Funktionsausdruck. Probieren Sie sie aus!*/

// Funktion plus definiert als Funktionsausdruck
const plus = function(a, b) {
    return a + b;
}

// Funktion multipliziere definiert als Funktionsausdruck
const multipliziere = function(a, b) {
    return a * b;
}

// Testen der Funktionen
console.log(plus(2, 3)); // Output: 5
console.log(multipliziere(2, 3)); // Output: 6

/* b. Erstellen Sie die Funktion berechne. Die Funktion nimmt zwei Werte und eine Funktion als Parameter entgegen. Sie startet die Funktion und gibt deren Ergebnis zurück. Also z.B.
berechne(1,2, plus);*/

function berechne(a, b, func) {
    return func(a, b);
}
console.log(berechne(1, 2, plus)); // Output: 3