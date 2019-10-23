import React from 'react';
import styles from '../styles/footer.css';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer pb-5">
      <div className="Footer-container container pt-5">
        <div className="row">
            <div className="col-md-6">
                <h2 className="footer-logo pb-3">The FoodPlace</h2>
                <p><a href="mailto:info@thefoodplace.ca"><Icon className="footer-icon"> mail_icon </Icon> </a>info@thefoodplace.ca</p>
                <p><Icon className="footer-icon"> phone_icon </Icon>+1 613-467-1328</p>
                <p><Icon className="footer-icon"> room_icon </Icon>248 Food Street, React, Canada</p>
            </div>
            <div className="col-md-6 pt-4">
                <p className="footer-link pb-2"><Link to ="/"> Home</Link></p>
                <p className="footer-link pb-2"><Link to ="/menu">Menu</Link></p>
                <p className="footer-link pb-2"><Link to ="/about">Our Story</Link></p>
                <p className="footer-link pb-2"><Link to ="/contact">Contact Us</Link></p>
            </div>
            <div className="copyright col-12 pt-3">
                Copyright © the FoodPlace 2019
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
