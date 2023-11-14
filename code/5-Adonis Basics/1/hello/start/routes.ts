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

Route.get('/', async ({ view }) => {
  return view.render('welcome')
  //return 'welcome';
})

Route.get('/omm',async ()=>{
  const zielgruppe = 'Studis';
  return 'Hallo '+zielgruppe+'!';

});

Route.get('/omm/stammtisch',async ({view})=>{
  const datum ='Donnerstag 16.11.'
  const zielgruppe = 'Profs und Studis';
  return view.render('stammtisch',{datum, zielgruppe});

});

Route.get('/namen',async ({view})=>{
  const daten ={namen:['Hans','Peter','Klara','Han']};
  return view.render('namen', daten);

});

Route.get('/namen/komplexer',async ({view})=>{
  const daten ={isLoggedIn: false,
                personen:[
                  {vorname:'Hans',nachname:'Müller'},
                  {vorname:'Peter',nachname:'Schmidt'},
                  {vorname:'Klara',nachname:'Klötzchen'}             
  ]};
  // console.log(daten.personen[0].nachname);
  return view.render('namen_komplexer', daten);

});

Route.get('/nutzer',async ({view})=>{
    return view.render('nutzer');
});

Route.post('/nutzer/anzeigen',async ({request, view})=>{ 
  const vorname = request.input('vorname');
  const nachname = request.input('nachname');
  return view.render('nutzer_anzeigen',{vorname,nachname});

});