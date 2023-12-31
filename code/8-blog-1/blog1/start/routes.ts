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

Route.get('/', async ({ view, session }) => {
  const posts = await Database.from('posts')
                              .select('*')
                              .orderBy('date', 'desc');
 return view.render('index',{ posts, login: session.get('login') })
})
Route.post('/admin/post/create', async ({ request, response, session }) => {
    if(!session.get('login')){
    response.redirect('/login')
  }
  try{
  const result = await Database.table('posts')
                         .insert({
                          title: request.input('title'),
                          teaser: request.input('teaser'),
                          text: request.input('text'),
                          author: session.get('id'),
                          date: new Date(),
                         })
  }catch(err){
    console.log(err);
    return 'error'+err;
  }
  return response.redirect('/');
});

Route.get('/admin/post/create', async ({ view, session, response }) => {
  if(!session.get('login')){
    response.redirect('/login')
  }
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

Route.get('/a', async ({ session}) => {
  session.put('text','Hallo Welt');
  return 'Wert gesetzt'
 
});
Route.get('/b', async ({ session }) => {
  return session.get('text')
});

Route.get('/zaehler', async ({ session }) => {
  session.put('zaehler', session.get('zaehler', 0) + 1);
  return session.get('zaehler')
});

Route.get('/p', async ({  }) => {

  return await Hash.make('123')
});
Route.get('/login', async ({ view  }) => {

  return view.render('login')
});
Route.get('/logout', async ({ session, response  }) => {
  session.clear()
  return response.redirect('/')
});

Route.post('/login', async ({ request, response,session, view  }) => {
  const result = await Database.from('blog_user')
                                .select('*')
                                .where('login', request.input('login'))
                                .first();
  if(!result){
    console.log('login nicht gefunden')
    return view.render('login',{error:'Login nicht gefunden'})
    
  }            
  if(!await Hash.verify(result.password, request.input('password'))) {
    console.log('passwort falsch')
   return view.render('login',{error:'Passwort falsch'})
  }    
  console.log('login ok')
  session.put('login', result.login) 
  session.put('id',result.id)        
  return response.redirect('/');
});
Route.get('/about', async ({ view }) => {
  return view.render('about') 
})
Route.get('/test', async (ctx) => {
  return  ctx
})
