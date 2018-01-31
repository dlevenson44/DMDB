// require dependencies
const express = require('express')
const movieRoutes = express.Router()

// import controller
const moviesController = require('../controllers/movies-controller')

// index routes
movieRoutes.route('/')
	.get(moviesController.index)
	.post(moviesController.create)

// show routes
movieRoutes.route('/:id')
	.get(moviesController.show)
	.put(moviesController.update)
	.delete(moviesController.delete)

module.exports = movieRoutes;