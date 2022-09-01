import React from 'react';

// CSS
import './Item.css';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({product}) => {

  return (
    <div className='col'>
      <Card>
        <Card.Body className='text-center'>
          <Card.Img src={product.pictureUrl} alt={`Imagen de ${product.name}.`} className='cardImg'/>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
          <Button variant="outline-success">Ver detalle del producto</Button>
        </Card.Body>
      </Card>
    </div>
  )
};
