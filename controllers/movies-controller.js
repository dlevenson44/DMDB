//bring in movie model
const Movie = require('../models/Movie')

// initiate movieController object
const movieController = {};

// movie index function, displays all movies
movieController.index = (req, res, next) => {
	Movie.findAll()
	.then(movies => {
		res.json({
			message: 'ok',
			data: { movies },
		})
	}).catch(next)
}

// movie show function, displays specific movie
movieController.show = (req, res, next) => {
	Movie.findById(req.params.id)
	.then(movie => {
		res.json({
			message: 'ok',
			data: { movie },
		})
	}).catch(next)
}

// create movie function to add new entries
movieController.create = (req, res, next) => {
	Movie.create({
		title: req.body.title,
		description: req.body.description,
		genre: req.body.genre,
	}, req.user.id).then(movie => {
		res.json({
			message: 'Successfully added movie',
			data: { movie },
		})
	}).catch(next)
}

// movieController.update = (req, res, next) => {
// 	Movie.findById(req.params.id)
// 	.then(movie => {
// 		return movie.update({
// 			title: req.body.title,
// 			description: req.body.description,
// 			genre: req.body.genre,
// 		})
// 	}).then(movie => {
// 		res.status(202).json({
// 			message: 'Successfully updated movie',
// 			data: {
// 				movie,
// 			},
// 		})
// 	}).catch(next)
// }


// update existing movie entry
movieController.update = (req, res, next) => {
	Movie.update({
		title: req.body.title,
		description: req.body.description,
		genre: req.body.genre,
	}, req.params.id).then(movie => {
		res.json({
			message: 'Successfully updated movie',
			data: { movie },
		})
	}).catch(next)
}

// delete movie entry
movieController.delete = (req, res, next) => {
	Movie.destroy(req.params.id)
	.then(() => {
		res.json({
			message: 'Successfully deleted movie',
		})
	}).catch(next)
}

module.exports = movieController;