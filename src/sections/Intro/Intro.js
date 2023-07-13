import React, { useState, useEffect } from 'react';
import "./IntroAnimated.css";
import { motion } from "framer-motion"; 
import { Canvas, useThree, useFrame } from "@react-three/fiber";



const Intro = () => {
    const [isPoppedOut, setIsPoppedOut] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(togglePopout, 1500);
      return () => clearInterval(interval);
    }, []);
  
    const togglePopout = () => {
      setIsPoppedOut(prevState => !prevState);
    };
  
    const nameVariants = {
      hidden: {
        rotateY: 0,
        x: "0%",
        scale: 1,
        color: "rgba(256, 256, 256)"
      },
      poppedOut: {
        textShadow: "-2px 2px 2px rgba(12, 242, 225)",
        rotateY: 0,
        x: "10%",
        rotateX: 20,
        scale: 1.2,
        color: "rgba(255, 254, 123)",
        transition: {
          duration: 0.5,
        },
      },
    };
  
    const name = "Regan!";
  
    return (
      <div className="jumbotron-fluid " id="jumbotronIntro">
        <div className="animated-title">
          <div className="text-top">
            <div>
              <span id="hname"> Hey, I'm </span>
  
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
          <div className="text-bottom">
            <div>Check out my website.</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Intro;