import React, {useState, useEffect} from 'react'
import { getItem } from '../../services/mockAPI'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';


function ItemdDetailContainer() {
  let [item, setItem] = useState({});

console.log("params", useParams());

const { itemId } = useParams(); 


  useEffect(() => {
    getItem(itemId).then((respuestaDatos) => setItem(respuestaDatos));
  }, [itemId]);


  return (
    <div className="detail__container">
    <ItemDetail 
          key={item.id}
          id={item.id}
          price={item.price}
          title={item.title}
          img={item.img}
          detail={item.detail}
          stock={item.stock}
    />
  </div>
  )
}

export default ItemdDetailContainer