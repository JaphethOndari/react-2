import React from 'react'

function Func() {
    const handleClick =()=>{
        alert("button clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Func