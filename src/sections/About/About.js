import React, { useState, useEffect } from 'react'
import './About.css'
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion";
import meImg from "../../resources/portraits/me.JPG";
import pokeImg from "../../resources/projectpics/pokerec.png"

const About = () => {
    
  const [isShaking, setIsShaking] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShaking((prevIsShaking) => !prevIsShaking);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);
  const images = [
    meImg,
    meImg
  ];
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

    const shakeVariants = {
      hidden: { 
        y: 0,
      },

      shaking: {
        rotateY: 35,
        // rotateY: 50,
        transition: {
            duration: 0.5,
        },
      },
    };

    return (
        <div id='aboutSection' overflow="default">
            
            <div className='jumbotron-fluid' id="jumbotronAbout" >
                    <motion.h1
                        id="about-word"
                        variants={shakeVariants}
                        // animate={ isShaking ? "shaking" : "hidden" }
                        animate={{ rotateY: 30 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", repeatDelay: 0.3 }}

                    >
                        About
                    </motion.h1>
            </div>

            <div class="container fill-screen-height"> 
                <div class="row">
                    <div class="col-sm-6">
                      <AnimatePresence initial={false} custom={direction}>
                        <motion.img 
                        id="me-photo" 
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        // exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                          }
                        }}
                        alt='me'
                        // initial={{ opacity: 0, scale: 0.7 }}
                        // whileInView={{ opacity: 1, scale: 1 }}
                        // transition={{
                        //   duration: 2,
                        //   scale: {
                        //     type: "spring",
                        //     damping: 10,
                        //     stiffness: 100,
                        //     restDelta: 0.001
                        //   }
                        // }}
                        />
                      </AnimatePresence>
                        <div className="next" onClick={() => paginate(1)}>
                          {"‣"}
                        </div>
                        <div className="prev" onClick={() => paginate(-1)}>
                          {"‣"}
                        </div>
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
                          Hey, I'm Regan Iu and I'm a recent graduate from the University of Toronto. I'm passionate about creating engaging and user-friendly experiences.
                        </motion.h3> 
                        <motion.h3 
                        className="about-me" 
                        id="me-text"
                        initial={{ opacity: 0, y: -100 }}
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
                          I strive to continuously learn and grow in this ever-evolving field, and I'm excited to collaborate on exciting projects. Scroll down to learn more about my experiences and the projects that I've created!
                        </motion.h3> 
                        </div>
                </div>
            </div>
        </div>         
    )
  
}

export default About