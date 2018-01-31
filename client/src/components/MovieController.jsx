// import dependencies and components
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Movie from './Movie'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

class MovieController extends Component {
	constructor(props) {
		super(props);
		// initiate state values
		this.state = {
			currentPage: props.currentPage,
			currentId: props.currentId || null,
			dataLoaded: false,
			allMovies: null,
			currentMovie: null,
			fireRedirect: false,
			redirectPath: null,
		}
	}

	render() {
		return(
			<div>
			<h1>hello world</h1>
			</div>
			)
	}
}

export default MovieController;