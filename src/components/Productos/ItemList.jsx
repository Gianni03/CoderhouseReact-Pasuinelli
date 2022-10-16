import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <>
      {props.data.map((item)=> {
          return (
          <Item
            key={item.id}
            price={item.price}
            title={item.title}
            img={item.img}
            detail={item.detail}
          />
        )})}
    </>
  )
}

export default ItemList