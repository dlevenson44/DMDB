// import dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const MovieSingle = (props) => {
	console.log(props, 'from movie single')
	return(
		<div>
			<div className="single-container">			
				<div>
					<img src={props.currentMovie.image} className="movie-img" />
				</div>
				<div className="movie-single">				
					<h1 className="text-lg-center" id="single-header">{props.currentMovie.title}</h1>
					<h3 className="text-md-center" id="single-genre">{props.currentMovie.genre}</h3>
					<p className="movie-desc">{props.currentMovie.description}</p>
				</div>
			</div>
			{props.auth
				? (<div className="movie-links">
					<Link to={`/movies/edit/${props.currentMovie.id}`} className="single-link"><button id="nav">Edit Post</button></Link>
					<button id="nav" onClick={() => props.movieDelete(props.currentMovie.id)}>Delete Post</button>
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