import './ItemDetail.css';
import {ItemCount} from '../../ItemCount/ItemCount.js';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({product}) => {
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
      <img src={product.pictureUrl} alt={`Imagen de ${product.name}.`}/>
      <div className='text-center'>
        <h1>{product.name}</h1>
        <h3>${product.price}</h3>
        <h5>Stock: {product.stock}</h5>
        <div>
          <h5>Descripción:</h5>
          <p>{product.description}</p>
        </div>

        <ItemCount stock={product.stock} initial={1} onAdd={agregarAlCarro}/>
        <ToastContainer />  
      </div>
    </div>
  )
}
