import React, { useState, useEffect } from 'react'
import './item.css'
import getItems from '../../services/mockAPI'
import ItemList from './ItemList';


function ItemListContainer() {

  let [data, setData] = useState([]);

  useEffect(
    () => {
    getItems()
    .then((respuestaDatos) => setData(respuestaDatos));
  }, []);

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