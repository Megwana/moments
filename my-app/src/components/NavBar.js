import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.css';
import runningLogo from '../assets/running.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <div className="container">
        <div className='navbar-brand-container'>
          <Navbar.Brand href="/">hotFeet <img src={runningLogo} alt="Running Logo" className="running-logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
