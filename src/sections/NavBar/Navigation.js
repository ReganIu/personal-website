import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Pdf from "../../resources/ReganIuMay2023.pdf"
import "./Navigation.css"
import { motion, Variants } from "framer-motion";


const Navigation = () => {

    // const { isOpen } = this.state;
    const [isOpen, setIsOpen] = useState(false);
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
    
    return(
        <div>
            <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
            >
                <motion.button
                    whileTap={{ scale: 0.57 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Menu */}
                    <motion.div
                    variants={{
                        open: { rotate: 20 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    >
                    {/* <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg> */}
                        <span></span>
                        <span></span>
                        <span></span>
                    </motion.div>
                </motion.button>
                <motion.ul
                variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                    }
                }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <motion.li variants={itemVariants}><Nav.Link className="txt" href="#intro" activeclass="active">Home</Nav.Link> </motion.li>
                    <motion.li variants={itemVariants}><Nav.Link className="txt" href="#about" >About</Nav.Link> </motion.li>
                    <motion.li variants={itemVariants}><Nav.Link className="txt" href="#experience" >Experience</Nav.Link> </motion.li>
                    <motion.li variants={itemVariants}><Nav.Link className="txt" href="#projects" >Projects</Nav.Link> </motion.li>
                    <motion.li variants={itemVariants}><Nav.Link className="txt" href="#contact" >Contact</Nav.Link> </motion.li>
                    
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
                    
                </motion.ul>
                
            </motion.nav>
        {/* <Navbar collapseOnSelect id="navbar" expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navSections" className="mr-auto">
                <Nav.Link className="txt" href="#intro" activeclass="active">Home</Nav.Link>
                <Nav.Link className="txt" href="#about" >About</Nav.Link>
                <Nav.Link className="txt" href="#experience" >Experience</Nav.Link>
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
        </Navbar> */}
        </div>
    )
    
}

export default Navigation