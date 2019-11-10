import React from 'react';
import { decrypt } from '../utils/encrypt'

function Decode() {
  
  const [ code, setCode] = React.useState("")
  const [ value, setValue ] = React.useState("Enter code above")

  function handleClick() {
    const newValue = decrypt(code,'test')
    console.log('newValue: ', newValue)
    setValue(newValue)
  }

  return (
   <div>
     <input value={code} onChange={e => setCode(e.target.value)} style={{padding: '20px', fontSize: '30px'}} />
     <button onClick={handleClick} className='button'>Decode</button>
     <div>{value}</div>
   </div>
  )
}

export default Decode;

