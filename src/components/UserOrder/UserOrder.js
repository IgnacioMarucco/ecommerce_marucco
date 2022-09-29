import React, {useState, useEffect} from 'react';
import { Loader } from '../Loader/Loader';

import {Link} from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
// Bootstrap
import Button from 'react-bootstrap/Button';

export const UserOrder = ({idOrder}) => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
    useEffect(() => {
      const getData = async () => {
          try {
            const docRef = doc(db, 'orders', idOrder);
            const docSnap = await getDoc(docRef);
            const data = {
                ...docSnap.data(),
            }
            setLoading(false);
            setOrder(data);
          } catch (error) {
            console.log(`Error: ${error}`);
          }
      }
      getData();
  },[idOrder]);

  return (
    <>
      {
        loading 
        ?
        <Loader/>
        :
        <div className='text-center w-50 mx-auto'>
          <h1>Gracias por elegirnos!</h1>
          <h3>Estado del pedido: {order.status}</h3>
          <h4>ID: {idOrder}</h4>
          <h6>Fecha del pedido: {new Date(order.date.seconds*1000).toString()}</h6>
          <Link to='/' className='align-self-center'><Button variant="success">Volver al Inicio</Button></Link>
        </div>
      }
    </>
  )
}
