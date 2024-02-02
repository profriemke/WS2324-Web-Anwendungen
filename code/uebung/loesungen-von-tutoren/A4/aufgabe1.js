/*
a. Fügen Sie die Strings aus dem folgenden Code zusammen zu dem ganzen Namen. Vergessen Sie nicht ein Leerzeichen einzufügen:
     let nachName = ˈMüllerˈ;
     let vorname = ˈAnnaˈ;
     ganzerName =
     console.log(ganzerName);
*/

let nachName = 'Müller';
let vorname = 'Anna';
ganzerName = vorname + ' ' + nachName;
console.log(ganzerName)

/*
b. Es lassen sich auch Zeilenumbrüche zu einem String mittels „\n“ (new line) hinzufügen. Fassen Sie den Inhalt der beiden Variablen zu einer zusammen. Fügen Sie zwischen den Texten einen Zeilenumbruch ein. Geben Sie den ganzen Text aus.
     let zeile1 = ˈDies ist die erste Zeileˈ;
     let zeile2 = ˈDies ist die zweite Zeile.ˈ;
     ganzerTextMitUmbruch =
*/

let zeile1 = 'Dies ist die erste Zeile';
let zeile2 = 'Dies ist die zweite Zeile.';
ganzerTextMitUmbruch = zeile1 + "\n" + zeile2;
console.log(ganzerTextMitUmbruch)

/*
c. Unten stehen zwei Variablen, die durch die Zuweisung den Typ „Number“ annehmen. Sie sollen zu einem String zusammengefügt werden, so dass das Ergebnis „42“ (und nicht ausgerechnet 6) ist. Das Plus würde sie zusammenrechnen. Sie können aber die Zahlen explizit in einen String umwandeln. Die Zahlen haben die Methode .toString(), die den Wert als String zurückgibt. Geben Sie den ganzen Text aus. r
     let zahl1 = 4;
     let zahl2 = 2;
     zusammen =
*/

let zahl1 = 4;
let zahl2 = 2;
zusammen = zahl1.toString() + zahl2.toString();
console.log(zusammen)