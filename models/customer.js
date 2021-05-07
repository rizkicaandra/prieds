const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema({
  name: String,
  age: String,
  gender: String,
  job: String,
  mothersName: String,
  city: String,
  relegion: String,
  identityNumber: Number,
  bloodType: String,
})

module.exports = mongoose.model('Customer', Customer)