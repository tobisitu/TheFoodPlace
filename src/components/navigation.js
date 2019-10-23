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
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown"> 
              <NavDropdown.Item href="#action/3.1">Lunch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cocktails and Wine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Search by Category</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;