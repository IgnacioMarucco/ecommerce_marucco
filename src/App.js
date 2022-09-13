import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';
import { PageConocenos } from './components/PageConocenos/PageConocenos';
import { PageContacto } from './components/PageContacto/PageContacto';
import { CartContainer } from './components/CartContainer/CartContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/conocenos' element={<PageConocenos/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/contacto' element={<PageContacto/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
