'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Post = use('App/Models/Post')
class PostSeeder {
  async run () {
    const posts = [
      { title: '停用社交网络', content: '专注后台架构设计和开发', user_id: 1},
      { title: '努力学习点前端知识', content: '丰富前端知识架构，提升个人能力', user_id: 1},
      { title: '注册一家小工作室', content: '专注开发和编码，提供专业的行业解决方案', user_id: 2},
      { title: '找两个可行的项目尝试', content: '完善产品业务性开发，技术与业务相结合的能力', user_id: 2},
      { title: '动漫视频设计', content: '制作一个动漫视频，作为项目的开始实施', user_id: 2}
    ]
    await Post.createMany(posts)
  }
}

module.exports = PostSeeder
