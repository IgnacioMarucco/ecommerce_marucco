import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';

// Productos
import { arrayProducts } from '../../data/arrayProducts';

// Bootstrap spinner
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});
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
        const item = data.find((item) => item.id === Number(id));
        setItem(item);
        setLoading(false);
      } catch (error) {
        console.log("Hubo un error")
      }
    };

    asyncFunction();
  },[id]);

  return (
    <>
      {
        loading ?
        <Spinner animation="grow" variant="dark" style={{display: "flex", margin: "0 auto"}}/>
        :
        <ItemDetail key={item.id} item = {item}/>
      }
    </>
  )
};
