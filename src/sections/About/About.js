import React from 'react'
import './About.css'

class About extends React.Component {
    render () {
        return (
            <div id='aboutSection' overflow="default">
                
                <div className='jumbotron-fluid' id="jumbotronAbout">
                    <h1 id="about-word">About</h1>
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