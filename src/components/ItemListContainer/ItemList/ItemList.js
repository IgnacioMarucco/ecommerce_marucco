import React from 'react';
import {Item} from '../Item/Item.js';

import {Link} from 'react-router-dom';

export const ItemList = ({items}) => {
  return (
    <div className='row row-cols-auto justify-content-center container-fluid'>
      {
        items.map((item) => (
          // <Link key={item.id} to={`/item/${item.id}`}>
          //   <Item item = {item}/> 
          // </Link>
          <Item key={item.id} item = {item}/> 
        ))
      }
    </div>
  )
};
