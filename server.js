//import all dependencies
const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

//initialize app
const app = express()
//configure dotenv
require('dotenv').config()

//setting up middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
	session({
		key: process.env.SECRET_KEY,
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: true,
	}),
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))

app.use((req, res, next) => {
	console.log('---', req.user, req.path)
	next()
})

//app listening on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`LISTENING ON PORT ${PORT}`)
})

app.get('/', (req, res) => {
	res.send('Hello World!')
});

// routes
const authRoutes = require('./routes/auth-routes')
app.use('/api/auth', authRoutes)
const movieRoutes = require('./routes/movie-routes')
app.use('/api/movies', movieRoutes)

// error handlers
app.use('*', (req, res) => {
	res.status(400).json({
		message: 'Not found!',
	})
})

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		error: err,
		message: err.message,
	})
})