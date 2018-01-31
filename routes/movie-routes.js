// require dependencies
const express = require('express')
const movieRoutes = expres.Router()

// import controller
const moviesController = require('../controllers/movies-controller')

// index routes
movieRoutes.get('/', moviesController.index)
movieRoutes.post('/', moviesController.create)

// show routes
movieRoutes.get('/:id', moviesController.show)
movieRoutes.put('/:id', moviesController.update)
movieRoutes.delete('/:id', moviesController.delete)

module.exports = movieRoutes