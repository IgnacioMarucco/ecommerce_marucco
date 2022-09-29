import React, {useContext} from 'react';
import {CartList} from './CartList/CartList';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
// CSS
import './CartContainer.css';

export const CartContainer = () => {
  const {itemCartList} = useContext(CartContext);
  document.title = `JC Store - Carro`;
  return (
    <>
      {
        itemCartList.length > 0 ?
          <CartList/>
          :
          <div className='d-flex flex-column'>
            <h1 className='text-center'>No hay productos en tu Carro</h1>
            <Link to='/' className='align-self-center'><Button variant="success">Ir al Catalogo</Button></Link>
          </div>
      }
    </>
  )
}
