import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';

import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../utils/firebase';
// Bootstrap spinner
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = doc(db, "items", id);
        const response = await getDoc(queryRef);
        const newDoc = {
          ...response.data(),
          id:response.id
        }
        setItem(newDoc);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
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
