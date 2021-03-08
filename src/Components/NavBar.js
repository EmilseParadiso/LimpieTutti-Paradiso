import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar =() => {
  return <>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Limpie Tutti</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Quienes somos</Nav.Link>
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Articulos de limpieza</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Articulos para tu mascota</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Adornos y algo más</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busca lo que necesites" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
  
}

export default NavBar;