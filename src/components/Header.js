import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../aiko.png';

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <NavbarBrand>
            <Link to="/">
                <img 
                    src={logo}
                    height="30"
                    className="d-inlineblock align-top"
                    alt="aiko(logo da empresa)"
                />
            </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/equipmentList">Equipamentos</Nav.Link>
            <Nav.Link href="/map">Mapa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;