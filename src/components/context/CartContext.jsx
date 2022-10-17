import React, {useState, createContext} from "react";


// importar e inicilizar nuextro createContext
const cartContext = createContext();


// funcion provider
export default function CartContextProvider({children}){

  const [cart, setCart] = useState([]);

  function addItem(props, contador){
    let newCart = [...cart];

    newCart.push(props, contador);
    setCart(newCart);

    console.log("mensaje desde context",props , contador)

  }
  // function getTotalItemsInCart(){
  //   let total = 0;
  //   cart.forEach(props++)

  //   return total
  // }


  return (
    // pasamos el objeto value a los componentes hijos
    <cartContext.Provider value={{cart, addItem}}>

      {children}

    </cartContext.Provider>
  )

}

export {cartContext}