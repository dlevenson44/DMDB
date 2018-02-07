import React from 'react'
import { Link } from 'react-router-dom'


// // stateless component
const Header = (props) => {
	console.log(props, 'props from header')
	return (
		<div className="header-container">
			<h1 className="header-header">Dan Movie Database</h1>
			{props.auth 
				? (	
					<div>
					<div className="hidden-md-down">
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<Link to = '/' className="nav link">
								<button className="nav link">Home</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/movies' className="nav link">
								<button className="nav link">Movies</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/dashboard' className="nav link">
								<button className="nav link">Profile</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/new' className="nav link">
								<button className="nav link">Add A Movie</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/' className="nav link">
								<button className="nav-item" onClick={props.logout}>Logout</button>
								</Link>
							</li>
						</ul>
					</div>
					<div className="hidden-md-up">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Menu
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<Link to = '/' className="nav link">
								<button className="nav link">Home</button>
								</Link>							

								<Link to='/movies' className="nav link">
								<button className="nav link">Movies</button>
								</Link>

								<Link to='/dashboard' className="nav link">
								<button className="nav link">Profile</button>
								</Link>		
								
								<Link to='/new' className="nav link">
								<button className="nav link">Add A Movie</button>
								</Link>	
								
								<Link to='/' className="nav link">
								<button className="nav-item" onClick={props.logout}>Logout</button>
								</Link>
							</div>						
						</div>
					</div>
					</div>
				) : (
					<div>
					<div className="hidden-md-down">
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<Link to = '/' className="nav link">
								<button className="nav link">Home</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/movies' className="nav link">
								<button className="nav link">Movies</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/login' className="nav link">
								<button className="nav link">Login</button>
								</Link>
							</li>

							<li className="nav-item">
								<Link to='/register' className="nav link">
								<button className="nav link">Register</button>
								</Link>
							</li>
						</ul>
					</div>
					<div className="hidden-md-up">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Menu
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<Link to = '/' className="nav link">
								<button className="nav link">Home</button>
								</Link>							

								<Link to='/movies' className="nav link">
								<button className="nav link">Movies</button>
								</Link>

								<Link to='/login' className="nav link">
								<button className="nav link">Login</button>
								</Link>		
								
								<Link to='/register' className="nav link">
								<button className="nav link">Register</button>
								</Link>	
							</div>						
						</div>
					</div>
					</div>				
				)}			

		</div>
		)
}

export default Header;