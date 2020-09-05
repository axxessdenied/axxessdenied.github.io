import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Experiment from './Experiment';

function Footer() {
    return(
      <footer className="mt-5">
          <Container fluid={true}>
              <Row className="border-top justify-content-between p-3">
                  <Col className="p-0 text-light" md={3} sm={12}>
                    Niko Slusarczyk
                  </Col>
                  <Col className="p-0 d-flex justify-content-end text-light" md={3}>
                    <Experiment>
                      Made by Niko Slusarczyk. 2020
                    </Experiment>
                  </Col>
              </Row>
          </Container>
      </footer>  
    );
}

export default Footer;