import React from 'react'
import './About.css'

class About extends React.Component {
    render () {
        return (
            <div id='aboutSection'>
                
                <div className='jumbotron-fluid' id="jumbotronAbout">
                
                    <h1 style={{textAlign:'right', fontFamily: 'Lato'}}>About</h1>
                    <p className="about-me"></p>
                </div>
                    <div class="container"> 
                        <div class="row">
                            <div class="col-sm">
                                <img id="me-photo" src={require('../../resources/potraits/me.jpg')} alt='me'/>
                            </div>
                            <div class="col-sm">
                                <h1 id="me-text">Hi, my name is Regan Iu and I'm currently a 3rd year student at the University of Toronto, where I'm studying a double major in Cognitive Science and Mathematics with a minor in Statistics. I built this website in React to learn more about web development and to show others about the projects that I've created!</h1> 
                            </div>
                        </div>
                    </div>
                    
                    {/* <Image alt="me" src={'resources/background/leaf-bg.jpg'}/> */}
            </div>         
        )
    }
}

export default About