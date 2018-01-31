import React, { Component } from 'react';

class MovieList extends Component {
	constructor(props) {
		super()
		this.state = {
			movies: null,
			dataLoaded: false,
		}
		this.renderMovieList = this.renderMovieList.bind(this)
	}

	componentDidMount() {
		fetch('/api/movies', { credentials: 'include' })
		.then(res => res.json())
		.then(res => {
			this.setState({
				movies: res.data.movies,
				dataLoaded: true,
			})
		}).catch(err => console.log(err))
	}

	renderMovieList() {
		if (this.state.dataLoaded) {
			return <h1>movies go here</h1>
		} else return <p> Loading!</p>
	}

	render() {
		return(
			<div className="movielist">
				{this.renderMovieList()}
			</div>
			)
	}
}

export default MovieList