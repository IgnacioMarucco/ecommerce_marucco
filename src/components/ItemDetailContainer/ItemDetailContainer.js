import React, {useEffect, useState} from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail';

import { arrayProducts } from '../../data/arrayProducts';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

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
        setProduct(data.find(product => product.id === 1));
      } catch (error) {
        console.log("Hubo un error")
      }
    };

    asyncFunction();
  },[]);

  return (
    <>
      <ItemDetail key={product.id} item = {product}/>
    </>
  )
};
