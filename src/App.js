import './App.css';
import NavBar from "./components/header/NavBar";
import Banner from './components/hero/Banner';
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemdDetailContainer from './components/ItemDetail/ItemdDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import CartContextProvider from "./components/context/CartContext";

function App() {
  return (
    <CartContextProvider>
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <Banner/>

        <Routes>
          <Route path='/' element={
            <ItemListContainer/>
          }/>

          <Route path="/category/:cat" element={
            <ItemListContainer/>
          } />

          <Route path='/picks/:itemId' element={
            <ItemdDetailContainer/>
          }/>
          <Route path='/cart' element={

          <Cart/>}/>
          
          <Route path='*' element={
            <>
            <h1>404: Page not found</h1>
            <img src="/assets/img/page_not_found.jpg" alt="404" />
            </>}/>
        </Routes>


        <Link to={"/"}>Home</Link>
        <Link to={"/puas"}>Picks</Link>
    
    </div>
  </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
