import './ItemDetail.css';
import {ItemCount} from '../../ItemCount/ItemCount.js';
import {useState} from 'react';

import {Link} from 'react-router-dom';
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({item}) => {
  const [show, setShow] = useState(true);

  const agregarAlCarro = (count) => {
    // Ocultar Boton
    setShow(false);
    // Mostrar Notificacion
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
    <div className='d-flex justify-content-center align-items-center'>
      <img src={item.pictureUrl} alt={`Imagen de ${item.name}.`}/>
      <div className='text-center'>
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <h5>Stock: {item.stock}</h5>
        <div>
          <h5>Descripción:</h5>
          <p>{item.description}</p>
        </div>
        {
          show ?
          <ItemCount stock={item.stock} initial={1} onAdd={agregarAlCarro}/>
          :
          <Link to='/cart'><button>Terminar la Compra</button></Link>
        }
        <ToastContainer /> 
      </div>
    </div>
  )
}
