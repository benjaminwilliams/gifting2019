import React from 'react';
import '../App.css';
import generate from './generate';
import { people } from '../utils/constants'

function Generate(props:any){
  const encode = props.match.params.debug !== "debug"
  console.log('doEncode', props.match.params.debug)
  console.log('encode', encode)
  const matched = generate(people, encode)

  return (
    <div className="App">
      <header className="App-header">
        <ul>          
          {matched.map((match, index) => {
            return (<li key={`match${index}`}><a href={`https://benjaminwilliams.github.io/gifting2019/code/${match.values}`}>{match.person}</a> gets {match.values} </li>)
          })}
        </ul>
      </header>
      
    </div>
  );
}

export default Generate;

