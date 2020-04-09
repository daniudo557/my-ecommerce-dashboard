import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Analytics from './pages/Analytics'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/analytics' component={Analytics} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)
