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
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/generate">Generate</Link>
          </li>
         
        </ul>
      </nav>

      <Switch>
        <Route path="/generate">
          <Generate />
        </Route>
        <Route path="/">
          <Decode />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;

