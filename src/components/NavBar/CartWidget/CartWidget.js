import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
// Icons
import {AiOutlineShoppingCart} from 'react-icons/ai';
// CSS
import './CartWidget.css';

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
