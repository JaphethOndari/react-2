import React from 'react'

function Events() {
    const handleClick =()=>{
        alert("button clicked")
    }
    const mouseHover =()=>{
        alert("button clicked")
    }
    const  comm=()=>{
        alert("you clicked me")
    }
    const command =()=>{
        alert("button clicked")
    }
  return (
    <div>
         <div>
        <button onKeyDown={handleClick}>you clicked</button>
    </div>
    <div>
        <button onMouseDown={mouseHover}>Click Me</button>
    </div>
    <div>
        <button onMouseEnter={command}>Hover me</button>
    </div>
    <div>
        <button onClick={comm}>Hover me</button>
    </div>

    </div>
  )
}

export default Events
