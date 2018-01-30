import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super()
		// initiate page state
		this.setState = {
			username: '',
			password: '',
			email: ''
		}
		// bind functions
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e) {
		// element name
		const name = e.target.name
		// element value
		const value = e.target.value	
		// set state of name to disclosed value
		this.setState({
			[name]: value,
		})
	}

	render() {
		return(
			<div>
				<form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
					<input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
					<input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
					<input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
					<input type="submit" value="Create Account!" />
				</form>
			</div>
		)
	}
}

export default Register;