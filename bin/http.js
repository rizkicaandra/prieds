if(process.env.NODE_ENV != 'production')
  require('dotenv').config()
const mongoose = require('mongoose')
const app = require('../app')

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_CONNURL, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(port, () => {
  console.log(`Prieds service is listening at http://localhost:${port}`);
})