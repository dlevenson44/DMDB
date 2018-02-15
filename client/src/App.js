// import react and styling
import React, { Component } from 'react';
import './App.css';
// import react router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import MovieController from './components/MovieController'

class App extends Component {
  constructor() {
    super()
    // set initial state
    this.state = {
      auth: false,
      user: null,
      fireRedirect: false,
      redirectPath: null,
    }
    // bind functions
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.userDelete = this.userDelete.bind(this)
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
    console.log(data, 'from handle register')
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
    }).catch(err => console.log(err))
  }

  userDelete(id) {
    fetch(`/api/auth/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        fireRedirect: true,
        redirectPath: '/',
        auth: false
      })
      alert('Profile deleted!')
    }).catch(err => console.log(err))
  }

  logout() {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      console.log(res, 'from logout')
      this.setState({
        auth: false,
        user: res.data.user,
      })
    }).catch(err => console.log(err))
  }

  componentWillMount() {
    fetch('/api/auth/verify', { credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err))
  }

  // render data
  // conditional rendering set up checking auth state for dashboard, login, and register routes
  render() {
    return (
      <Router>
        <div className="App">
        <Header logout={this.logout} auth={this.state.auth} />
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
            this.state.auth
            ? <Dashboard user={this.state.user} state={this.state} handleUpdateSubmit={this.handleUpdateSubmit} userDelete={this.userDelete} />
            : <Redirect to='/login' />
            )} />
          <Route exact path='/movies' render={() => <MovieController currentPage="index" auth={this.state.auth} />} />
          <Route exact path="/movies/:id" auth={this.props.auth} render={props => (<MovieController currentPage="show" auth={this.state.auth} currentId={props.match.params.id} />)} />
          <Route exact path="/movies/edit/:id" render={props => (<MovieController currentPage="edit" currentId={props.match.params.id} />)} />
          <Route exact path='/new' render={() => (
            this.state.auth
            ? (<MovieController isAdd={true} currentPage="new" auth={this.state.auth} />)
            : <Redirect to='/login' />
            )} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
