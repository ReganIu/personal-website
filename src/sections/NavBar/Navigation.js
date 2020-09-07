import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css"


class Navigation extends React.Component {
    render () {
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Regan Iu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
                <a id="linkedin-logo" href="https://www.linkedin.com/in/reganiu/" target ="blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                
                <a id="github-logo" href="https://github.com/reganiu" target="blank">
                    <i class="fab fa-github-square"></i>
                </a>
            </Nav>
            </Navbar>
        </div>
        )
    }
}

export default Navigation