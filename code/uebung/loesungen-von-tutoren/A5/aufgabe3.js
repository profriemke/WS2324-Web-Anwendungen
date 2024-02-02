/*
a. Erstellen Sie eine Web-Anwendung in AdonisJS, die beim Aufruf „Hallo, hier bin ich!“ ausgibt.

Lösung: in Datei start/route.ts

Route.get('/omm', async() => {
  return 'Hallo, hier bin ich!'
})

-> erstellt neue Route /omm, die bei Aufruf den Text "Hallo, hier bin ich!" zurückgibt
*/


/*
b. Web-Anwendungen benötigen einen Web-Server. Wo ist der in Ihrer AdonisJS- Anwendung?

Lösung:
In einer AdonisJS-Anwendung ist der Webserver bereits integriert und wird über den AdonisJS-Befehl `adonis serve` gestartet. 
AdonisJS verwendet den HTTP-Server, der auf [Node.js](https://nodejs.org/) basiert. 
Wenn Sie den Befehl `adonis serve` ausführen, startet AdonisJS einen Entwicklungsserver, der standardmäßig auf `http://127.0.0.1:3333` läuft.

Sie können den AdonisJS-Entwicklungsserver mit dem folgenden Befehl starten:

```bash
adonis serve --dev
```

Nachdem der Server gestartet ist, können Sie Ihren Webbrowser öffnen und die Anwendung unter der angegebenen Adresse aufrufen.

Der integrierte Webserver ist hauptsächlich für die Entwicklung und das Testen gedacht. 
In produktiven Umgebungen wird empfohlen, einen speziellen Webserver wie [Nginx](https://nginx.org/) oder [Apache](https://httpd.apache.org/) 
als Reverse Proxy vor AdonisJS zu verwenden, um die Anwendung effizienter zu betreiben und sicherzustellen, 
dass sie auf verschiedenen Ports (zum Beispiel Port 80 oder 443) für HTTP und HTTPS erreichbar ist.
*/

/*
c. Was ist eine Route?

Lösung: 
    URL: www.riemke.dev/students/show
    Route: /students/show

    Aufgabe der Route:
        - Start einer bestimmten Funktion (hier: Anzeigen der Studis)
        - Rendern einer View (siehe später)
        - Dynamische Routen: Anzeige bestimmter Daten mit Parametern /students/ show/2217 zeigt z.B. Student 2217 an.
*/


/*
d. Was haben HTTP-Verben mit der Route zu tun.


Lösung:
    HTTP-Verben spielen eine entscheidende Rolle bei der Definition von Routen in Webanwendungen. 
    Jeder HTTP-Verb (wie GET, POST, PUT, DELETE usw.) korrespondiert mit einer bestimmten Aktion oder Operation, 
    die auf der Serverseite ausgeführt werden soll. 
    Die Verwendung von HTTP-Verben in der Definition von Routen gibt an, 
    welche Art von Anfrage die Route auslöst und welcher Code oder Controller darauf reagiert.

    Hier sind einige gängige HTTP-Verben und ihre typischen Verwendungen in der Routendefinition:

1. **GET:** Wird verwendet, um Ressourcen abzurufen. Zum Beispiel: Anzeigen einer HTML-Seite, Abrufen von Daten.

   ```javascript
   const Route = use('Route');
   Route.get('/users', 'UserController.index');
   ```

2. **POST:** Wird verwendet, um neue Ressourcen zu erstellen. Zum Beispiel: Hinzufügen eines neuen Benutzers.

   ```javascript
   const Route = use('Route');
   Route.post('/users', 'UserController.create');
   ```

3. **PUT oder PATCH:** Wird verwendet, um bestehende Ressourcen zu aktualisieren. Zum Beispiel: Aktualisieren von Benutzerinformationen.

   ```javascript
   const Route = use('Route');
   Route.put('/users/:id', 'UserController.update');
   ```

4. **DELETE:** Wird verwendet, um Ressourcen zu löschen. Zum Beispiel: Löschen eines Benutzerkontos.

   ```javascript
   const Route = use('Route');
   Route.delete('/users/:id', 'UserController.destroy');
   ```

Die Verwendung von HTTP-Verben in der Routendefinition ermöglicht es dem Server, 
die Absicht des Clients zu interpretieren und die entsprechende Logik oder Controller-Aktion auszuführen. 
Dadurch wird die RESTful-Architektur unterstützt, 
die eine klare Struktur für die Interaktion mit Ressourcen in einer Webanwendung fördert.
*/