/* a. Was sind Arrow-Functions? 

Arrow functions sind eine verkürzte Schreibweise von Funktionen in JavaScript. 
Sie wurden in ES6 eingeführt und bieten eine kürzere und prägnantere Syntax im Vergleich zu herkömmlichen Funktionen. 
Arrow functions haben auch einige Unterschiede in Bezug auf die Bindung von this. 
Im Gegensatz zu herkömmlichen Funktionen haben Arrow functions kein eigenes this, 
sondern erben das this aus dem Kontext, in dem sie definiert wurden.

*/

//b. Erstellen Sie eine Arrow-Function, die eine Zahl entgegennimmt und das Quadrat zurückgibt.
const quadrat = (zahl) => {
    return zahl * zahl;
}

// Testen der funktion
console.log(quadrat(5)); // Output: 25

/* c. Wie sieht diese Funktion auf die notwendigsten Zeichen reduziert aus. Hinweis: Probieren
Sie ggf. aus! Es kann sehr viel weggelassen werden. */

const quadrat2 = zahl => zahl * zahl;

//Testen der Funktion
console.log(quadrat2(5)); // Output: 25