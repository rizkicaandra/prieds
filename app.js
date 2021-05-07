const express = require('express')
const useRoute = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(useRoute)

app.use(errorHandler)

module.exports = app