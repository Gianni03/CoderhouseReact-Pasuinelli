import React from 'react'
import "./button.css"

function Button(props) {

function handleClick(){
  console.log("apretado el boton")
}

  return (
    <button onClick={handleClick} className='btn'>
    {props.children}
    </button>
  )
}

export default Button