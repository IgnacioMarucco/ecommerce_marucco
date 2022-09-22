import React, {useState} from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// CSS
import './UserForm.css';

export const UserForm = ({sendOrder, itemCartList}) => {
  const [userForm, setUserForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '', 
  })

  const formInputs = [
    {title: "Nombre", inputName: "name", type: "text"},
    {title: "Apellido", inputName: "surname", type: "text"},
    {title: "Telefono", inputName: "phone", type: "number"},
    {title: "Email", inputName: "email", type: "email"}
  ];

  const onInputChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value})
  }
  
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
