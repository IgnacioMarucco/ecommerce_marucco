import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../utils/firebase';
import {collection, addDoc, updateDoc, doc} from 'firebase/firestore';
import {Timestamp} from 'firebase/firestore'
import { UserOrder } from '../UserOrder/UserOrder';
import { UserForm } from '../UserForm/UserForm';

export const Checkout = () => {
  const {itemCartList, getTotalPrice, clearCart} = useContext(CartContext)
  const [idOrder, setIdOrder] = useState('');

  const updateStock = () => {
    itemCartList.forEach(element => {
      const queryRef = doc(db, "items", element.id);
      updateDoc(queryRef, {stock: element.stock - element.quantity});
    });
  }

  const sendOrder = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: e.target[0].value,
        surname: e.target[1].value,
        phone: e.target[2].value,
        email: e.target[3].value
      },
      items: itemCartList,
      date: Timestamp.fromDate(new Date()),
      total: getTotalPrice(),
      status: "En proceso."
    }
    
    console.log("order", order)
    // crear referencia en la base de datos
    const queryRef = collection(db, "orders");
    // agregar el documento
    addDoc(queryRef, order).then(response => setIdOrder(response.id)); 
    updateStock();
    clearCart();
  }

  return (
    <>
      {
        idOrder
        ?
        <UserOrder idOrder={idOrder}/>
        :
        <UserForm sendOrder={sendOrder} itemCartList={itemCartList}/>
      }
    </>
  );
}
