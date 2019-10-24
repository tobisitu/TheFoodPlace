import React from 'react';
import styles from '../styles/navigation.css';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand><Link to ="/">the FoodPlace</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'>HOME</Link></Nav.Link>
            <Nav.Link><Link to='/menu'>MENU</Link></Nav.Link>
            <Nav.Link><Link to='/about'>ABOUT</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>CONTACT</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;