//buils a component that return a list
import React from 'react'

const Three = () => {

const app = ['a','b','c','d','e','f'];
  return (
    <div>
        <ul>
            {app.map((item,index) =>{
               return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Three
