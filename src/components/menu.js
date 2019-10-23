import React from 'react';
import styles from '../styles/menu.css';
import Navigation from './navigation';
import Footer from './footer';

function Menu() {
  return (
    <div className="App">
      <Navigation />
      <p>Menu page</p>
      <Footer />
    </div>
    
  );
}

export default Menu;
