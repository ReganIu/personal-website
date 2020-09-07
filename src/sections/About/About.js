import React from 'react'
import './About.css'

class About extends React.Component {
    render () {
        return (
            <div className='jumbotron-fluid' id="jumbotronAbout">
            
                <h1 style={{textAlign:'right', fontFamily: 'Lato'}}>About</h1>
                <p className="about-me"></p>

            </div>
            
        )
    }
}

export default About