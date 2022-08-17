import React from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart} from "react-icons/ai";

export const CartWidget = () => {
  return (
    <>
    <div className='cart'>
      <AiOutlineShoppingCart className='shake' /> <span> (0) </span>
    </div>
    </>
    
  )
}
