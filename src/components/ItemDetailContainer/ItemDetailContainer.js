import React, {useEffect, useState} from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail';

import { arrayProducts } from '../../data/arrayProducts';

import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
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
        setProduct(data.find(product => product.id === 1));
        setLoading(false);
      } catch (error) {
        console.log("Hubo un error")
      }
    };

    asyncFunction();
  },[]);

  return (
    <>
      {
        loading ?
        <Spinner animation="grow" variant="primary" style={{display: "flex", margin: "0 auto"}}/>
        :
        <ItemDetail key={product.id} item = {product}/>
      }

    </>
  )
};
