import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './item.css'


function Item({title, price, img, detail, id}) {

const urlItem =`/picks/${id}`


  return (
    <div className='Item'>
      <div className="Item__img">
      <Link to={urlItem}>
      <img src={img} alt="Item img" />
      </Link>
      </div>
      <div className="Item__detail">
        <h3>{title}</h3>
        <h4>$ {price}</h4>
        <p>{detail}</p>
      </div>
      
      <Link to={urlItem}>
      <Button>Ver más</Button>
      </Link>

    </div>
  )
}

export default Item