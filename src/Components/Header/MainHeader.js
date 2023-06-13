import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


export default function MainHeader() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Comm Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Button variant="outline-light" size="sm" className="mx-2">
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline-light" size="sm" className="mx-2">
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-light" size="sm" className="mx-2">
                  Contact US
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
