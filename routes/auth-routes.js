// bring in dependencies
const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')

// on /register page bring in create function from user controller
authRouter.post('/register', usersController.create)