// import dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const MovieSingle = (props) => {
	console.log(props, 'from movie single')
	return(
		<div className="single-container">
			<div className="movie-single">
				<h1 className="movie-header">{props.currentMovie.title}</h1>
				<h3 className="movie-subhead">{props.currentMovie.genre}</h3>
				<p className="movie-desc">{props.currentMovie.description}</p>
			</div>
			{props.auth
				? (<div className="movie-links">
					<Link to={`/movies/edit/${props.currentMovie.id}`}>Edit</Link>
					<button className="delete" onClick={() => props.movieDelete(props.currentMovie.id)}>Delete</button>
				</div>) : (
				<div>
					<p hidden>Unauthorized</p>
				</div>
				)
			}
		</div>
		)
}

export default MovieSingle;