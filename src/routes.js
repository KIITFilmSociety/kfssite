import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Members from './core/Members'
import Events from './core/Events'
import About from './core/About'
import Works from './core/Works'
import Contact from './core/Contact'
import Eventwork from './core/Eventwork'
function Routes () {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/members" exact component={Members} />
      <Route path="/events" exact component={Events} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={Works} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/eventwork" exact component={Eventwork} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
