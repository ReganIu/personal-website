import React from 'react';
import "./IntroAnimated.css"

class Intro extends React.Component {
    render() {


        return (    
            <div className="jumbotron-fluid " id="jumbotronIntro">
                <div class="animated-title">
                    <div class="text-top">
                        <div>
                            <span>Hey,</span>
                            <span>I'm Regan!</span>
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