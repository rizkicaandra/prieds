const router = require('express').Router()
const UserController = require('../controllers/userController')
const QueueController = require('../controllers/queueController')
const CustomerController = require('../controllers/customerController')
const authentication = require('../middlewares/authenticate')
const checkIsDataExist = require('../middlewares/checkIsDataExist')

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.post('/queue',QueueController.createQueue)
router.use(authentication)
router.get('/customers',CustomerController.index)
router.post('/customers',CustomerController.create)
router.get('/customers/:id',checkIsDataExist,CustomerController.getById)
router.put('/customers/:id',checkIsDataExist,CustomerController.update)
router.delete('/customers/:id',checkIsDataExist,CustomerController.destroy)

module.exports = router