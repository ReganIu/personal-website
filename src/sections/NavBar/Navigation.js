import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Pdf from "../../resources/ReganIuResume.pdf"
import "./Navigation.css"


class Navigation extends React.Component {


    render () {
        return(
            <div>
            <Navbar collapseOnSelect id="navbar" expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="navSections" className="mr-auto">
                    <Nav.Link className="txt" href="#intro" activeClass="active">Home</Nav.Link>
                    <Nav.Link className="txt" href="#about" >About</Nav.Link>
                    <Nav.Link className="txt" href="#projects" >Projects</Nav.Link>
                    <Nav.Link className="txt" href="#contact" >Contact</Nav.Link>
                </Nav>
                <Nav>
                    <div class="icons">
                        <a id="resume-logo" href={Pdf} target = "blank">
                            <i class="fas fa-file-alt"></i>
                        </a>

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