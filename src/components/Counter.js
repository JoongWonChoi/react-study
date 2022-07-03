import React, { Component } from 'react';
import { useState } from 'react';

function Counter(){
    const [number,setNumber] = useState(0);
    const increaseNum = () => {
        //console.log('+1');
        setNumber(number+1);
    }
    const decreaseNum = () => {
        //console.log('-1');
        setNumber(number-1);
    }

    return(
        <div>
            <h2>{number}</h2>
            <button onClick={increaseNum}>+1</button>
            <button onClick={decreaseNum}>-1</button>
        </div>
    )
}

export default Counter;