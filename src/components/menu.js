import React from 'react';
import styles from '../styles/menu.css';
import Navigation from './navigation';
import Footer from './footer';
import {CardDeck, Card} from 'react-bootstrap/';
import food1 from '../images/food1.jpg';

function Menu() {
  return (
    <div className="App">
      <Navigation />
      
      <div className="page-title mb-5">
        <h2><strong>MENU</strong></h2>
      </div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3 pb-4">
            <div className="sidebar">
              <div className="menu-navigation">
                <ul>
                  <a href="#lunch-menu"><li> Lunch</li></a>
                  <a href="#drinks-menu"><li>Drinks</li></a>
                  <a href="#dinner-menu"><li>Dinner</li></a>
                </ul>
              </div>
              <div className="restrictions-key ">
                <div className="row mt-5">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4 col-md-12">
                        <p className="">L</p>
                      </div>
                      <div className="col-8 col-md-12">
                        <p className="">Lactose</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4 col-md-12">
                        <p className="">M</p>
                      </div>
                      <div className="col-8 col-md-12">
                        <p className="">Meat</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4 col-md-12">
                        <p className="">G</p>
                      </div>
                      <div className="col-8 col-md-12">
                        <p className="">Gluten</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4 col-md-12">
                        <p className="">N</p>
                      </div>
                      <div className="col-8 col-md-12">
                        <p className="">Nuts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6">
                    <small className="restriction-active">X</small>
                    <p className="mt-3">included</p>
                  </div>
                  <div className="col-6">
                    <small className="restriction-inactive">X</small>
                    <p className="mt-3">absent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-list col-md-9 pb-5">
            
            {/* Lunch menu */}
            <section id="lunch-menu" className="pb-4">
              <h2 className="menu-section-title">Lunch</h2>
                <div className="row mt-3">
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-active">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">M</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-inactive">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">M</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </CardDeck>
                  </div>
                  <div className="row mt-3 mb-3">
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-inactive">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">V</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-active">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">V</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </CardDeck>
                  </div>
              </section>
              
              
               {/* Drinks menu */}
              <section id="drinks-menu" className="pb-4 container">
              <h2 className="menu-section-title  mt-5">Drinks</h2>
                <Card className="bg-dark text-white">
                  <Card.Img src={food1} alt="Card image" />
                </Card>
              {/* wines */}
                <div className="row mt-5 mb-3">
                        <div className="col-12 col-md-6">
                        <h3 className="pb-3">Wines</h3>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>

                        </div>
                  {/* cocktails */}
                        <div className="col-12 col-md-6 ">
                          <h3 className="pb-3">Cocktails</h3>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                          <div className="row drink-item pb-2">
                            <div className="col-5 drink-name">
                              <p>Asbergo 2010</p>
                            </div>
                            <div className="col-7 drink-price">
                              <p>$40.00</p>
                            </div>
                          </div>
                        </div>
                  </div>
              </section>


               {/* Dinner menu */}
               <section id="dinner-menu" className="pb-4">
              <h2 className="menu-section-title mt-5">Dinner</h2>
                <div className="row mt-3">
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-active">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">M</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-inactive">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">M</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </CardDeck>
                  </div>
                  <div className="row mt-3 mb-3">
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-inactive">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-active">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">V</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={food1} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="restriction-info row mt-5 mb-3">
                              <div className="col-3">
                                <small className="restriction-active">L</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">G</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">N</small>
                              </div>
                              <div className="col-3">
                                <small className="restriction-inactive">V</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </CardDeck>
                  </div>
              </section>
          </div>

             
              
          </div>
        </div>

      <Footer />
    </div>
    
  );
}

export default Menu;
