import React from 'react'

const Movie = (props) => {
	return(
		<div className="movie">
			<p>{props.movie.title}</p>
			<p>{props.movie.genre}</p>
			<p>{props.movie.description}</p>
			{props.auth
				? <span className="edit" onClick={() => props.setEditing(props.movie.id)}>Edit</span>
				: ''}
		</div>
	)
}

export default Movie;