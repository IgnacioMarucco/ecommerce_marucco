import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {ItemList} from './ItemList/ItemList.js';
// Firebase
import {collection, getDocs, query, where} from 'firebase/firestore';
// base de datos
import {db} from '../../utils/firebase';
// Bootstrap spinner
import Spinner from 'react-bootstrap/Spinner';
// CSS
import './ItemListContainer.css';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"),where("category","==",categoryId));
        const response = await getDocs(queryRef);
        const datos = response.docs.map(doc => {
          const newDoc = {
            ...doc.data(),
            id:doc.id
          }
          return newDoc;
        });
        setItems(datos);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
      
    }
    getData();
  },[categoryId]);

  return (
    <>
      <div>
        {
          loading ? 
          <Spinner animation="grow" variant="dark" style={{display: "flex", margin: "0 auto"}}/>
          :
          <ItemList items = {items}/>
        }
      </div>
    </>
  )
}
