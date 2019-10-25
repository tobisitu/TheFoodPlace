import React, { useState } from 'react';
import styles from '../styles/reservation.css';
import Button from 'react-bootstrap/Button';
import {Form, InputGroup, Col} from 'react-bootstrap';

function Reservation() {
     // Declare new state variable
    const [showReservation, setStart] = useState(false);
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
          <div>
            <p className="reservation-btn" onClick={() => setStart(!showReservation)}>Make a Reservation</p>
          </div>
          {/* Show div below if showReservation is true ie if button is clicked */}
          {showReservation && 
          <div className="mt-5 reservation-form">
              <h3 className="pb-2 mb-4">Reservation Request</h3>
              
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Jane"
                        // defaultValue="Jane"
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                            Please enter your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Doe"
                        // defaultValue="Doe"
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                            Please enter your last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Janedoe@email.com"
                        // defaultValue="Janedoe@email.com"
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        <Form.Control.Feedback type="invalid">
                            Please enter your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    </Form.Row>

                    <Form.Row>

                    <Form.Group as={Col}md="4" controlId="formGridState">
                    <Form.Label>Number of people</Form.Label>
                    <Form.Control as="select">
                        {/* <option>Choose...</option> */}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please select a valid date.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}md="4" controlId="formGridState">
                    <Form.Label>Date</Form.Label>
                    <Form.Control as="select">
                        {/* <option>Choose...</option> */}
                        <option>01/01/2020</option>
                        <option>01/02/2020</option>
                        <option>01/03/2020</option>
                        <option>01/04/2020</option>
                        <option>01/05/2020</option>
                        <option>01/06/2020</option>
                        <option>01/07/2020</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please select a valid date.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}md="4" controlId="formGridState">
                    <Form.Label>Time</Form.Label>
                    <Form.Control as="select">
                        {/* <option>Choose...</option> */}
                        <option>12pm</option>
                        <option>12.30pm</option>
                        <option>1pm</option>
                        <option>1.30pm</option>
                        <option>2pm</option>
                        <option>2.30pm</option>
                        <option>3pm</option>
                        <option>3.30pm</option>
                        <option>4pm</option>
                        <option>4.30pm</option>
                        <option>5pm</option>
                        <option>5.30pm</option>
                        <option>6pm</option>
                        <option>6.30pm</option>
                        <option>7pm</option>
                        <option>7.30pm</option>
                        <option>8pm</option>
                        <option>8.30pm</option>
                        <option>9pm</option>
                    
                        <Form.Control.Feedback type="invalid">
                        Please select a valid time.
                        </Form.Control.Feedback>
                     </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" onClick={handleSubmit} className="mt-3 submit mb-4">Submit form</Button>
                <div className="attention">
                    <small >If your request has been approved, you will get an email confirmation from us!</small>
                </div>
            </Form>
          </div>}
          {validated &&
            <div className="success">
                <p>Request received. Expect an email from us!</p>
            </div>
          }
      </div>
    );
  }
  
  export default Reservation;