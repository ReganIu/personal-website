import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import "./IntroAnimated.css";
import { motion, useTransform, useScroll, useTime } from "framer-motion"; 
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { degreesToRadians, progress, mix } from "popmotion";



const Intro = () => {
    const [isPoppedOut, setIsPoppedOut] = useState(false);
  
    // useEffect(() => {
    //   const interval = setInterval(togglePopout, 1500);
    //   return () => clearInterval(interval);
    // }, []);
  
    // const togglePopout = () => {
    //   setIsPoppedOut(prevState => !prevState);
    // };
  
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

    const Star = ({ p }) => {
        const ref = useRef(null);
      
        useLayoutEffect(() => {
          const distance = mix(10, 10, Math.random());
          const yAngle = mix(
            degreesToRadians(180),
            degreesToRadians(10),
            Math.random()
          );
          const xAngle = degreesToRadians(360) * p;
          ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
        });
        return (
            <mesh ref={ref}>
              <boxGeometry args={[0.05, 0.05, 0.05]} />
              <meshBasicMaterial wireframe color={"#aee4ed"} />
            </mesh>
          );
    };

    function Scene({ numStars = 1000 }) {
        const gl = useThree((state) => state.gl);
        const { scrollYProgress } = useScroll();
        const yAngle = useTransform(
          scrollYProgress,
          [0, 1],
          [0.001, degreesToRadians(360)]
        );
        const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
        const time = useTime();
      
        useFrame(({ camera }) => {
          camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
          );
          camera.updateProjectionMatrix();
          camera.lookAt(0, 0, 0);
        });
      
        useLayoutEffect(() => gl.setPixelRatio(3));
      
        const stars = [];
        for (let i = 0; i < numStars; i++) {
          stars.push(React.createElement(Star, { p: progress(0, numStars, i) }));
        }
      
        return (
          <>
            {stars}
          </>
        );
    }
  
    return (
      <div className="jumbotron-fluid " id="jumbotronIntro">
        <Canvas >
            <Scene />
        </Canvas>
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