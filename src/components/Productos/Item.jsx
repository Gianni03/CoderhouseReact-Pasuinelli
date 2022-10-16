import React from 'react'
import Button from '../Button/Button'
import './item.css'


function Item({title, price, img, detail}) {


  return (
    <div className='Item'>
      <div className="Item__img">
      <img src={img} alt="Item img" />
      </div>
      <div className="Item__detail">
        <h3>{title}</h3>
        <h4>$ {price}</h4>
        <p>{detail}</p>
      </div>
      
      <Button>Ver más</Button>

    </div>
  )
}

export default Item