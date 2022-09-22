import React from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// CSS
import './UserForm.css';

export const UserForm = ({sendOrder, onInputChange, formInputs, userForm, itemCartList}) => {
  return (
    <Form onSubmit={sendOrder} className='userForm'>
      {
        formInputs.map(element => (
          <Form.Group key={element.title}>
              <Form.Label>{element.title}</Form.Label>
              <Form.Control 
                name={element.inputName}
                type={element.type}
                placeholder={`Ingrese su ${element.title}.`}
                onChange={(e) => onInputChange(e)}
              />
          </Form.Group>
        ))
      }
      <Button type = "submit" variant = "success"
        disabled = {
          !(
            userForm.name && userForm.surname && userForm.email && userForm.phone && itemCartList.length !== 0
          )
        }
      >Terminar la Compra
      </Button>
    </Form>
  )
}
