import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About"

function Routes(){

return(
  <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      </Switch>
  </BrowserRouter>

)
}


export default Routes;