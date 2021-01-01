import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css"


class Navigation extends React.Component {

    // constructor method to bind the methods for the sticky Navbar 
    // constructor (){
    //     super()
    //     this.myFunction = this.myFunction.bind(this)
    // }

    // function myFunction () {
    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }


    render () {
        return(
            <div>
            <Navbar collapseOnSelect id="navbar" expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#Intro">Regan Iu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="navSections" className="mr-auto">
                    <Nav.Link  id = "home" href="#intro" activeClass="active">Home</Nav.Link>
                    <Nav.Link  id = "about" href="#about" >About</Nav.Link>
                    <Nav.Link  id = "projects" href="#projects" >Projects</Nav.Link>
                    <Nav.Link  id = "contact" href="#contact" >Contact</Nav.Link>
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