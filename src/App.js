import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import {items} from '../src/data/list'
import { useReducer, useState } from 'react';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import { StoreProvider } from '../src/context/context'
function App() {
  /*const [cart, setCart] = useState([])
  console.log(cart)
  */
  return (
    <div className="App">
      <StoreProvider>
      {items.map((item, index) => 
      <Product key = {index} id = {index}/>
      )}
      <Cart />
      </StoreProvider>
    </div>
  );
}

export default App;
