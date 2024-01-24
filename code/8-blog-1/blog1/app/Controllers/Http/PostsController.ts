// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Drive from '@ioc:Adonis/Core/Drive'
export default class PostsController {

public async create_form ({ view, session, response }) {
  if(!session.get('login')){
    response.redirect('/login')
  }
  return view.render('admin_post_create')

}



public async create ({ request, response, session }) {
    if(!session.get('login')){
    response.redirect('/login')
      }
      const image = request.file('image', {
              size: '4mb',
              extnames: ['jpg', 'jpeg', 'png', 'webp']
    })
      console.log(image)
      if(!image.isValid){
        return 'Fehler im Bild'
      }
      await image.moveToDisk('/')
      try{
      const result = await Database.table('posts')
                            .insert({
                              title: request.input('title'),
                              teaser: request.input('teaser'),
                              text: request.input('text'),
                              author: session.get('id'),
                              date: new Date(),
                              image: image.fileName
                            })
      }catch(err){
        console.log(err);
        return 'error'+err;
      }
      return response.redirect('/');
}



public async update ({ request, view }) {
 const post = await Database.from('blog')
                          .where('blog.id', request.input('id'))
			                    .update({ title: request.input('title'), 
                          teaser: request.input('teaser'),
                          text: request.input('text'), 
                          author: session.get('user').id}
				);
}

public async edit ({ params, view }) {
   const post = await Database.from('posts')
                              .select('*')
                              .where('id', params.id)
                              .first()
    return view.render('admin_post_edit', {post})
}


public async index ({ view, session }) {
  const posts = await Database.from('posts')
                              .select('*')
                              .orderBy('date', 'desc');
  return view.render('index',{ posts, login: session.get('login') })
}

public async show ({ view, params }) {
  const post = await Database.from('posts')
                              .select('*')
                              .where('id', params.id)
                              .first()
  console.log(post)  
  if(post.image !='') {
    post.url = await Drive.getUrl(post.image)    
  }                
  return view.render('post',{post})
}

public async posts_api (){
  const posts = await Database.from('posts')
                              .select('*')
                              .orderBy('date', 'desc');
  return posts
}



}
