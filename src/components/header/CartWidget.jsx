import React, {useContext} from "react";
import { cartContext } from '../context/CartContext';
import './NavBar.css'
import { BiCartAlt } from "react-icons/bi";

function CartWidget() {

  const { cart } = useContext(cartContext);

  return (
    <div className='menu__lista--cart'>
    <BiCartAlt/>
    <span className='menu__lista--qty'>{cart.length}</span></div>
    
  )
}

export default CartWidget