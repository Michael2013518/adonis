'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/**
 * routes
 */
/*
Route.get('/posts', 'PostController.index')
Route.post('/posts', 'PostController.store')
Route.get('/posts/create', 'PostController.create')
Route.get('/posts/:id', 'PostController.show')
Route.patch('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.destroy')
Route.get('/posts/:id/edit', 'PostController.edit')
*/
Route.resource('/posts', 'PostController')
//      .apiOnly()
//      .only(['index','show'])
//      .except(['index','show'])
/**
 * 路由命名
 */
/** 
Route
  .get('/users', () => 'List of users.')
  .as('users.index')
*/
/**
 * 定义路由的格式
 */
Route.get('/users', ({ request }) => {
    switch(request.format()) {
      case 'json': 
        return [
          { name: 'Michael' },
          { name: 'Lucif' }
        ]
      default: 
        return `
        -Michael-
        -Lucif-
        `
    }
})
.formats(['json','html'], true)

Route.group(() => {
  Route.get('users', () => 'Manage users')
  Route.get('posts', () => 'Manage posts')
})
.prefix('admin')

Route.any('*', ({ view }) => view.render('welcome'))