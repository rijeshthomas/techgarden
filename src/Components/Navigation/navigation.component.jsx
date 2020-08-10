import React, { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Styled from 'styled-components';
import Logo from '../../Assets/images/logo.png';
import Image from 'react-bootstrap/Image';


const Styles = Styled.div`
.navbar {
    background-color : #f1f1f1;
}

.navbar-brand, .navbar-nav .nav-link {
    color : #123;

    &:hover {
        color: green;
    }
}
` ;

export const NavigationBar  = () => (
<Fragment>
    <Styles>
    <Navbar fluid variant="dark">
    <Navbar.Brand href="#home">
      <Image  src={Logo} className="d-inline-block align-top" rounded
      />
      
    </Navbar.Brand>
            <Navbar.Toggle aria-controls= "basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = 'ml-auto'>
                    <Nav.Item><Nav.Link href = "/about">  Insights & News   </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/about">  Industries  </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/about">  Services  </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/about">  Partners  </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/careers">  Careers  </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/contactus">  Contact Us  </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </Styles>

    
    </Fragment>
)