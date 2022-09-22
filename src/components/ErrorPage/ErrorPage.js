import React from 'react';
import {Link} from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
// CSS
import './ErrorPage.css';

export const ErrorPage = () => {
  return (
    <div className='alert'>
      <h1>404</h1>
      <p>Lo sentimos, esa pagina no existe!</p>
      <Link to='/'><Button variant='success'>Volver al Inicio</Button>
      </Link>
    </div>
  )
}
