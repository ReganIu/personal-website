import React from 'react'
import './About.css'
import { motion } from "framer-motion"

class About extends React.Component {
    
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

  render () {
    const { isShaking } = this.state;
    
    const shakeVariants = {
      hidden: { 
        y: 0,
      },

      shaking: {
        rotateY: 35,
        // rotateY: 50,
        y: [-5, 15, -5, 15, 0],
        transition: {
            duration: 0.5,
        },
      },
    };

      return (
          <div id='aboutSection' overflow="default">
              
              <div className='jumbotron-fluid' id="jumbotronAbout" ref={this.sectionRef}>
                      <motion.h1
                          id="about-word"
                          variants={shakeVariants}
                          // animate={ isShaking ? "shaking" : "hidden" }
                          animate={{ rotateY: 30 }}
                          transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 0.3 }}

                      >
                          About
                      </motion.h1>
              </div>

              <div class="container fill-screen-height"> 
                  <div class="row">
                      <div class="col-sm-6">
                          <motion.img 
                          id="me-photo" 
                          src={require('../../resources/portraits/me.JPG')} 
                          alt='me'
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 2,
                            scale: {
                              type: "spring",
                              damping: 10,
                              stiffness: 100,
                              restDelta: 0.001
                            }
                          }}
                          />
                      </div>
                      <div class="col-sm-6" id="aboutMe">
                          <motion.h3 
                          className="about-me" 
                          id="me-text"
                          initial={{ opacity: 0, y: 100 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 2,
                            scale: {
                              type: "spring",
                              damping: 5,
                              stiffness: 100,
                            }
                          }}
                          >
                            Hey, I'm Regan Iu and I'm a recent graduate from the University of Toronto. I'm a passionate about creating engaging and user-friendly experiences. I strive to continuously learn and grow in this ever-evolving field, and I'm excited to collaborate on exciting projects. Scroll down to learn more about my experience and the projects that I've created!
                          </motion.h3> 
                          </div>
                  </div>
              </div>
          </div>         
      )
  }
}

export default About