import React from 'react';
import Container from 'react-bootstrap/Container';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import Analytics from '../../Assets/images/a1.jpg';
import pic1 from '../../Assets/images/analytics.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './header.component.css';
import styled from 'styled-components';


export const Header = () =>
    (
        <React.Fragment>
       
        <Container fluid='sm'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container> 
        </React.Fragment>
    );