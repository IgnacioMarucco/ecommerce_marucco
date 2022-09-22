import React, {useContext} from 'react';
import {CartItem} from '../CartItem/CartItem';
import {CartContext} from '../../../context/CartContext';
import {Link} from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';

export const CartList = () => {
  const {itemCartList, clearCart, getTotalPrice} = useContext(CartContext);
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column justify-content-center text-center w-100'>
        <h1 className='text-center'>Tu Carrito:</h1>
        <div className='justify-content-center container-fluid align-self-center'>
          {
            itemCartList.map(item => (
              <CartItem key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <div className='d-flex flex-shrink-1 flex-column justify-content-center text-center align-self-center'>
        <h5>Total: ${getTotalPrice()}</h5>
        <Button className='clearBtn align-self-center' variant="danger" onClick={clearCart}>Vaciar el Carro</Button>
        <Link to='/checkout' className='align-self-center'><Button variant="success">Continuar la Compra</Button></Link>
      </div>
    </div>
  )
}
