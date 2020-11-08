import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Generate from './generate'
import Decode from './decode/decode'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
      
        <Route path={"/generate/:debug"} component={Generate} />
        <Route path={"/code/:code"} component={Decode} /> 
        <Route path="/" component={Decode} /> 
      </Switch>
    </div>
  </Router>
  )
}

export default App;

