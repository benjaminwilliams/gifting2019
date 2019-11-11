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
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/generate">Generate</Link>
          </li>
         
        </ul>
      </nav> */}

      <Switch>
        <Route path={"/generate"}>
          <Generate />
        </Route>
        <Route path={"/code/:code"} component={Decode} /> 
        <Route path="/" component={Decode} /> 
        
      </Switch>
    </div>
  </Router>
  )
}

export default App;

