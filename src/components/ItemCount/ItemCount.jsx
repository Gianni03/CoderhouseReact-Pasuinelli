import React, {useState } from 'react'
import './itemCount.css'
import Button from '../Button/Button'


function ItemCount({onAddToCart}) {



  const [contador, setContador] = useState(1);
  
  const resta = ()=> {
    
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo una unidad");
    }
  }

  const suma = () => {
    

    if (contador >= 1 && contador < 6) {
      setContador(contador + 1);
    } else {
      alert("Estas comprando todo lo que tenemos!!!");
    }
  };

  return (
    <div className='itemCount'>
      <div className="itemCount__cantidad">
        <span onClick={resta}>-</span>
        <h4 className="itemCount__contador">{contador}</h4>
        <span onClick={suma}>+</span>
      </div>
      <div className="ItemCount__comprar">
        <Button onClick={ () => onAddToCart(contador)}>Agregar</Button>
      </div>
    </div>
  )
}

export default ItemCount