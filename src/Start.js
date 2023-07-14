import React, { useState } from 'react';
import Navigation from './sections/NavBar/Navigation';
import Intro from './sections/Intro/Intro';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Switch from './Switch'
import './Start.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Start = () => {
    const [theme, setTheme] = useState("dark");
    const [value, setValue] = useState(false);
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        setValue(!value);
    };

    return(
        <div>
            <Navigation/>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                    <StyledApp>
                        {/* <Switch 
                            isOn={value}
                            handleToggle={() => themeToggler()}
                        /> */}
                         
            <div id="intro"> 
                <Intro/>
            </div>
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
            </StyledApp>
            </ThemeProvider>
        </div>
    )
}

export default Start;