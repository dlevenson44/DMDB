import React from 'react'

import { Link } from 'react-router-dom'

const Movie = (props) => {
	console.log(this, 'this is from movie')
	return(		
		<div className="movie">
			<h1 className="movie-header">{props.movie.title}</h1>
			<h3 className="movie-subhead">{props.movie.genre}</h3>
			<Link to={`/movies/${props.movie.id}`}>See More</Link>
		</div>
	)
}

export default Movie;