// Bootstrap spinner
import Spinner from 'react-bootstrap/Spinner';

import React from 'react'

export const Loading = () => {
  return (
    <Spinner animation="grow" variant="dark" style={{display: "flex", margin: "0 auto"}}/>
  )
}

