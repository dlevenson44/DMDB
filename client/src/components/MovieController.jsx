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

	// handles create and update requests
	handleFormSubmit(method, e, data, id) {
		e.preventDefault()
		console.log('clicked')
		fetch(`/api/movies/${id || ''}`, {
			method: method,
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => res.json())
		.then(res => {
			this.setState({
	          fireRedirect: true,
	          //redirect path after click
	          redirectPath: `/movies/${res.data.movie.id}`,
			})
			//alert user on successful change
			if (this.props.isAdd) {
			alert('Succesfully Added!')
			} else {
			alert('Succesfully Edited!')
			}
		}).catch(err => console.log(err))
	}

	//handle delete requests
	movieDelete(id) {
		fetch(`/api/movies/${id}`, {
			method: 'DELETE',
		}).then(res => res.json())
		.then(res => {
			console.log(res)
			// set redirect path after deletion
			this.setState({
				fireRedirect: true,
				redirectPath: '/movies',
			})
		}).catch(err => console.log(err))
	}

	render() {
		return(
			<div>
			<h1>hello world</h1>
			</div>
			)
	}
}

// export component
export default MovieController;