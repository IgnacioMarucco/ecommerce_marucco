import React from 'react';
import {Item} from './Item.js';

export const ItemList = ({products}) => {
  return (
    <div className='row row-cols-auto justify-content-center container-fluid'>
      {
        products.map((product) => <Item product = {product}/>)
      }
    </div>
  )
};
