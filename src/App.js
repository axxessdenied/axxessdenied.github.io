import React from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap';
import Helmet from 'react-helmet';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Niko Slusarczyk',
      headerLinks: [
        { title: 'Home', path :'/' },
        { title: 'About', path :'/about' },
        { title: 'Contact', path :'/contact' },
      ],
      home: {
        title: 'Welcome!',
        subTitle: 'axxessdenied.net',
        summary: 'Check out my projects!'
      },
      about: {
        title: 'About me!'
      },
      contact: {
        title: 'Hit me up!'
      }
    }
  }
  
  render() {
    return (
      <Router>
          <Container className="p-0 h-100" fluid={true}>
            <Navbar className="border-bottom" expand="lg">
              <Navbar.Brand className="text-light">Niko Slusarczyk</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link className="nav-link text-light" to="/">Home</Link>
                  <Link className="nav-link text-light" to="/about">About</Link>
                  <Link className="nav-link text-light" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} summary={this.state.home.summary} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
            <Footer />
          </Container>
      </Router>
    );
  }
}

export default App;