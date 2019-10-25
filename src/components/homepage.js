import React from 'react';
import styles from '../styles/homepage.css';
import restaurant1 from '../images/restaurant1.jpg';
import food1 from '../images/food1.jpg';
import wood from '../images/wood.jpg';
import Icon from '@material-ui/core/Icon';
import Button from 'react-bootstrap/Button';
import Reservation from './reservation';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <div className = "container pb-5">
        <div className="About row mt-5 ">
          <div className="col-lg-6">
            <div className="row">
              <section className="About-text col-12 mt-5">
                <h2 className="mb-5 Welcome">Welcome</h2>
                <p>Come experience Contemporary Afro-Canadian cuisine with an emphasis on local farms and suppliers. 
                 <br /> Our diverse menu offerings include sharing platters which can accommodate large groups and also
                  items which are great for pairing with a glass of wine at the bar. <em><Link to="/about"> Read more...</Link></em>
                </p>
                 
              </section> 
            </div>
            <div className="row">
              <section className="About-text col-12 mt-5" id="reservation">
                <Reservation />
              </section>
                
            </div>
          </div>

          <section className="col-lg-6 mt-5 About-img">
          <img src={restaurant1} className="Restaurant-image" alt="Restaurant seating arrangement" />
          </section>
        </div>  
      </div>



      <div className="Diet-options row mt-5 pt-4 pb-3"> 
        <div className = "container pt-5 pb-5">
          <h3 className = "Diet-options-title">Dietary Restriction Options Available</h3>
         <div className="row pt-5 pb-3">
          <div className="col-md-2">
           <p>Gluten-Free</p>
          </div>
          <div className="col-md-1">
          <Icon> restaurant_icon </Icon>
          </div>
          <div className="col-md-2">
           <p>Lactose-Free  </p>
          </div>
          <div className="col-md-2">
          <Icon> restaurant_icon </Icon>
          </div>
          <div className="col-md-2">
           <p>Vegetarian</p>
          </div>
          <div className="col-md-1">
          <Icon> restaurant_icon </Icon>
          </div>
          <div className="col-md-2">
           <p>Nut-Free and more</p>
          </div>
         </div>
        </div>
      </div>


      <div className = "container pb-5">
        <div className="Menu-times row mt-5">
          <section className="col-md-6 mt-5">
            <img src={food1} className="Menu-times-image" alt="Two dishes" />
          </section>
          <section className=" col-md-6 mt-5">
            <div className="Menu-text pb-3">
              <h2 className="pt-3">Meal Times</h2>
              <table className="Menu-table mt-5">
                <tbody>
                  <tr>
                    <td>Lunch</td>
                    <td>12pm - 4pm</td>
                  </tr>
                  <tr>
                    <td>Cocktail Hour</td>
                    <td>4pm - 5pm</td>
                  </tr>
                  <tr>
                    <td>Dinner</td>
                    <td>5pm - 9.30pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-3 pb-5" id= "button-div">
            <Link to="/menu">
              <Button variant="outline-dark" size="lg" block className="view-menu-btn" > 
                Menu
              </Button>
            </Link>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
