import React from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export const CartWidget = () => {
  return (
    <>
    <div className='cart'>
      <Link to='/cart' className='link'>
        <AiOutlineShoppingCart className='shake' /> <span> (0) </span>
      </Link>
    </div>
    </>
    
  )
}
