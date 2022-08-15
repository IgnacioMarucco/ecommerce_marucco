import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
              alt="logo de la empresa."
              src="../../assets/img/logo.webp"
            />
          JC Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#conocenos">Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#jeans">Jeans</NavDropdown.Item>
            <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#devoluciones">Politica de Devoluciones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
