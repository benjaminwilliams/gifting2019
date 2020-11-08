import React from 'react';
import { decrypt } from '../utils/encrypt'
import { KEY } from '../utils/constants'

function Decode(props: any) {
  
  const [ code, setCode] = React.useState(props.match.params.code || "")
  const [ value, setValue ] = React.useState("Press button above to decode")
  const [ show, setShow ] = React.useState(false)
  

  console.log(props.match)
  const decode = () => {
    const newValue = decrypt(code, KEY)
    setValue(newValue === "" ? "error" : newValue)
  }

  React.useEffect(() => {
    decode()
  }, [code])

  return (
   <div className="App-header">
     <h1>Williams Family Secret Santa 2020</h1>
     {code.length === 0 && 
     <>
      <input value={code} onChange={e => setCode(e.target.value)} style={{padding: '20px', fontSize: '30px'}} />
      <button onClick={decode} className='button'>Decode</button>
      </>
     }
     <p className='instructions'>You will see the 2 people you will give gifts to once you click the button below. you can come back to this page any time if you use the same link </p>
     <button onClick={() => setShow(true)} className='button'>Show</button>
     {show && <h2>{value}</h2>}

     {value === 'error' && <div>invalid!!!!</div>}
   </div>
  )
}

export default Decode;


