import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Menu from './components/Menu'
import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'lightgrey' }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'lightgrey' }}
                to="/#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'lightgrey' }}
                to="/#photos"
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'lightgrey' }}
                to="/#contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: 'lightgrey' }}
                to="/menu"
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/#contact">
            
            <Home />
          </Route>
          <Route path="/#photos">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
          <ScrollToTop />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
