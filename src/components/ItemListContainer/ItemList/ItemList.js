import React from 'react';
import {Item} from '../Item/Item.js';

export const ItemList = ({items}) => {
  return (
    <div className='row row-cols-auto justify-content-center container-fluid'>
      {
        items.map((item) => (
          <Item key={item.id} item = {item}/> 
        ))
      }
    </div>
  )
};
