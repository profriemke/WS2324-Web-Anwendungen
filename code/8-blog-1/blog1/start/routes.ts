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

Route.get('/', async ({ view }) => {
  const posts = await Database.from('posts')
                              .select('*')
                              .orderBy('date', 'desc');
 return view.render('index',{ posts })
})
Route.post('/admin/post/create', async ({ request, response }) => {
  try{
  const result = await Database.table('posts')
                         .insert({
                          title: request.input('title'),
                          teaser: request.input('teaser'),
                          text: request.input('text'),
                          author: request.input('author'),
                          date: new Date(),
                         })
  }catch(err){
    console.log(err);
    return 'error'+err;
  }
  return response.redirect('/');
});

Route.get('/admin/post/create', async ({ view }) => {
  return view.render('admin_post_create')

});
Route.get('/post/:id', async({ view, params }) => {
  const post = await Database.from('posts')
                              .select('*')
                              .where('id', params.id)
                              .first()
  console.log(post)                            
  return view.render('post',{post})
})

Route.get('/kunden', async ({ view }) => {
  const kunden = await Database.from('kunde')
                               .select('kundennr', 'vorname', 'nachname')
                               .where('plz', 72658)
                               .limit(10);
  return view.render('kunden', { kunden })
});