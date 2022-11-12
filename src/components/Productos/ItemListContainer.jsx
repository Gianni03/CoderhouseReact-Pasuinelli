import React, { useState, useEffect } from 'react'
import './item.css'
// import getItems from '../../services/mockAPI'
// import { getItemByCategory } from '../../services/mockAPI'
import {getItems, getItemByCategory} from '../../services/firestore';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'


function ItemListContainer() {

  let [data, setData] = useState([]);

  const { cat } = useParams();
  

  useEffect(() => {

    if (cat === undefined){
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  
  return (
    <div className='main'>
      
      <h1>Jim Dunlop Picks</h1>

      <section className="main__container">
      <ItemList data={data}/>
      
                
      </section>
    </div>
  )
}

export default ItemListContainer