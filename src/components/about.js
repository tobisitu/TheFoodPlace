import React from 'react';
import styles from '../styles/navigation.css';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Navigation from './navigation';


function About() {
  return (
    <div className="App">
        <Navigation />
      <p>About page</p>
    </div>
  );
}

export default About;