import React, { useContext } from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
  // Obtengo la cantidad total de productos del CartContext
  const {getTotalQuantity} = useContext(CartContext);
  return (
    <>
    <div className='cart'>
      <AiOutlineShoppingCart className='shake' /> <span> {getTotalQuantity() > 0 ? getTotalQuantity() : ""} </span>
    </div>
    </>
    
  )
}
