import React from 'react';
import './Experience.css'
import Card from "react-bootstrap/Card"
import { motion } from 'framer-motion';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShaking: true
        };
      }
    
      componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => ({
                isShaking: !prevState.isShaking
            }));
        }, 1000);
      }

    render(){
        const { isShaking } = this.state;
        const shakeVariants = {
            hidden: { 
              y: 0,
            },
      
            shaking: {
              rotateX: 35,
              // rotateY: 50,
              y: [-5, 15, -5, 15, 0],
              transition: {
                  duration: 0.5,
              },
            },
          };
        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronExp">
                    <motion.h1 
                    id="expWord"
                    variants={shakeVariants}
                    animate={ isShaking ? "shaking" : "hidden" }
                    // whileHover="shaking"
                    whileTap="shaking"
                    >
                        Experience
                    </motion.h1>
                    
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <Card>
                                <img id="wattpadPic"  src={require('../../resources/Wattpad-Logo.png')} alt="wattpad-logo"/>
                                <Card.Header style={{ textAlign: 'center', fontSize: '5vh' }}>Wattpad</Card.Header>
                                <Card.Header>Associate Engineer</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle style={{ paddingBottom: '10px' }}>
                                        • Creator Journey | May 2021 - Dec 2021
                                    </Card.Subtitle>
                                    <Card.Subtitle>
                                        • Core Experience | Jan 2022 - Present
                                    </Card.Subtitle>
                                </Card.Body> 
                            </Card>
                        </div>
                        <div class="col-sm-4"></div>
                    </div>
                    
                </div>
            </div>      
        )
    }
}

export default Experience