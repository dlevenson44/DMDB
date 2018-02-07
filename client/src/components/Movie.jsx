import React from 'react'

import { Link } from 'react-router-dom'

const Movie = (props) => {
	return(		
		<div className="movie">
			<h1 className="text-lg-center" id="movie-header">{props.movie.title}</h1>
			<h3 className="text-md-center" id="movie-genre">{props.movie.genre}</h3>
			<Link to={`/movies/${props.movie.id}`} id="movie-link"><p className="text-md-center" id="movie-more">See More</p></Link>
		</div>
	)
}

export default Movie;