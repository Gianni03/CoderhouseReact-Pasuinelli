import React from 'react'
import './cart.css'
import { cartContext } from '../context/CartContext';

function Cart() {
  return (
    <div>{cartContext}</div>
  )
}

export default Cart