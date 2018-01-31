import React from 'react'

import { Link } from 'react-router-dom'

const Movie = (props) => {
	return(
		<div className="movie">
			<h1 className="movie-header">{props.currentMovie.title}</h1>
			<h3 className="movie-subhead">{props.currentMovie.genre}</h1>
			<Link to={`/movies/${props.currentMovie.id}`}>See More</Link>
		</div>
	)
}

export default Movie;