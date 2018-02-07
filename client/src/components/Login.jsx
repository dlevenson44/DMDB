import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super()
		// initiate page state
		this.state = {
			username: '',
			password: '',
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
			<div className="login-container">
				<form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
					<div className="form-group row">
						<label for="text-label" className="col-1 col-form-label" id="login-label">Username:</label>
						<div className="col-3">
							<input className="form-control" type="text" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} id="login-form" />
						</div>
					</div>
					<div className="form-group row">
						<label for="text-label" className="col-1 col-form-label" id="login-label">Password:</label>
						<div className="col-3">
							<input className="form-control" type="text" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} id="login-form" />
						</div>
					</div>
					<div className="form-group row">					
						<div className="col-2" id="login-submit">
						<input className="form-control" type="submit" value="Log in!" />
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;
