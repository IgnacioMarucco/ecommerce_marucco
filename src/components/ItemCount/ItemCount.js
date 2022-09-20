import React from 'react';
import {useState} from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
// CSS
import './ItemCount.css';

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