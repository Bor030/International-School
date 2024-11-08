const express = require('express')


const router = express.Router()
router.use(['/students', '/courses', '/enrollments', '/payments'], (req, res, next) => {
    req.session.hasOwnProperty('user') ? next() : res.redirect('/')
})

router.use('/', require('./home-route'))
router.use('/students', require('./students-route'))
router.use('/courses', require('./course-route'))
router.use('/enrollments', require('./enrollments-route'));
router.use('/payments', require('./payments-route'));



module.exports = router

