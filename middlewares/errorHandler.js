const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name == 'custom') {
    res.status(err.statusCode).json({ message : err.message });
  } else if (err.name == 'MongoError'){
    res.status(400).json({ message: 'Mongo Error'})
  } else {
    res.status(500).json('Internal Server Error');
  }
}

module.exports = errorHandler