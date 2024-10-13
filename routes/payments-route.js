const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/paymentsController')


router.get('/', paymentsController.index)
router.post('/store', paymentsController.store)



module.exports = router