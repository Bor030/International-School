const express = require('express')


const router = express.Router()

router.use('/', require('./home-route'))
router.use('/students', require('./students-route'))
router.use('/courses', require('./course-route'))
router.use('/enrollments', require('./enrollments-route'));
router.use('/payments', require('./payments-route'));



module.exports = router

