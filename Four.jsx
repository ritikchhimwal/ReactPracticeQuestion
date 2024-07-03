//implement a basic toggle switch
import React from 'react'
import { useState } from 'react'

const Four = () => {
    const [toggle,setToggle] = useState(false);

    const handleToggle =() => {
            setToggle(!toggle);

    }
  return (
    <div>
        <input type="checkbox" onChange={handleToggle}/>
        <p>{toggle ? "on" : "off"}</p>
    </div>
  )
}

export default Four
