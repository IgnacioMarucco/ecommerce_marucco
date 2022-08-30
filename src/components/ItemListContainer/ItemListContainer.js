import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { arrayProducts } from '../../data/arrayProductos';

import {ItemList} from './ItemList.js';

import {ItemCount} from '../ItemCount/ItemCount.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemListContainer = ({greeting}) => {
    const agregarAlCarro = (count) => {
    toast(`Agregaste ${count} productos!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
        {/* <ItemCount stock={20} initial={1} onAdd={agregarAlCarro}/>
        <ToastContainer />   */}
      </div>
      
    </>

  )
}
