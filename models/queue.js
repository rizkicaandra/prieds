const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Queue = new Schema({
  category: String,
  number: Number,
  date: Date,
})

module.exports = mongoose.model('Queue', Queue)