import React from 'react';
import {Link} from 'react-router-dom';
// CSS
import './Item.css';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({item}) => {

  return (
    <div className='col'>
      <Card>
        <Card.Body className='text-center'>
          <Card.Img src={item.pictureUrl} alt={`Imagen de ${item.name}.`} className='cardImg'/>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Precio: ${item.price}</Card.Text>
          <Card.Text>Stock: {item.stock}</Card.Text>
          <Button variant="outline-success"><Link to={`/item/${item.id}`} className='cardLink'>Ver detalle del producto</Link></Button>
        </Card.Body>
      </Card>
    </div>
  )
};
