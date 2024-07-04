//create a component that changes the background color when click the button 
import React, { useState } from 'react';

const Seven = () => {
    const [color, setColor] = useState(false);

    const handleColor = () => {
        setColor(prevColor => !prevColor);
    };

    const divStyle = {
        backgroundColor: color ? 'black' : 'white',
        color: color ? 'white' : 'black',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={divStyle}>
            <button onClick={handleColor}>Change color</button>
        </div>
    );
};

export default Seven;
