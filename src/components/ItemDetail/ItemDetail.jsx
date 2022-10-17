import React, { useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart'

function ItemDetail(props) {

  const [isInCart, setIsInCart] = useState(false)

  function handleOnAddToCart(contador){
    console.log(`agregaste ${contador} unidades al carrito`);
    // addItem(props, contador);
    setIsInCart(true);
    
  }

  return (
    <div className="item">

      <div className="item__detail">

        <div className="item__detail--img">
          <img src={props.img} alt={props.title} />
        </div>

        <div className="item__detail--side">
          <div className="item__detail--title">
            <h3>{props.title}</h3>
          </div>
          <div className="item__detail--detail">
            <p>{props.detail}</p>
          </div>
          
          <div className="item__detail--price">
            <h4>$ {props.price}</h4>
          </div>
          { !isInCart ? <ItemCount onAddToCart={handleOnAddToCart}/> : <Link to={<Cart/>}>Finalizar</Link> }
            
        </div>

      </div>
    </div>
  );
}

export default ItemDetail;
