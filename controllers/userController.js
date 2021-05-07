const user = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{
  
  static register = async(req, res, next) => {
    try {
      const { username, password, name, email, role } = req.body
      if(!username || !password || !name || !email || !role) 
        throw { name: 'custom',  message: 'Required Field must be filled', statusCode: 400 }
      let userData = new user({ username, password: hashPassword(password), name, email, role })
      await userData.save()
      res.status(200).json({ userData })
    } catch (error) {
      next(error)
    }
  }

  static login = async(req, res, next) => {
    try {
      const { username, password } = req.body
      if(!username || !password) 
        throw { name: 'custom',  message: 'Required Field must be filled', statusCode: 400 }
      const userData = await user.findOne({ username })
      if(!userData)
        throw { name: 'custom',  message: 'Wrong username or password', statusCode: 400 }
      const isValidPassword = comparePassword(password, userData.password)
      if(!isValidPassword)
        throw { name: 'custom',  message: 'Wrong username or password', statusCode: 400 }
      const accessToken = generateToken({
        _id: userData._id,
        name: userData.name
      })
      res.status(200).json({
        name: userData.name,
        accessToken
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController