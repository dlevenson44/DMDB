import React from 'react'

import Movie from './Movie'

const MovieList = (props) => {
	return(
		<div className="movie-list">
			{props.allMovies.map(movie => {
				return <Movie key={props.currentMovie.id} currentMovie={props.currentMovie} />
			})}
		</div>
		)
}

export default MovieList;