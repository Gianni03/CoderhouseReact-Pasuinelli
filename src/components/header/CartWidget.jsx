import React, {useContext} from "react";
import { cartContext } from '../context/CartContext';
import './NavBar.css'
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function CartWidget() {

  const { getTotalItemsInCart } = useContext(cartContext);

  return (
    <Link to={"/cart"}>
    <div className='menu__lista--cart'>
    <BiCartAlt/>
    <span className='menu__lista--qty'>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
    </div>
    </Link>
    
  )
}

export default CartWidget