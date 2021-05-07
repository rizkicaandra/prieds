const customer = require('../models/customer')
var mongoose = require('mongoose')

const checkIsDataExist = async(req, res, next) => {
  try {
    let { id } = req.params
    if(!mongoose.isValidObjectId(id))
      throw { name: 'custom', message: 'Invalid Object Id', statusCode : 400 }
    let customerData = await customer.findOne({ _id : id });
    if(!customerData){
      throw { name: 'custom', message: 'Data not found', statusCode : 404 }
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = checkIsDataExist