import React, { useContext } from 'react'
import './cart.css'
import { cartContext } from '../context/CartContext';
import Button from '../Button/Button'

function Cart() {

  const context = useContext(cartContext);

  const { cart, emptyCart, deleteItem, getItemsTotalPrice} = context;


  if (cart.length === 0) {
    return <div>Tu carrito está vacio...</div>;
  }
  return (
    <>
      <div>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>

          <img src={item.img} alt={item.title}/>
          <p>{item.price}</p>
          <Button onClick={() => deleteItem()}>quitar</Button>
        </div>
        ))}
      </div>
          <strong>{getItemsTotalPrice()}</strong>
          <Button onClick={() => emptyCart()}>vaciar carrito</Button>
    </>
  )
}

export default Cart