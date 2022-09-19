import React from 'react';
import './CartContainer.css';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {CartItem} from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export const CartContainer = () => {
  const {itemCartList, clearCart, getTotalPrice} = useContext(CartContext);
  return (
    <>
      {
        itemCartList.length > 0 ?
          <div className='d-flex flex-column justify-content-center text-center'>
            <h1 className='text-center'>Tu Carrito:</h1>
            <div className='row row-cols-auto justify-content-center container-fluid align-self-center'>
              {
                itemCartList.map(item => (
                  <CartItem key={item.id} item={item}/>
                ))
              }
            </div>
            <h5>Total: ${getTotalPrice()}</h5>
            <Button className='clearBtn align-self-center' variant="danger" onClick={clearCart}>Vaciar el Carro</Button>
          </div>
          :
          <div className='d-flex flex-column'>
            <h1 className='text-center'>No hay productos en tu Carro</h1>
            <Link to='/' className='align-self-center'><Button variant="success">Ir al Catalogo</Button></Link>
          </div>
      }
    </>

  )
}
