import React from 'react';
import logo from './logo.svg';
import './App.css';
import generate from './generate';

function App() {
  const people = [
    "Benjamin  ",
    "Douglas   ",
    "Lauretta  ",
    "Annie     ",
    "Kathryn   ",
    "Michael   ",
    "Steven    ",
    "Leah      "
  ]
  const matched: Array<string> = generate(people)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>          
          {matched.map(match => <li>{match}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn reactjs

        </a>
      </header>
    </div>
  );
}

export default App;

