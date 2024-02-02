/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import Hash from '@ioc:Adonis/Core/Hash'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/recipes', async ({ view }) => {
  const recipes = await Database.from('recipes').select('*');
  return view.render('recipes', { recipes });
});

 Route.get('recipes/:id', async ({params, view }) => {
  const recipe = await Database.from('recipes').select('*').where('id', params.id).first();
  return view.render('recipe', { recipe });
});

Route.get('/p', async ({}) => {
  return await Hash.make('123')
});

// GET-Route für das Login-Formular
Route.get('/login', async ({ view }) => {
  return view.render('loginForm')
});

// POST-Route für die Verarbeitung des Logins
Route.post('/login', async ({ request, response, session, view  }) => {
  const result = await Database.from('users')
                                .select('*')
                                .where('login', request.input('login')) 
                                .first();
 if(!result){
    console.log('login nicht gefunden')
    return view.render('login',{error:'Login nicht gefunden'})
    
  }   
   // Erstellt Hash aus dem Passwort      
  const hashedPassword = await Hash.make(request.input('password'));

  if(!await Hash.verify(hashedPassword, request.input('password'))) {
    console.log('passwort falsch')
   return view.render('login',{error:'Passwort falsch'})
  }

  if (await Hash.verify(hashedPassword, request.input("password")) && result.login == request.input("login")) {    
  //console.log('login ok')
  session.put('login', result.login) 
  session.put('id',result.id)        
  return response.redirect('/recipes');
  }
});


// GET-Route für das Anzeigen des Formulars zum Erstellen eines neuen Rezepts
Route.get('/recipe/new', async ({ view }) => {
  return view.render('newRecipe') 
})

// POST-Route für das Speichern der neuen Rezeptdaten in der Datenbank
Route.post('/recipe/new', async ({ request, response }) => {

  const { name, recipe } = request.all();

  try {
    // Speichern der Daten in der Datenbank
    await Database.table('recipes').insert({
      name: name,
      recipe: recipe,
    });

    // Weiterleitung nach erfolgreichem Speichern
    return response.redirect('/recipes'); // Hier die Weiterleitung anpassen
  } catch (error) {
    console.error('Fehler beim Speichern des Rezepts:', error);
    // Fehlerbehandlung, falls das Speichern fehlschlägt
  
    return response.status(500).send('Fehler beim Speichern des Rezepts');
  }
});

// GET-Route für die Anzeige des Formulars zum Bearbeiten eines vorhandenen Rezepts
Route.get('/recipes/:id/edit', async ({ params, view }) => {
  try {
    // Abrufen des Rezepts anhand der ID aus der Datenbank
    const recipe = await Database.from('recipes').where('id', params.id).first();
    
    // Rendern der View für das Bearbeitungsformular und Übergeben des Rezepts
    return view.render('recipes_edit', { recipe });
  } catch (error) {
    console.error('Fehler beim Abrufen des Rezepts zur Bearbeitung:', error);
    // Fehlerbehandlung, falls das Rezept nicht gefunden werden kann
    
  }
});

// POST-Route für das Aktualisieren der Rezeptdaten in der Datenbank
Route.post('/recipes/:id/edit', async ({ params, request, response }) => {
  const { name, recipe } = request.all();

  try {
    // Aktualisieren der Rezeptdaten in der Datenbank
    await Database.from('recipes').where('id', params.id).update({ name: name, recipe: recipe });

    // Weiterleitung nach erfolgreichem Aktualisieren
    return response.redirect('/recipes'); // Hier die Weiterleitung anpassen
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Rezepts:', error);
    // Fehlerbehandlung, falls das Aktualisieren fehlschlägt
    return response.status(500).send('Fehler beim Aktualisieren des Rezepts');
  }
});
