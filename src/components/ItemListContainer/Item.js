import React from 'react';
import './Item.css';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Item = ({product}) => {


  return (
    <div className='col'>
      <Card>
        <Card.Body className='text-center'>
          <Card.Img src={product.pictureUrl} className='cardImg'/>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
          <Button variant="outline-success">Ver detalle del producto</Button>
        </Card.Body>
      </Card>
    </div>

  )
};
