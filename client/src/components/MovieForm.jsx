import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class MovieForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.movie ? props.movie.title : '',
			genre: props.movie ? props.movie.genre : '',
			description: props.movie ? props.movie.description : '',
		}
		this.handleChange = this.handleChange.bind(this)
		// this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value,
		})
	}


	// handleFormSubmit(method, e, data, id) {
	// 	e.preventDefault()
	// 	console.log('clicked')
	// 	fetch(`/api/movies/${id || ''}`, {
	// 		method: method,
	// 		credentials: 'include',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then(res => res.json())
	// 	.then(res => {
	// 		this.setState({
	//           fireRedirect: true,
	//           redirectPath: `/`,
	// 		})
	// 		if (this.props.isAdd) {
	// 		alert('Succesfully Added!')
	// 		} else {
	// 		alert('Succesfully Edited!')
	// 		}
	// 	}).catch(err => console.log(err))
	// }

	render() {
		return(
			<div className="form">
				<form onSubmit={(this.props.isAdd
					? (e) => this.handleFormSubmit('POST', e, this.state)
					: (e) => this.handleFormSubmit('PUT', e, this.state, this.props.movie.id)
					)}>
					<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
					<input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
					<input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} />
					<input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} />
				</form>
			</div>
			)
	}
}

export default MovieForm;