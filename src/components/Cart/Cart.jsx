import React, { useContext } from 'react'
import './cart.css'
import { cartContext } from '../context/CartContext';
import Button from '../Button/Button'

function Cart() {

  const context = useContext(cartContext);

  const { cart, emptyCart, deleteItem, getItemsTotalPrice} = context;


  if (cart.length === 0) {
    return <div className='cart__empty'>Tu carrito está vacio...</div>;
  }
  return (
    <>
      <div className='cart'>
      {cart.map((item) => (
        <div className='cart__card'>
          <h3 className='cart__titulo'>{item.title}</h3>

          <img className='cart__img' src={item.img} alt={item.title}/>
          <p className='cart__price'>{item.price}</p>
          <Button onClick={() => deleteItem(item.id)}>quitar</Button>
        </div>
        ))}
      </div>
          <div>
            <strong className='cart__total'>{getItemsTotalPrice()}</strong>
            <Button onClick={() => emptyCart()}>vaciar carrito</Button>
          </div>
    </>
  )
}

export default Cart