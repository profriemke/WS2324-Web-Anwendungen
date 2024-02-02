/* 
a. Gegeben ist der nachfolgende Code. 
Was davon ist ein Objekt und was nicht? 
Warum bzw. Warum nicht? Welche anderen Datentypen gibt es hier noch?
*/

const kunde = { vorname: 'Thorsten',
                nachname: 'Riemke',
                properties: [
                    { isLoggedin: false },
                    {isRegistered: true},
                ]
}

// In diesem Codeausschnitt ist das Objekt "kunde" ein Objekt, da es mit geschweiften Klammern definiert ist und Eigenschaften enthält.
// Die Eigenschaften "vorname" und "nachname" sind Zeichenketten (Strings), da sie in einfachen Anführungszeichen ('') definiert sind.
// Die Eigenschaft "properties" ist ein Array, da es in eckigen Klammern [] definiert ist und mehrere Elemente enthält.
// Jedes Element im Array "properties" ist ein Objekt, da es mit geschweiften Klammern definiert ist und Eigenschaften enthält.
// Die Eigenschaften "isLoggedin" und "isRegistered" sind boolesche Werte (true oder false), da sie nicht in Anführungszeichen definiert sind.


/*
b. Erstellen Sie ein kleines Programm. 
In diesem Programm soll ein Javascript-Objekt riemke anlegt werden. 
Das riemke hat einen Studiengang, ein Fachgebiet (Web-Anwendungen) und natürlich Vor- und Nachname. 
Geben Sie die Attribute von riemke aus.
*/

// Erstellen des Objekts
const riemke = {
    vorname: "Maxime",
    nachname: "Musterfrau",
    studiengang: "Informatik",
    fachgebiet: "Web-Anwendungen"
  };
  
  // Ausgabe der Attribute
  console.log("Vorname: " + riemke.vorname);
  console.log("Nachname: " + riemke.nachname);
  console.log("Studiengang: " + riemke.studiengang);
  console.log("Fachgebiet: " + riemke.fachgebiet);
  
  
/* 
c. Es wurde in jüngster Zeit festgestellt, dass der Studiengang mehr Professoren hat. 
Sie müssen daher leider eine Konstruktor-Funktion schreiben, 
die neue Professoren-Objekte anlegt, also z.B. mit den Aufrufen
   const riemke = new Person(ˈThorstenˈ, ˈRiemkeˈ, ˈWeb-Anwendungenˈ);
   const mueller = new Person(ˈMareikeˈ, ˈMüllerˈ, ˈMarketingˈ);
*/

function Person(vorname, nachname, studiengang) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.studiengang = studiengang;
  }

/* 
d. Erstellen Sie ein Array mit fünf Studierenden. 
Studierende sind jeweils Objekte und haben die Attribute name, vorname und studiengang. 
Geben Sie die Studierenden in einer for-Schleife aus. 
Die Objekte legen Sie einfach in der Objekt-Literal-Schreibweise an.
*/

// Erstellen des Arrays mit fünf Studierenden
const studierende = [
    { name: "Musterfrau", vorname: "Maxime", studiengang: "Informatik" },
    { name: "Mustermann", vorname: "Moritz", studiengang: "Medieninformatik" },
    { name: "Schmidt", vorname: "Sophie", studiengang: "Wirtschaftsinformatik" },
    { name: "Müller", vorname: "Marie", studiengang: "Elektrotechnik" },
    { name: "Klein", vorname: "Kevin", studiengang: "Maschinenbau" }
];

// Ausgabe der Studierenden in einer for-Schleife
for (let i = 0; i < studierende.length; i++) {
    console.log("Name: " + studierende[i].name);
    console.log("Vorname: " + studierende[i].vorname);
    console.log("Studiengang: " + studierende[i].studiengang);
}

/*
e. Nehmen Sie das Array mit den Objekten aus d. 
Entfernen Sie das letzte Element und fügen Sie einen weiteren Studierenden am Anfang hinzu. 
Geben Sie die Liste aus.
*/

// Entfernen des letzten Elements im Array
studierende.pop();

// Hinzufügen eines neuen Studierenden am Anfang des Arrays
studierende.unshift({ name: "Neuer", vorname: "Studierender", studiengang: "Neuer Studiengang" });

// Ausgabe der aktualisierten Liste
for (let i = 0; i < studierende.length; i++) {
    console.log("Name: " + studierende[i].name);
    console.log("Vorname: " + studierende[i].vorname);
    console.log("Studiengang: " + studierende[i].studiengang);
}
