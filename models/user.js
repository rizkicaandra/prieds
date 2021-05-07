const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    role: String,
  }
)

module.exports = mongoose.model('User', User)