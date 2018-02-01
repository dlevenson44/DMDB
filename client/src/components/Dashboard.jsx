import React, { Component } from 'react'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: props.currentUser ? props.currentUser.username : '',
			password_digest: props.currentUser ? props.currentUser.password_digest : '',
			email: props.currentUser ? props.currentUser.email : '',
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
		console.log(this, 'from dashboard')
		return(
			<div>
			<form onSubmit={(e) => this.props.handleUpdateSubmit('PUT', e, this.state, this.props.currentUser.id)}>
				<input type="text" name="username" placeholder={this.state.username} value={this.state.username} onChange={this.handleChange} />
				<input type="password" name="password_digest" placeholder={this.state.password_digest} value={this.state.password_digest} onChange={this.handleChange} />
				<input type="email" name="email" placeholder={this.state.email} value={this.state.email} onChange={this.handleChange} />
				<input type="submit" value="Update Profile" />
			</form>
			<button className="delete" onClick={() => this.props.userDelete(this.props.currentUser.id)}>Delete User</button>
			</div>
		)
	}
}

export default Dashboard;