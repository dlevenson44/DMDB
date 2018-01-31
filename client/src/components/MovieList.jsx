import React from 'react'

import Movie from './Movie'

const MovieList = (props) => {
	return(
		<div className="movie-list">
			{props.allMovies.map(movie => {
				return <Movie key={movie.id} currentMovie={currentMovie} />
			})}
		</div>
		)
}

export default MovieList;