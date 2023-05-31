import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import Article from './article'
import Archives from './archives'
import About from './about'

function WebApp() {
  return (
    <Switch>
      <Route path='/article/:articleId' component={Article} />
      <Route path='/archives' component={Archives} />
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default WebApp
