import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1 className="Masthead-text">the FoodPlace</h1>
        
      </header>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
