import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Sparkles from './Sparkles';
import SVGDrawer from './SVGDrawer';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 text-light">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder"><Sparkles>{props.title}</Sparkles></h1> }
                        { props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2> }
                        { props.summary && <h3 className="lead font-weight-light">{props.summary}</h3> }
                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <SVGDrawer />
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;