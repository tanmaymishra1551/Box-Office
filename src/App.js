import React, {useState,useEffectd} from "react";
import { Switch, Route } from 'react-router-dom';


import Home from "./pages/Home";
import Show from "./pages/Show";
import About from "./pages/Starred";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route exact path="">404 Not Found </Route>
      </Switch>
  );
}

export default App;
