import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class MovieForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.currentMovie ? props.currentMovie.title : '',
			genre: props.currentMovie ? props.currentMovie.genre : '',
			description: props.currentMovie ? props.currentMovie.description : '',
			image: props.currentMovie ? props.currentMovie.image : '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value,
		})
	}

	render() {
		return(
			<div className="form-container">
				<form onSubmit={(this.props.isAdd
					? (e) => this.props.handleFormSubmit('POST', e, this.state)
					: (e) => this.props.handleFormSubmit('PUT', e, this.state, this.props.currentMovie.id)
					)}>
					<input type="text" className="form-field" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} required />					
					<input type="text" className="form-field" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} required />
					<input type="text" className="form-field" name="image" placeholder="Enter image URL here!" value={this.state.image} onChange={this.handleChange} required />
					<input type="text" className="form-field" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} required />
					<input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} id="form-submit" />

				</form>
			</div>
			)
	}
}

export default MovieForm;