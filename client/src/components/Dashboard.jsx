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
			</div>
		)
	}
}

export default Dashboard;