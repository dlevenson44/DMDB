// import dependencies and components
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieSingle from './MovieSingle'

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
		// bind functions
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.movieDelete = this.movieDelete.bind(this)
	}

	componentDidMount() {
		if (this.state.currentPage === 'index') {
			// console.log(this, 'from index in componentDidMount')			
			fetch('/api/movies')			
				.then(res => res.json())
				.then(res => {
					console.log(res, 'res from index in componentDidMount')
					this.setState({
						allMovies: res.data.movies,
						dataLoaded: true,
					})
				}).catch(err => console.log(err))
		} else if (this.state.currentPage === 'show' || this.state.currentPage === 'edit') {
			fetch(`/api/movies/${this.state.currentId}`)
				.then(res => res.json())
				.then(res => {
					this.setState({
						currentMovie: res.data.movie,
						dataLoaded: true,
					})
				}).catch(err => console.log(err))
		} else if (this.state.currentPage === 'new') {
			this.setState({
				dataLoaded: true,
			})
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
		}).then(res => res.json(console.log(res, 'from edit thing')))
		
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

	renderSwitch() {
		switch(this.state.currentPage) {
			case 'index':
				return <MovieList allMovies={this.state.allMovies} />
				break;
			case 'show':
				return <MovieSingle auth={this.props.auth} currentMovie={this.state.currentMovie} movieDelete={this.movieDelete} />
				break;
			case 'new':
				return <MovieForm isAdd={true} handleFormSubmit={this.handleFormSubmit} />
				break;
			case 'edit':
				return <MovieForm isAdd={false} handleFormSubmit={this.handleFormSubmit} 
				currentMovie={this.state.currentMovie} />
				break;
			default:
				return <Redirect push to="/movies" />
		}
	}

	render() {
		console.log(this, 'this is moviecontroller')
		return(
			<div className="container">
				{(this.state.dataLoaded) ? this.renderSwitch() : <p>Loading.....</p>}
				{this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
			</div>
			)
	}
}

// export component
export default MovieController;