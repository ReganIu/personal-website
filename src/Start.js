import React from 'react';
import Navigation from './sections/NavBar/Navigation';
import Intro from './sections/Intro/Intro';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import './Start.css';

class Start extends React.Component{
    render(){
        return(
            <div>
                <div id="intro"> 
                    <Intro/>
                </div>
                    <Navigation/>
                <div id="about">
                    <About/>
                </div>
                <div id="experience">
                    <Experience/>
                </div>
                <div id="projects">
                    <Projects/>
                </div>
                <div id="contact">
                    <Contact/>
                </div>
            </div>
        )
    }
}

export default Start;