import React from 'react'
import './NavBar.css'
import { BiCartAlt } from "react-icons/bi";

function CartWidget() {
  return (
    <div className='menu__lista--cart'>
    <BiCartAlt/>
    <span className='menu__lista--qty'>0</span></div>
    
  )
}

export default CartWidget