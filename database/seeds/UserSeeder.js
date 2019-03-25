'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const users = [
      { username: '张三丰',email: 'zsf@163.com',password: '1111111'},
      { username: '张无忌',email: 'wj@126.net',password:'123123'}
    ]
    User.createMany(users)
  }
}

module.exports = UserSeeder
