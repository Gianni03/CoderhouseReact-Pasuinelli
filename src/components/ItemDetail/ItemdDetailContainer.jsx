import React, {useState, useEffect} from 'react'
// import { getItem } from '../../services/mockAPI'
import { getItem } from '../../services/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';


function ItemdDetailContainer() {
  let [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams(); 


  useEffect(() => {
    getItem(itemId)
    .then((respuestaDatos) => setItem(respuestaDatos))
    .finally(()=> setIsLoading(false))
  }, [itemId]);

  if(isLoading){
    return Loader()
  }else {
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


}

export default ItemdDetailContainer