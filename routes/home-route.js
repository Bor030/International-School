const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/logout', homeController.logout)
router.post('/login', homeController.login)



module.exports = router
