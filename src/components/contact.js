import React from 'react';
import styles from '../styles/navigation.css';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Navigation from './navigation';
import Footer from './footer';


function Contact() {
  return (
    <div className="App">
        <Navigation />
      <p>Contact page</p>
        <Footer />
    </div>
  );
}

export default Contact;