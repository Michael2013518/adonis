'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAddIsVerifiedColumnSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.boolean('is_verified').notNull().defaultTo(false)
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('is_verified')
    })
  }
}

module.exports = UserAddIsVerifiedColumnSchema
