
const express = require('express')
const app = express()
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/node_modules/bootstrap-icons/font'))

app.use(session({secret: 'secret',
                 resave: false,
                 saveUninitialized: false}))
                 
app.use('/', require('./routes'))
app.listen(process.env.PORT, () => {console.log('server radi')})