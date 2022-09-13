import React from 'react';
import './CartContainer.css';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {CartItem} from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button';

export const CartContainer = () => {
  const {itemCartList, clearCart} = useContext(CartContext);
  return (
    <div className='d-flex flex-column justify-content-center text-center'>
      <h1 className='text-center'>Tu Carrito:</h1>
      <div className='row row-cols-auto justify-content-center container-fluid align-self-center'>
        {
          itemCartList.map(item => (
            <CartItem key={item.id} item={item}/>
          ))
        }
      </div>
      <Button className='clearBtn align-self-center' variant="danger" onClick={clearCart}>Vaciar el Carro</Button>
    </div>
  )
}
