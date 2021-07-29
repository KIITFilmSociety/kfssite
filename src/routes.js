import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Members from './core/Members'
import Events from './core/Events'
import About from './core/About'
import Works from './core/Works'
<<<<<<< HEAD
=======
import Contact from './core/Contact'
>>>>>>> 51b12fee1f7971747a0e9db8bf3485cbab29356f

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path='/' exact component={Home} />
        <Route path='/members' exact component={Members} />
        <Route path='/events' exact component={Events} />
        <Route path='/about' exact component={About} />
        <Route path='/works' exact component={Works} />
=======
      <Route path="/" exact component={Home} />
      <Route path="/members" exact component={Members} />
      <Route path="/events" exact component={Events} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={Works} />
      <Route path="/contact" exact component={Contact} />
>>>>>>> 51b12fee1f7971747a0e9db8bf3485cbab29356f
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
