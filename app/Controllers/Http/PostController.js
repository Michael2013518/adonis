'use strict'

class PostController {
  index() {
    return `List of posts...`
  }
  store() {
    return `Post has been created`
  }
  show({ params }) {
    return `Your're watching post ${ params.id }.`
  }
  update({ params }) {
    return `Post ${ params.id } has been updated `
  }
//  删除资源
  destroy({ params }) {
    return `Post ${ params.id } has been removed `
  }
//   创建资源
  create() {
    return `Create post.`
  }
//   编辑资源
  edit({ params }) {
    return `Editing post ${ params.id }`
  }
 }

module.exports = PostController
