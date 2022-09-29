import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail';
import {Loader} from '../Loader/Loader'; 
// Firebase
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../utils/firebase';

export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  document.title = `${item.name} - JC Store`;
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
        loading ? <Loader/> : <ItemDetail key={item.id} item = {item}/>
      }
    </>
  )
};
