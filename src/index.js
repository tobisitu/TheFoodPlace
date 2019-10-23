import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker'


ReactDOM.render( 
    <Router>
        <Route exact path="/" component = {App}/>
        <Route exact path="/menu" component = {Menu}/>
        <Route exact path="/about" component = {About}/>
        <Route exact path="/contact" component = {Contact}/>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
