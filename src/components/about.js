import React from 'react';
import styles from '../styles/about.css';
import Navigation from './navigation';
import Footer from './footer';
import food1 from '../images/food1.jpg';
import restaurant2 from '../images/restaurant2.jpg';
// import restaurant3 from '../images/restaurant3.jpg';
import restaurant4 from '../images/restaurant4.jpg';
import restaurant5 from '../images/restaurant5.jpg';



function About() {
  return (
    <div className="App">
        <Navigation />
        <div className="page-title mb-5">
          <h2><strong>OUR STORY</strong></h2>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-6 about-text">
              <h2 className="fancy mb-4">the FoodPlace</h2>
              <p>Looking to experience Contemporary Afro-Canadian cuisine with an emphasis on local farms and suppliers? 
                  <br />Our diverse menu offerings include sharing platters which can accommodate large groups and also
                  items which are great for pairing with a glass of wine at the bar.</p>
                  <p>The FoodPlace was founded in 2015 by two Nigerian Canadian sisters - <em>Funmi Osubare and Lore Osubare. </em><br /> <br />
                  The pair have always enjoyed cooking and this restaurant was birthed as a solution to a lot of problems they and others seemed to experience 
                  as food lovers with quite a few significant dietary restrictions. <br /><br /> 
                  The Osubare sisters believe that everyone deserves to eat good, tasty food and feel good during and after a meal so come in for an experience you'll never forget! 
              </p>
            </div>
            <div className="col-12 col-lg-6 about-text mt-4 mb-5">
              <div className="row mt-5">
                <div className="col-6">
                  <img className="image-about" src={restaurant5} alt="About the FoodPlace"/>
                </div>
                <div className="col-6">
                  <img className="image-about" src={restaurant4} alt="About the FoodPlace"/>
                </div>
              </div>
              <div className="row mt-4">
              <div className="col-6">
                  <img className="image-about" src={food1} alt="About the FoodPlace"/>
                </div>
                <div className="col-6">
                  <img className="image-about" src={restaurant2} alt="About the FoodPlace"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  );
}

export default About;