import React from 'react'

const Movie = (props) => {
	return(
		<div className="movie">
			<p>{props.movie.title}</p>
			<p>{props.movie.genre}</p>
			<p>{props.movie.description}</p>
		</div>
		)
}

export default Movie;