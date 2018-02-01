import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class MovieForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.currentMovie ? props.currentMovie.title : '',
			genre: props.currentMovie ? props.currentMovie.genre : '',
			description: props.currentMovie ? props.currentMovie.description : '',
		}
		this.handleChange = this.handleChange.bind(this)
				console.log(props, 'are props from form')
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value,
		})
	}

	render() {
		console.log(this, 'is this from form')
		return(
			<div className="form">
				<form onSubmit={(this.props.isAdd
					? (e) => this.props.handleFormSubmit('POST', e, this.state)
					: (e) => this.props.handleFormSubmit('PUT', e, this.state, this.props.currentMovie.id)
					)}>
					<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} required />
					<input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} required />
					<input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} required />
					<input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} />
				</form>
			</div>
			)
	}
}

export default MovieForm;