import React from 'react';
import styles from '../styles/footer.css';
import Icon from '@material-ui/core/Icon';

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
                <p className="footer-link pb-2"><a href="#"> Home</a></p>
                <p className="footer-link pb-2"><a href="#"> Menu</a></p>
                <p className="footer-link pb-2"><a href="#"> Our Story</a></p>
                <p className="footer-link pb-2"><a href="#"> Contact Us</a></p>
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
