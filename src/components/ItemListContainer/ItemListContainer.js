import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { arrayProducts } from '../../data/arrayProducts';

import {ItemList} from './ItemList.js';

import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
        {
          loading ? 
          <Spinner animation="grow" variant="primary" style={{display: "flex", margin: "0 auto"}}/>
          :
          <ItemList products = {products}/>
        }
        
      </div>
    </>

  )
}
