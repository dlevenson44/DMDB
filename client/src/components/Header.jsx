import React from 'react'
import { Link } from 'react-router-dom'

// // stateless component
const Header = (props) => {
	console.log(props, 'props from header')
	return (
		<div className="nav-container">
			<nav>
				<ul className="ul-container">

				<Link to ='/'>
				<button className="nav-item">Home</button>
				</Link>

				<Link to = '/movies'>
				<button className="nav-item">Movies</button>
				</Link>	
				{props.auth 
				? (	
					<div>
					<Link to = '/dashboard'>
					<button className="nav-item">Dashboard</button>
					</Link>

					<Link to ='/new'>
					<button className="nav-item">Add A Movie</button>
					</Link>

					<Link to = '/'>
					<button className="nav-item" onClick={props.logout}>Logout</button>
					</Link>
					</div>

				):(
					<div>
					<Link to ='/login'>
					<button className="nav-item">Login</button>
					</Link>

					<Link to ='/register'>
					<button className="nav-item">Register</button>
					</Link>
					</div>
				)
				}
				</ul>
			</nav>
		</div>
		)
}

export default Header;