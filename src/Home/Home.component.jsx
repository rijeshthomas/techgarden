import React from 'react';
import Container from 'react-bootstrap/Container';
import { Jumbotron as Jumbo } from 'react-bootstrap';

import pic1 from '../Assets/images/analytics.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './home.component.css';
import styled from 'styled-components';

export const Home = () =>
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
       </React.Fragment>)

//   <Container>

  
//     <Media>
     
//       <Media.Body>
//         <Row style={{ padding: '1.1em 1.5rem' }}>
//           <h3 style={{ color: 'green' }}>WE ARE TECHGARDEN SOFTWARE</h3>

//         </Row>
//         <Row style={{ padding: '.1em .5rem' }}>
//           <h5 style={{ color: 'green' }}>Creative and innovative ideas & solutions for the technology industry around the globe</h5>
//         </Row>
//         <p>
//           <Row style={{ padding: '0.25em 0.5rem' }}>The company was founded by a group of professionals with more than 40 years of professional experience between them,
//           in conceptualizing and implementing Enterprise and Consumer mobility solutions.
//              </Row>

//           <Row className="justify-content-md-center" style={{ padding: '0.25em 0.5rem' }}>Design and develop robust, clean, easy to use and feature-rich software that seamlessly integrates into people’s lives. Our mission is to create world-class "Made in India" software.
// The challenges are to transform a complex idea into a simpler one. Not many people do this.</Row>

//           <Row className="justify-content-md-center" style={{ padding: '0.25em 0.5rem' }}>We are committed in delivering to our customers and partners solutions that strategically i
//           ntegrate technology with their businesses to give them a competitive advantage in terms of operational excellence, customer intimacy and product leadership.
//           While we are focused on internet technologies, our breadth and depth of knowledge of client/server and
//           legacy systems enables us to help clients leverage existing mission critical systems, saving both cost and time.
//  </Row>
//           <Row className="justify-content-lg-center" style={{ padding: '0.25em 0.5rem' }}>Techgarden Software, an IT services company with growing business capabilities in web applications, mobile applications, market research data, online marketing domain, web & graphic development. We are able to adopt new technologies early and work through refined processes to keep our clients happy and in turn their customers happy. Our primary objective is to develop applications for the future.
//  </Row>
//           <Row className="justify-content-lg-left" style={{ padding: '0.25em 0.5rem' }}>
//             At Techgarden Software, we believe our responsibility extends beyond just project deliveries but also giving right guidance and sharing relevant
//             knowledge with our clients, empowering our employees to handle complex situations at work, and create a culture of fun and learning in the organization.
//             To fulfil our business commitments is our duty but to do with righteousness, clarity and prudence has always been our forte.
//  </Row>
//         </p>
//       </Media.Body>
//     </Media>
      
//       </Container > )
     
    
