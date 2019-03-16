'use strict'

class PostController {
    index({ view }) {
      const pageTitle = 'posts of list'
      const user = {
          name: 'Michael'
      }
      const entities = [
          { id: 1, title: 'apple', content: 'water apple'},
          { id: 2, title: 'banana', content: 'water banana'},
          { id: 3, title: 'oranger', content: 'water oranger'}
      ]
      return view.render('posts.index', { pageTitle, user , entities})
    }
}

module.exports = PostController
