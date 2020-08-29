import React from 'react';
import Card from '../components/Card';
import { Container, Row } from 'react-bootstrap';
import galaxy1 from '../assets/images/galaxy1.jpg';
import galaxy2 from '../assets/images/galaxy2.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Noise Implant',
                    subTitle: 'Some of my music',
                    link: 'https://noiseimplant.com',
                    imgSrc: galaxy1,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Chernobog Studio on Youtube',
                    subTitle: 'Some of my videos',
                    link: 'https://youtube.com/c/chernbogstudio',
                    imgSrc: galaxy2,
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
