import React from 'react'

import Movie from './Movie'

const MovieList = (props) => {
	return(
		<div className="container">
		<div className="movielist-container">
			{props.allMovies.map(movie => {
				return <Movie key={movie.id} movie={movie} />
			})}
		</div>
		</div>
		)
}

export default MovieList;