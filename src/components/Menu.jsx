import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>Blog de recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Administrar Recetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
