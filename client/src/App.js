// import react and styling
import React, { Component } from 'react';
import './App.css';
// import react router
import { BrowserRouter as Router, Route} from 'react-router-dom'

// import components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super()
    // set initial state
    this.state = {
      auth: false,
      user: null,
    }
  }

  handleLoginSubmit(e, data) {
    // prevent page from refreshing after click
  }


  // Below are routes that will be used when components are created
  // <Route path='/dashboard' component={Dashboard} />
  // <Route path='/movies' component={Movies} />

  // render data
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Header />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
