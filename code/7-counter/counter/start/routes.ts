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

let counter = 0;
let votes ={
    gut:0,
    gehtso:0,
    schlecht:0
}

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/counter', async ({ view }) => {
  counter++;
  //return view.render('counter', { counter })
  return view.render('counter', { counter: counter, tag:'Dienstag' })
});

Route.get('/vote', async ({ view }) => {
  return view.render('vote_get')
});
Route.post('/vote', async ({ request, view }) => {
  const vote = request.input('vote')
  console.log(typeof(vote));
  if(vote==="1"){
    votes.gut++;
  }
  if(vote==="2"){
    votes.gehtso++;
  }
  if(vote==="3"){
    votes.schlecht++;
  }
  console.log(votes);
  return view.render('vote_post')
});

Route.get('/results', async ({ view }) => {
  return view.render('results', { votes })
});