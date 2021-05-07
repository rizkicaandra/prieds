const queue = require('../models/queue')

class QueueController{

  static createQueue = async(req, res, next) => {
    try {
      let currentQueue = await queue.find({}).sort({ date:'desc'}).limit(5)
      const dateNow = new Date()
      const queueNow = new queue()
      let latestDate = currentQueue[0].date.getDate()
      console.log(currentQueue)

      if (!currentQueue.length){
        queueNow.category = 'A'
        queueNow.number = 1
        queueNow.date = dateNow
      } else if(latestDate < dateNow.getDate() || latestDate == 1){
        queueNow.category = 'A'
        queueNow.number = 1
        queueNow.date = dateNow
      } else {
        queueNow.category = 'A'
        queueNow.number = currentQueue[0].number + 1
        queueNow.date = dateNow
      }

      await queueNow.save()
      res.status(201).json({ number: queueNow.category + queueNow.number, date: queueNow.date})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = QueueController