import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'

function WebApp() {
  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default WebApp
