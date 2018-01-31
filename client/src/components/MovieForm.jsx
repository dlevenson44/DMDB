import React, { Component } from 'react';

class MovieForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.movie ? props.movie.title : '',
			genre: props.movie ? props.movie.genre : '',
			description: props.movie ? props.movie.description : '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value,
		})
	}

	handleFormSubmit(method, e, data, id) {
		e.preventDefault()
		console.log('clicked')
		fetch(`/api/movies/${id || ''}`, {
			method: method,
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringifiy(data),
		}).then(res => res.json())
		.then(res => {
			console.log(res)
			this.getAllMovies()
		}).catch(err => console.log(err))
	}

	render() {
		console.log(this, 'form MovieForm')
		return(
			<form onSubmit={(e) => this.handleFormSubmit('POST', e, this.state)			}>
				<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
				<input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
				<input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} />
				<input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} />
			</form>
			)
	}
}

export default MovieForm;