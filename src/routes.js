<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Members from "./core/Members"
import Events from "./core/Events"
import About from './core/About'
import Works from './core/Works'

=======
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Members from './core/Members'
import Events from './core/Events'
>>>>>>> f4f0faf7e8e97742b7289813a1c960ce7cc322d2

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
      <Route path="/" exact component={Home} />
      <Route path="/members" exact component={Members} />
      <Route path="/events" exact component={Events} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={Works} />
=======
        <Route path='/' exact component={Home} />
        <Route path='/members' exact component={Members} />
        <Route path='/events' exact component={Events} />
>>>>>>> f4f0faf7e8e97742b7289813a1c960ce7cc322d2
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
