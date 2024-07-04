//implemetation of todo app
import React, { useState } from 'react';

const Six = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleAdd = () => {
        if (input.trim()) { 
            setTodo([...todo, input]);
            setInput(''); 
        }
    };

    const handleRemove =(index)=>{
        const updatedTodo = todo.filter((_,i) => i!==  index);
        setTodo(updatedTodo);
    }

    return (
        <div>
            <input
                type='text'
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todo.map((todos, index) => (
                    <li key={index}>{todos} <button onClick={()=>handleRemove(index)}>Remove</button></li>
                ))}
            </ul>
        </div>
    );
};

export default Six;
