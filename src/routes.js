import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Members from './core/Members'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/members' exact component={Members} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
