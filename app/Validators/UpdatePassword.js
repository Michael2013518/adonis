'use strict'

class UpdatePassword {
  get rules () {
    const user = this.ctx.auth.user
    return {
      // validation rules
      old_password: `required|hashVerified:${ user.password }`,
      new_password: 'required|min:6|max:30|confirmed'
    }
  }
  get validateAll () {
    return true
  }
  get messages () {
    return {
      'old_password.required': 'Password can\'t be blank',
      'old_password.hashVerified': 'Username is invalid',
      'new_password.required': 'New password can\'t be blank',
      'new_password.min': 'New password is too short (minmum is 6 characters)',
      'new_password.max': 'New password is too long (maxium is 30 characters)',
      'new_password.confirmed': 'New password confirmation doesn\'t match'
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

module.exports = UpdatePassword
