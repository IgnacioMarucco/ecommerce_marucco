import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
// CSS
import './CartItem.css';

export const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext);

  return (
    <Card className="card mb-1">
      <div className="row g-0">
        <div className="col-md-4 align-self-center">
          <img src={item.pictureUrl} alt={`Imagen de ${item.name}.`} className='cartItemImg'/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Precio por Unidad: ${item.price}</p>
            <p className="card-text">Cantidad: {item.quantity}</p>
            <p className="card-text">Precio Subtotal: ${item.totalPrice}</p>
            <Button variant="danger" onClick={()=>removeItem(item.id)}>Eliminar producto</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

