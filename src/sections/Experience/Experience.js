import React, { useState, useEffect } from 'react';
import './Experience.css'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Experience = (props) => {
    const [isShaking, setIsShaking] = useState(true);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsShaking(prevState => !prevState);
        }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }, []);

        const shakeVariants = {
            hidden: { 
                // opacity: 0, 
                // scale: 0.5,
            },
            shaking: {
                rotateY: 35,
            },
        };

        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronExp">
                    <motion.h1 
                    id="expWord"
                    variants={shakeVariants}
                    animate={ isShaking ? "shaking" : "hidden" }
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.7,
                    }}
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

export default Experience