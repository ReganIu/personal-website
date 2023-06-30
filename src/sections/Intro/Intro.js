import React from 'react';
import "./IntroAnimated.css";
import { motion } from "framer-motion"; 


class Intro extends React.Component {
    state = {
        isPoppedOut: false,
      };
    
    componentDidMount() {
        setInterval(this.togglePopout, 1500);
    }

    togglePopout = () => {
    this.setState((prevState) => ({
        isPoppedOut: !prevState.isPoppedOut,
    }))
    }

    render() {    
        const { isPoppedOut } = this.state;
        
        const nameVariants = {
            hidden: {
                rotateY: 0,
                x: "0%",
                scale: 1,
                color: "white",
                textShadow: "none",
            },
            poppedOut: {
                textShadow: "-2px 2px 2px rgba(12, 242, 225, 1)",
                rotateY: 0,
                x: "10%",
                rotateX: 20,
                scale: 1.2,
                color: "rgba(255, 254, 123, 1)",
                transition: {
                    duration: 0.5,
                },
            },
        };

        const name = "Regan!";

        return (    
            <div className="jumbotron-fluid " id="jumbotronIntro">
                <div class="animated-title">
                    <div class="text-top">
                        <div>
                            <span> Hey, I'm </span>

                            <motion.span
                            id="rname"
                            className="intro-name"
                            variants={nameVariants}
                            initial="hidden"
                            animate={isPoppedOut ? "poppedOut" : "hidden"}
                            >
                            {name}
                            </motion.span>

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