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
})

import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/kunden', async () => {
  const kunden = await Database.from('kunde')
  .select('*')
  .limit(10);
  return kunden;
})

Route.get('/stuttgart', async ({view}) => {
  const kunden = await Database.from('kunde')
  .select('*')
  .where('ort', 'Stuttgart');
  console.log(kunden);
  return view.render('stuttgart', {kunden} );
})

Route.get('/berlin', async ({view}) => {
  const kunden = await Database.from('kunde')
  .select('*')
  .where('ort', 'Berlin');
  console.log(kunden);
  return view.render('berlin', {kunden} );
})

Route.get('/suche', async ({ view }) => {
  return view.render('suche');
}).as('search.index');

Route.post('/suche', async ({ request, view }) => {
  const ort = request.input('ort');
  const nachname = request.input('nachname');
  const kunden = await Database.from('kunde').select('*').where('ort', ort).orWhere('nachname', nachname);
  return view.render('suche', { kunden });
}).as('suche');
