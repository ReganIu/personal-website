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
                            <img id="me-photo" src={require('../../resources/portraits/me.jpg')} alt='me'/>
                        </div>
                        <div class="col-sm-6" id="aboutMe">
                            <h3 className="about-me" id="me-text">Hi, my name is Regan Iu and I'm currently a third year student at the University of Toronto, where I'm majoring in Computational Cognition and double minoring in Mathematics and Statistics. I built this website in React to learn more about web development and to show others about the projects that I've created!</h3> 
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default About