import React from 'react';
// Bootstrap spinner
import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <Spinner animation="grow" variant="dark" style={{display: "flex", margin: "0 auto"}}/>
  )
}
