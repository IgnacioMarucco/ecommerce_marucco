import React from 'react';
import {Item} from '../Item/Item.js';

export const ItemList = ({products}) => {
  return (
    <div className='row row-cols-auto justify-content-center container-fluid'>
      {
        products.map((product) => (
          <Item key={product.id} product = {product}/> 
        ))
      }
    </div>
  )
};
