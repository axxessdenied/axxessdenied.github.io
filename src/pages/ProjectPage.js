import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { Container } from 'react-bootstrap';

function ProjectPage(props) {
    return(
        <Container>
            <Hero title={props.title} subTitle={props.subTitle} summary={props.summary} />
            <Carousel />
        </Container>
    );
}

export default ProjectPage;