import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(24)
    useEffect(()=>{document.title="Dhrisha"})
  return (
    <div><h1>{count}</h1>
    <button onClick ={()=>{setCount(count+1)}}>Plus 1</button>
    <br></br>
    <button onClick ={()=>{setCount(count-1)}}>Minus 1</button>
    <br></br>
    <button onClick ={()=>{setCount(count+5)}}>Plus 5</button>
    </div>
  )
}

export default HooksEx