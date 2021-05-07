const customer = require('../models/customer')

class CustomerController{

  static index = async(req, res, next) => {
    try {
      let customerData = await customer.find({})
      res.status(200).json({ customerData})
    } catch (error) {
      next(error)
    }
  }

  static create = async(req, res, next) => {
    try {
      let { name, age, gender, job, mothersName, city, relegion, identityNumber, bloodType } = req.body
      const checkCustomer = await customer.findOne({ identityNumber })
      if(checkCustomer)
        throw { name: 'custom', message: 'This data already registered ', statusCode : 400 }
      let customerData = new customer({ name, age, gender, job, mothersName, city, relegion, identityNumber, bloodType })
      await customerData.save()
      res.status(201).json({ customerData})
    } catch (error) {
      next(error)
    }
  }

  static getById = async(req, res, next) => {
    try {
      let { id } = req.params
      const customerData =  await customer.find({ _id: id})
      res.status(200).json({ customerData })
    } catch (error) {
      next(error)
    }
  }

  static update = async(req, res, next) => {
    try {
      let { id } = req.params
      let { name, age, gender, job, mothersName, city, relegion, identityNumber, bloodType } = req.body
      await customer.updateOne({ _id: id}, { name, age, gender, job, mothersName, city, relegion, identityNumber, bloodType })
      let updatedCustomer = await customer.findOne({ _id: id})
      
      res.status(200).json({ customerData: updatedCustomer })
    } catch (error) {
      next(error)
    }
  }

  static destroy = async(req, res, next) => {
    try {
      let { id } = req.params
      await customer.deleteOne({ _id: id })
      res.status(200).json({ message: 'Success '})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CustomerController