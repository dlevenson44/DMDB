import React from 'react'

// stateless component
const Home = () => {
	return(
		<div className="container">
		<div className="home-container">
		<div className="row">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
 			
 			<div className="carousel-inner" role="listbox">
			    <div className="carousel-item active">
			     	<img className="d-block img-fluid" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjVjOGQ0OTctNDhkZC00ZGNiLWI2ZGEtYjZlMWZjOTlkNDlhXkEyXkFqcGdeQXVyNjg1MjEwOTM@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="First slide" id="img1" />
			    </div>
			    
			    <div className="carousel-item">
			      <img className="d-block img-fluid" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Second slide" id="img1" />
			    </div>
			    
			    <div className="carousel-item">
			      <img className="d-block img-fluid" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="Third slide" id="img1" />
			    </div>
			  </div>
			  
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>

			</div>
		</div>
		</div>
		</div>
		)
}

export default Home;