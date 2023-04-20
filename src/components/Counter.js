import React from 'react'
import {useState} from 'react';


function Counter() {
    const[count,setCount]=useState(0);
    const handleClick=(e)=>{
       e.stopPropagation();
       setCount(count+1);
       console.log(count);
    }
  return (
    <>
        <h1 style={{color:"blue"}}>{count}</h1>
        <button onClick={handleClick}>Increase</button>
    </>
  )
}

export default Counter