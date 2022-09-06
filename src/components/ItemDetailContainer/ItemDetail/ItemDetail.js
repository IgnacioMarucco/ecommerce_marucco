import './ItemDetail.css';
import {ItemCount} from '../../ItemCount/ItemCount.js';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({item}) => {
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
    <div className='d-flex justify-content-center'>
      <img src={item.pictureUrl} alt={`Imagen de ${item.name}.`}/>
      <div className='text-center'>
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <h5>Stock: {item.stock}</h5>
        <div>
          <h5>Descripción:</h5>
          <p>{item.description}</p>
        </div>

        <ItemCount stock={item.stock} initial={1} onAdd={agregarAlCarro}/>
        <ToastContainer />  
      </div>
    </div>
  )
}
