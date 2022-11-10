import React, { useState, createContext } from "react";

// importar e inicilizar nuextro createContext
const cartContext = createContext();

// funcion provider
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // function addItem(props, contador){
  //   let newCart = [...cart];

  //   newCart.push(props, contador);
  //   setCart(newCart);
  //   console.log("mensaje desde context",props , contador)
  // }

  function addItem(item, values) {
    const newItem = {
      ...item,
      values,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((product) => product.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const copyArray = [...cart];
      copyArray[productIndex].values += values;
      setCart(copyArray);
    } else {
      setCart([...cart, newItem]);
    }
  }

  //cantidad total de productos en el carrito
  function getTotalItemsInCart() {
    return cart.reduce((acc, item) => (acc += item.values), 0);
  }

  //chequear si hay un producto en el carrito
  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  //vaciar carrito
  function emptyCart() {
    return setCart([]);
  }
  //borrar un producto del carrito
  function deleteItem(id) {
    return setCart(cart.filter(product => product.id !== id));
  }

  //total carrito
  function getItemsTotalPrice() {
    return cart.reduce((acc, item) => (acc += item.price * item.values), 0);
  }

  return (
    // pasamos el objeto value a los componentes hijos
    <cartContext.Provider
      value={{
        cart,
        addItem,
        getTotalItemsInCart,
        isInCart,
        emptyCart,
        deleteItem,
        getItemsTotalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
