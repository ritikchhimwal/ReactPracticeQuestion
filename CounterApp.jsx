import React from 'react'
import { useState } from 'react'

const CounterApp = () => {

    const [add,setAdd] = useState(0);

    const handleAdd =()=>{
        setAdd(add+1);
    }
    const handlemin =()=>{
        setAdd(add-1);
    }
  return (
    <div>
        <button onClick={handleAdd}>add</button>
        <h1>{add}</h1>
        <button onClick={handlemin}>minus</button>
    </div>
  )
}

export default CounterApp
