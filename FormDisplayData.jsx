//create a form that takes user input and diplays it in real time
import React from 'react'
import { useState } from 'react'

const FormDisplayData = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState(0)
  return (
    <>
        <form>
        firstname <input type='text' name='text' onChange={(e) => setName(e.target.value)}/><br/>
        age <input type='number' name='age' onChange={(e) => setAge(e.target.value)}/>
        </form>

        <div>
            <h1>user data</h1>
            <h3>name: {name}</h3>
            <br/>
            <h3>age: {age}</h3>
        </div>
    </>

    
  )
}

export default FormDisplayData
