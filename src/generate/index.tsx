import React from 'react';
import '../App.css';
import generate from './generate';

function Generate() {
  const people = [
    "Benjamin",
    "Douglas",
    "Lauretta",
    "Annie",
    "Kate",
    "Michael",
    "Steven",
    "Leah"
  ]
  const matched = generate(people, true)

  return (
    <div className="App">
      <header className="App-header">
        <ul>          
          {matched.map(match => {
            return (<li>{match.person} gets {match.values} </li>)
          })}
        </ul>
      </header>
      
    </div>
  );
}

export default Generate;

