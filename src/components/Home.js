import React from 'react';
import '../assets/stylesheets/home.css';
import Contact from './Contact';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from './Menu';

function Home() {
  return (
    <div>
      <div id="title-container">
        <h1>Under the Sea</h1>
        <hr className="hr"id="hr-home"/>
        <h4>Fresh Seafood Straight From the Gulf</h4>
      </div>

      <div id="about">
        <br />
        <br />
        <br />
        <h1 id="about-heading">  About Us</h1>
        <hr className="hr" id="hr-about"/>
        <div id="about-content">
          
          <img id="city-img"alt="city" src={require('../assets/images/city.jpg')} />
          
          <p id="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div id="photos">
        <img id="bg" alt="background" src={require('../assets/images/bg.png')} />
        <div id="img-container">
          <div id="img-box">
            <img
              className="img"
              id="one"
              alt="background"
              src={require('../assets/images/fishnchips.jpg')}
            />

          </div>
          <div id="img-box">
            <img
              className="img"
              id="two"
              alt="background"
              src={require('../assets/images/blackened-shrimp.jpg')}
            />
            
          </div>
          
          <div id="img-box">
            <img
              className="img"
              id="three"
              alt="background"
              src={require('../assets/images/fish-poboy.jpg')}
            />
          </div>
          
          <div id="img-box">
            <img
              className="img"
              id="four"
              alt="background"
              src={require('../assets/images/grilledfish.jpg')}
            />
          </div>
          <div id="img-box">
            <img
              className="img"
              id="five"
              alt="background"
              src={require('../assets/images/lobstertail.jpg')}
            />
          </div>
          <div id="img-box">
            <img
              className="img"
              id="six"
              alt="background"
              src={require('../assets/images/oysters.jpg')}
            />
          </div>
          <div id="img-box">
            <img
              className="img"
              id="seven"
              alt="background"
              src={require('../assets/images/shrimp-pasta.jpg')}
            />
          </div>
          <div id="img-box">
            <img
              className="img"
              id="eight"
              alt="background"
              src={require('../assets/images/shrimpnchips.jpg')}
            />
          </div>
        </div>
        <div id="center">
          <Link
            style={{
              fontSize: '20px',
              textDecoration: 'none',
              color: 'lightgrey'
            }}
            to="/menu"
          >
            <button id="menuButton">Check Out Our Menu Here!</button>
          </Link>

        </div>
      </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
      <div>
        <div id="contact-page">
          <Contact />
        </div>
      </div>
      <Switch>
        <Router path="/menu">
          <Menu />
        </Router>
      </Switch>
    </div>
  );
}
export default Home;
