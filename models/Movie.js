// require config file
const db = require('../db/config')

// initiate movie object
const Movie = {};

// find all movies query
Movie.findAll = () => {
	return db.query('SELECT * FROM movies');
}

// find one movie
Movie.findById = (id) => {
	return db.oneOrNone(`
		SELECT * FROM movies
		WHERE id = $1
		`, [id]);
}

// create new movie
Movie.create = (movie, userId) => {
	return db.one(`
		INSERT INTO movies
		(title, description, genre, image, user_id)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING *
		`, [movie.title, movie.description, movie.genre, movie.image, userId]);
}

// update existing movie
Movie.update = (movie, id) => {
	return db.one(`
		UPDATE movies SET
		title = $1, 
		description = $2, 
		genre = $3,
		image = $4
		WHERE id = $5
		RETURNING *
		`, [movie.title, movie.description, movie.genre, movie.image, id]);
}

// delete movie
Movie.destroy = (id) => {
	return db.none(`
		DELETE FROM movies
		WHERE ID = $1
		`, [id]);
}

module.exports = Movie;