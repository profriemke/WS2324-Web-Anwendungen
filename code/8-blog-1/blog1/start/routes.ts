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

// PostsController
Route.get('/', 'PostsController.index')
Route.get('/post/:id', 'PostsController.show')
Route.get('/admin/post/edit/:id', 'PostsController.edit')
Route.post('/admin/post/edit/', 'PostsController.update')
Route.post('/admin/post/create', 'PostsController.create')
Route.get('/admin/post/create', 'PostsController.create_form')
Route.get('/api/posts', 'PostsController.api_posts')

Route.get('/calc', async ({ view })=>{
  return view.render('calc')
})
Route.post('/calc/result', async ({ view, request })=>{
    const zahl1 = request.input('zahl1')
    const zahl2 = request.input('zahl2')
    const ergebnis = zahl1 * zahl2
    return view.render('calc_result', { ergebnis })

})

// Routen, die noch nicht in Controller ausgelagert sind
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
