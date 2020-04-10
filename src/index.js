import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Analytics from './pages/Analytics'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/analytics' component={Analytics} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)
