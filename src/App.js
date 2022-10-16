// import logo from './logo.svg';
import './App.css';

import NavBar from "./components/header/NavBar";
import Banner from './components/hero/Banner';
import ItemListContainer from "./components/Productos/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Banner/>
      </header>
        <ItemListContainer/>
    </div>
  );
}

export default App;
