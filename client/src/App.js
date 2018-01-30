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
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleLoginSubmit(e, data) {
    // prevent page from refreshing after click
    e.preventDefault()
    // make POST fetch to submit login attempt
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res, 'this is res in handle login')
      // after successful response from server, set state to these values
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  handleRegisterSubmit(e, data) {
    // prevent page refresh
    e.preventDefault()
    // create account POST
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res, 'this is res from register handler')
      // set data as state
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  logout() {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err))
  }

  // Below are routes that will be used when components are created
  // <Route path='/dashboard' component={Dashboard} />
  // <Route path='/movies' component={Movies} />

  // render data
  // conditional rendering set up checking auth state for dashboard, login, and register routes
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={() => (
            this.state.auth
            ? <Redirect to='/dashboard' />
            : <Login handleLoginSubmit={this.handleLoginSubmit} />
            )} />
          <Route exact path='/register' render={() => (
            this.state.auth
            ? <Redirect to='/dashboard' />
            : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
            )} />
          <Route exact path='/dashboard' render={() => (
            !this.state.auth
            ?
            )}
          <Header />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
