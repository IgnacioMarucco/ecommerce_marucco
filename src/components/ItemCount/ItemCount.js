import React from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div className='itemCounter'>
      <div className='counter'>
        <Button variant="secondary" disabled={count === stock || stock === 0} onClick={increase} id='increase'>+</Button>
        <div>{count}</div>
        <Button variant="secondary" disabled={count <= 1 || stock === 0} onClick={decrease} id='decrease'>-</Button>
      </div>
      <Button variant="success" disabled={stock === 0} onClick={()=> {onAdd(count)}} id='addProduct'>Agregar al Carro</Button>
    </div>
  )
}