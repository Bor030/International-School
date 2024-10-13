const express = require('express')
const router = express.Router()
const studentsController = require('../controllers/studentsController')

router.get('/', studentsController.index)
router.get('/create', studentsController.create)
router.get('/show/:id', studentsController.show)


// POST
router.post('/create', studentsController.store)




module.exports = router