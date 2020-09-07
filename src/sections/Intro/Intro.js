import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Intro.css"

class Intro extends React.Component {
    render() {


        return (
            <div className="jumbotron-fluid bg-dark text-center" id="jumbotronIntro">
                <div className="intro">
                    <h1 className="intro-text" id="name">Hey, I'm Regan!</h1>
                </div>

            </div>
        )
    }
}

export default Intro