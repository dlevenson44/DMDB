import React, { Component } from 'react'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: props.user ? props.user.username : '',
			password_digest: props.user ? props.user.password_digest : '',
			email: props.user ? props.user.email : '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value,
		})
	}

	handleUpdateSubmit(e, data, id) {
	    e.preventDefault()
	    console.log('clicked')
	    fetch(`/api/auth/${id}`, {
	      method: 'PUT',
	      credentials: 'include',
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify(data),
	    }).then(res => res.json())
	    .then(res => {
	      this.setState({
	        fireRedirect: true,
	        redirectPath: '/dashboard'
	      })
	      alert('Profile Updated!')
	      window.location.reload()
	    }).catch(err => console.log(err))
	  }

	render() {
		return(
			<div>
			<form onSubmit={(e) => this.handleUpdateSubmit(e, this.state, this.props.user.id)}>
				<div className="login-container">
				<input type="text" name="username" placeholder={this.state.username} value={this.state.username} onChange={this.handleChange} className="account-field" />
				<input type="password" name="password_digest" placeholder={this.state.password_digest} value={this.state.password_digest} onChange={this.handleChange} className="account-field" />
				<input type="email" name="email" placeholder={this.state.email} value={this.state.email} onChange={this.handleChange} className="account-field" />
				<input type="submit" value="Update Profile" id="update-submit" />
				</div>
			</form>
			<button id="delete-submit" onClick={() => this.props.userDelete(this.props.user.id)}>Delete Account</button>
			</div>
		)
	}
}

export default Dashboard;