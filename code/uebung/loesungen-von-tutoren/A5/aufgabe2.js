/*function.printPerson(){
    console.log('Name:${firstName} ${lastName}');
}

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    country: 'Germany',
};

printPersonInfo(person);*/

/*
a.Object Destructuring kommt in der Web-Entwicklung mit Javascript häufig vor. 
Erklären Sie den Begriff. 
Achten Sie dabei auf eine fachlich korrekte und vollständige Antwort.
*/

/*
Antwort:
Object Destructuring in JavaScript ermöglicht es, Werte aus Objekten zu extrahieren und in separaten Variablen zu speichern. 
Dies verbessert die Lesbarkeit und erleichtert den Zugriff auf spezifische Eigenschaften. 
Die Syntax ist kompakt und ermöglicht sogar das Festlegen von Standardwerten. 
In der Web-Entwicklung wird Object Destructuring häufig verwendet, um effizient auf Daten aus Objekten zuzugreifen.

Synthax: const { propertyName1, propertyName2 } = someObject;
*/

/*
b. Ergänzen Sie den freien Platz bei der Funktion in der Parameter-Übergabe mittels Object Destructuring so, dass der Code funktioniert.
*/

function printPersonInfo({ firstName, lastName }) {
    console.log(`Name: ${firstName} ${lastName}`);
}

printPersonInfo(person);
// Output: Name: Jane Doe

/*
c. Was sind die Vorteile von Object Destructuring?


Antwort:
Die Vorteile von Object Destructuring in JavaScript sind:

1. Kompakte Syntax:
Object Destructuring bietet eine kurze und klare Syntax, 
die den Code lesbarer macht und den Zugriff auf spezifische Eigenschaften vereinfacht.

2. Effizienter Zugriff auf Objekteigenschaften:
Entwickler können gezielt auf bestimmte Eigenschaften von Objekten zugreifen, 
ohne den gesamten Objektnamen verwenden zu müssen. 
Dies erleichtert die Code-Pflege und reduziert Schreibarbeit.

3. Default-Werte: 
Object Destructuring ermöglicht das Festlegen von Standardwerten für den Fall, 
dass eine Eigenschaft im Objekt nicht vorhanden ist. 
Dies verbessert die Robustheit des Codes.

4. Entwicklung von Funktionen: 
Object Destructuring wird häufig in Funktionen verwendet, 
um Parameter in Form von Objekten zu verarbeiten. 
Dies ermöglicht eine klare Übergabe von Parametern und erhöht die Flexibilität.

5. Verbesserte Lesbarkeit: 
Durch die Verwendung von Object Destructuring wird der Code kürzer und lesbarer, 
insbesondere wenn mit komplexen Objekten gearbeitet wird. 
Dies fördert eine bessere Codeverständlichkeit und -wartbarkeit.
*/