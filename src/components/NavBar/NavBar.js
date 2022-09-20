import React from 'react';
import {CartWidget} from './CartWidget/CartWidget.js';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
// Bootstrap
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
// CSS
import './NavBar.css';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img alt="logo de la empresa." src={logo}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center links">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/conocenos'>Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown" >
            <NavDropdown.Item as={Link} to='/category/remeras'>Remeras</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/category/camperas'>Camperas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/category/accesorios'>Accesorios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/cart'><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
