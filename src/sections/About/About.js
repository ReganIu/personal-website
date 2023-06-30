import React from 'react'
import './About.css'
import { motion, animate } from "framer-motion"

class About extends React.Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
      }
    
      componentDidMount() {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 1, // Adjust this value based on when you want the animation to start
        };
    
        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.sectionRef.current);
      }
    
      componentWillUnmount() {
        if (this.observer) {
          this.observer.disconnect();
        }
      }
    
      handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateIn();
            observer.unobserve(entry.target);
          }
        });
      };
    
      animateIn = () => {
        animate(this.sectionRef.current, { opacity: 1, x: 0 }, { duration: 1 });
      };

    render () {
        return (
            <div id='aboutSection' overflow="default">
                
                <div className='jumbotron-fluid' id="jumbotronAbout" ref={this.sectionRef}>
                    {/* TODO: need to make it always animate */}
                        <motion.h1
                            id="about-word"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            About
                        </motion.h1>
                </div>

                <div class="container fill-screen-height"> 
                    <div class="row">
                        <div class="col-sm-6">
                            <img id="me-photo" src={require('../../resources/portraits/me.JPG')} alt='me'/>
                        </div>
                        <div class="col-sm-6" id="aboutMe">
                            <h3 className="about-me" id="me-text">Hey, I'm Regan Iu and I'm a recent graduate from the University of Toronto. I'm a passionate about creating engaging and user-friendly experiences. I strive to continuously learn and grow in this ever-evolving field, and I'm excited to collaborate on exciting projects. Scroll down to learn more about my experience and the projects that I've created!</h3> 
                            </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default About