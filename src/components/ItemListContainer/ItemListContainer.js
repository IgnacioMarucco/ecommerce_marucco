import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { arrayProducts } from '../../data/arrayProducts';

import {ItemList} from './ItemList.js';

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProducts);
      }, 2000);
    })
  };

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log("Hubo un error")
      }
    };

    asyncFunction();
  },[]);

  return (
    <>
      <div>
        <div className='mensaje'>{greeting}</div>
        <ItemList products = {products}/>
      </div>
    </>

  )
}
