import React from 'react'
import { Link } from 'react-router-dom'

// // stateless component
const Header = () => {
	return (
		<div className="nav-container">
			<nav>
				<ul className="ul-container">
					<Link to ='/'>
					<button className="nav-item">Home</button>
					</Link>

					<Link to ='/login'>
					<button className="nav-item">Login</button>
					</Link>

					<Link to ='/register'>
					<button className="nav-item">Register</button>
					</Link>

					<Link to = '/dashboard'>
					<button className="nav-item">Dashboard</button>
					</Link>

					<Link to = '/movies'>
					<button className="nav-item">Movies</button>
					</Link>

					<Link to = '/'>
					<button className="nav-item" onClick={props.logout}>Logout</button>
					</Link>
				</ul>
			</nav>
		</div>
		)
}

export default Header;