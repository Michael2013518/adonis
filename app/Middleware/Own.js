'use strict'
const Post = use('App/Models/Post')
const PermissionCheckException = use('App/Exceptions/PermissionCheckException')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Own {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, params, auth, session, response }, next, args) {
    // call next to advance the request
    const entityType = args[0]
    let entity = {}
    if(entityType === 'post') {
      entity = await Post.find(params.id)
    }
    const own = entity.user_id === auth.user.id
    if (!own && auth.user.id !== 12) {
      throw new PermissionCheckException('Permission check exception', 403)
      // session
      //   .flash({
      //     type: 'danger',
      //     message: 'You have no permission to do this.'
      //   })
      // await session.commit()
      // return response.redirect('back')
    }
    await next()
  }
}

module.exports = Own
