import React, { Component } from 'react'

class Dashboard extends Component {
	constructor() {
		super()
	}

	render() {
		console.log(this, 'from dashboard')
		console.log(this.props)
		return(
			<div>
				<p>{this.props.user.username}</p>
			</div>
		)
	}
}

export default Dashboard;