import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css"


class Navigation extends React.Component {
    render () {
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#Intro">Regan Iu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link  href="#intro" activeClass="active">Home</Nav.Link>
                    <Nav.Link  href="#about" activeClass="active">About</Nav.Link>
                    <Nav.Link  href="#projects" activeClass="active">Projects</Nav.Link>
                </Nav>
                <Nav>
                    <div class="icons">
                        <a id="linkedin-logo" href="https://www.linkedin.com/in/reganiu/" target ="blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        
                        <a id="github-logo" href="https://github.com/reganiu" target="blank">
                            <i class="fab fa-github-square"></i>
                        </a>

                        <a id="email-logo" href="mailto:regan.iu@outlook.com" target="blank">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                    </div>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Navigation