import React from 'react';
import "./IntroAnimated.css";
import { motion } from "framer-motion/dist/framer-motion"; 


class Intro extends React.Component {
    state = {
        isClicked: false,
      };
    
      handleClick = () => {
        this.setState((prevState) => ({
          isClicked: !prevState.isClicked,
        }));
      };
    render() {    
        const nameVariants = {
            hidden: {
                opacity: 0,
              },
          visible: {
            opacity: 1,
            transition: {
                duration: 5,
                delay: 0.8,
                staggerChildren: 0.3,
            },
          },
        };

        const letterVariants = {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          };

        const name = "I'm Regan!";


        return (    
            <div className="jumbotron-fluid " id="jumbotronIntro">
                <div class="animated-title">
                    <div class="text-top">
                        <div>
                            <span> Hey, </span>
                            <motion.h1
                            className="intro-name"
                            variants={nameVariants}
                            initial="hidden"
                            animate="visible"
                            
                            >
                            {name.split("").map((letter, index) => (
                            <motion.span
                            key={index}
                            variants={letterVariants}
                            style={{ display: "inline", fontSize: "12vmin" }}
                            >
                                {letter}
                            </motion.span>
                            ))}
                            </motion.h1>
                        </div>
                    </div>
                    <div class="text-bottom">
                        <div>Check out my website.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro