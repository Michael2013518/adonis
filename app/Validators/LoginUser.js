'use strict'

class StoreUser {
  get rules () {
    const user = this.ctx.auth.user
    return {
      // validation rules
      username: 'required',
      password: 'required'
    }
  }
  get validateAll () {
    return true
  }
  get messages () {
    return {
      'username.required': 'Username can\'t be blank',
      'password.required': 'Password can\'t be blank'
    }
  }
  async fails (errorMessages) {
    const { session, response } = this.ctx

    session
      .withErrors(errorMessages)
      .flashAll()

    return response.redirect('back')
  }
}

module.exports = StoreUser
