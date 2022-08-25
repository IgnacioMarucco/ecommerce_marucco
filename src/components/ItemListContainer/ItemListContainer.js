import React from 'react';
import './ItemListContainer.css';
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

  return (
    <>
      <div>
        <div className='mensaje'>{greeting}</div>
        <ItemCount stock={8} initial={0} onAdd={agregarAlCarro}/>
      </div>
      <ToastContainer />  
    </>

  )
}
