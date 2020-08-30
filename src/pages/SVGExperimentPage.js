import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { Container } from 'react-bootstrap';
import SVGDrawer from '../components/SVGDrawer';
import Bezier from '../components/Bezier';

function SVGExperimentPage(props) {
    return(
        <Container>
            <SVGDrawer />
            <Bezier />
        </Container>
    );
}

export default SVGExperimentPage;